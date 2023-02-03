import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './firease/firebase'

const Checking = () => {
    const [number, setNumber] = useState()
    const [inputvalue, setstate] = useState()
    console.log(inputvalue)
    const onCaptchVerify=()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
         alert(response)
        },
      
      }, auth)} 
const onSubmit = () =>{ 
    onCaptchVerify()
  
    
}
  return (
    <div>
        <div id="recaptcha-container"></div>

    <input onChange={(e)=>setstate(e.target.value)} style={{border:"2px solid black"}}/>
      <button onClick={onSubmit}>sendOtp</button>
    </div>
  )
}

export default Checking
