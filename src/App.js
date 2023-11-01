
import './App.css';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  // jscode
  const[principle , setPrinciple] = useState(0)
  const[rate, setRate] = useState(0)
  const[year, setYear] = useState(0)
  const [interest , setInterest] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const[isRate, setIsRate] = useState(true)
  const[isYear, setIsYear] = useState(true)

  const validateData = (e)=>{
    const {name ,value}=e.target
    // console.log(name ,value);
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
      
    }
    else{
      if(name==='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }

  }

  const handleCalculate = (e)=>{
    e.preventDefault()
      if(!principle || !rate || !year){
        alert('Please fill the form completely')
      }
      else{
        setInterest(principle*rate*year/100)
      }
  }

  const handleReset = (e)=> {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)

  }

  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
    <div  className='bg-light p-5 rounded' style={{width:'500px'}}>
       <h1>Simple Interest App</h1>
       <p>Calculate your simple interest easily!</p>
       <div style={{height:'150px'}}  className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded flex-column shadow'>
        <h1> ₹{interest}</h1>
        <p>Total simple interest</p>

       </div>
       <form onSubmit={handleCalculate  } className='mt-5'>
      <div className='mb-3'>
      <TextField name='principle' value={principle || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="Principle Amount" variant="outlined" />
      </div>

      { !isPrinciple &&

      <div><p className='text-danger fw-bold'>Invalid input</p></div>

      }

      <div className='mb-3'>
      <TextField onChange={(e)=>validateData(e)} name='rate' value={rate || ""} className='w-100' id="outlined-basic" label="Rate of Interest" variant="outlined" />
      </div>
       { !isRate &&

      <div><p className='text-danger fw-bold'>Invalid input</p></div>

      }

      <div className='mb-3'>
      <TextField onChange={(e)=>validateData(e)} name='year' value={year || ""} className='w-100' id="outlined-basic" label="Duration" variant="outlined" />
      </div>
      { !isYear &&

      <div><p className='text-danger fw-bold'>Invalid input</p></div>

      }

      <div className='mt-5'>
        <Stack direction="row" spacing={2}>
        <Button type='submit' disabled={isPrinciple&&isRate&&isYear ?false:true} className='bg-success' variant="contained" style={{height:'60px',width:'200px'}}>Calculate</Button>
        <Button onClick={handleReset} variant="outlined" style={{height:'60px',width:'200px'}}>Reset</Button>
        </Stack>
         
      </div>

    </form>
    </div>
    

    </div>
  );
}

export default App;
  