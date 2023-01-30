import React, { useState } from 'react'
import "./Option.css"
// import Checkbox from '@mui/material/Checkbox';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Option = () => {
  const [Color, setcolor] = useState("")

  const labelColor = (e) =>{
      setcolor(e)
  }
  

  return (
    <div className='optionMain'>
      <div className='SubOptionMain' >
        <div className="option">
          <div className='SubOption'>
            <h4>Add - Ons</h4>
            <p>Select upto 2</p>
          </div>
          <div className='Optionbtn'>
            <button type="">Optional</button>
          </div>
        </div>
       
        <FormGroup>
        <div className='checkbox1'>
        <FormControlLabel className={Color == 1 ? "ss" :"dd"} control={<Checkbox onClick={() => {labelColor(1)}}/>} label="Sentosa"  />
         <h2>$15.00</h2> 
        </div>
         <div className='checkbox1'>
        <FormControlLabel  className={Color==2? "ss" :"dd"} control={<Checkbox onClick={() => {labelColor(2)}} />} label="Sentosa" />
         <h2>$15.00</h2> 
        </div>
      </FormGroup>

   
      </div>

    </div>
  )
}

export default Option
