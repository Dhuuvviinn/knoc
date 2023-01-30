import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import image from  "../../Image/googleLogo.png"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth'
import { app } from '../firease/firebase'
import { async } from '@firebase/util'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const Register = () => {
  const nav = useNavigate()
  const provider = new GoogleAuthProvider();
const appVerifier = window.recaptchaVerifier;
  const auth = getAuth(app);
const register = async() =>{
  const response = await signInWithPopup(auth,provider)
  const userdata = response.user.providerData[0]

  localStorage.setItem('Userdata', JSON.stringify(userdata));
    nav("/")
}
 const [number, setNumber] = useState()
const [inputValues, setInputValues] = useState({
  first :"",last:"",email: '', password: '',phone:"",number:""
});


const Textregister = async() =>{
  await createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password)
   
}

 const onCaptchVerify=()=>{window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
   
  },

}, auth)}   
const onSubmitOTP = () =>{
  console.log("object1")
  onCaptchVerify()
  console.log("object2")

  const phoneNumber = number;
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
   alert()
  
  }).catch((error) => {
    // Error; SMS not sent
    // ...
  });
}
const verfiycode = () =>{
  window.confirmationResult.confirm("").then((result) => {
    // User signed in successfully.
    const user = result.user;
    alert("invalid otp")
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
  });
}
  
  console.log(inputValues)
 const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });


};
  return (
    <div className='LoginMain'>
    <div className='Loginsbmain'>
        
   <h1>Register</h1>
      <div className='login1'>

          <div className='Email' >
          <p>First Name</p>
            <input type="text" name="first" placeholder='First...' onChange={handleOnChange} value={inputValues.first}/> 
         </div>
         <div className='Email' >
         <p>Last Name</p>
           <input type="text" name="last" placeholder='Last...' onChange={handleOnChange} value={inputValues.last}/> 
        </div>
          <div className='Email' >
          <p>Email</p>
          <input type="email" name="email" placeholder='Email...' onChange={handleOnChange} value={inputValues.email}/> 
          </div>


          <div className='passord'>
          <p>Phone Number</p>
          <PhoneInput
          placeholder="Enter phone number"
          value={number}
      onChange={(e)=>setNumber(e)}/>
          </div>
           <div id='recaptcha-container'>
            
           </div>
          <button onClick={Textregister}>Register</button>
          <button onClick={onSubmitOTP}>Send OTP</button>
      <div className='forgetpassword'>
      <Link>Forgot Password?</Link>
      <Link to="/login">already register</Link>
      </div>
      </div>
      <div className='GoogleLogin'>
        <div className='googleimage'>
            <img onClick={register} src={image} alt=""/>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Register
