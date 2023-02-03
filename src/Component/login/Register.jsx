import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import image from  "../../Image/googleLogo.png"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth'
import { app } from '../firease/firebase'
import { async } from '@firebase/util'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {getMessaging, getToken } from "firebase/messaging";
import { messaging } from '../firease/firebase'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
const Register = () => {
const [FcmToken,setFcmToken] = useState("")
const nav = useNavigate()
  const provider = new GoogleAuthProvider();
const appVerifier = window.recaptchaVerifier;
  const auth = getAuth(app);
const register = async() =>{
  const response = await signInWithPopup(auth,provider)
  const userdata = response.user.providerData[0]
  localStorage.setItem('Userdata', JSON.stringify(userdata));
  
}
 const [number, setNumber] = useState()
const [inputValues, setInputValues] = useState({
  firebase_id: " ", first :"",last:"",email: '', password: '',phone:"",number:""
});
const [otp,sendotp] = useState()
console.log(FcmToken,"FcmToken")
console.log(otp)
const [changebutton, setchangebutton] = useState(true)
const Textregister = async() =>{
  await createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password)
   
}



const requestPermission = async () => {
  const persmission = await Notification.requestPermission();
  if (persmission === "granted") {
    //  ganrate token----
  console.log("p3")
const messaging = getMessaging(app)
getToken(messaging,{vapidKey:"BAtJRquSO2Y38BXcbUiwlJe6-7TcxM4Y9pSjFcFtP6F8mP1fSgQYB_AObp2qBPMctZybADZPgceJHDn2T13GCHA"}).then((currentToken)=>{
 
  if (currentToken) {
    setFcmToken(currentToken)
 
  }else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err)=>{
  console.log('An error occurred while retrieving token. ', err);
})
  
  } else if (persmission === "denied") {
    console.log("denied")
  }
}
useEffect(() => {
  requestPermission()
}, [])
const userDataEntry = async () =>{
  console.log("data")
  console.log(FcmToken)
   const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/register",{   
     firebase_id:`${inputValues.firebase_id}`,
     fcm_token:`${FcmToken}`,
     firstname:`${inputValues.first}`,
     lastname:`${inputValues.last}`,
     email:`${inputValues.email}`,
     phonenumber:`${number}`,
     gender:"male"
 })
 nav("/")
 window.location.reload();
 }  
const  phoneNumberCheker = async () =>{
  
  const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/checkphonenumber",{phonenumber:`${number}`})
 console.log(data)
  alert("check Alert")
  if (data.status == "400") {
    alert("400")
    alert("requestPermission")
    requestPermission()
    userDataEntry()
    
    console.log("add in table")
  } 
  else if (data.status == "200") {
    alert("200")

    alert("Phone number is already Register")
  }
}

  
 const onCaptchVerify=()=>{
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
   
  },

}, auth)}   
const onSubmitOTP = () =>{
  onCaptchVerify()
  alert("phoneNumberCheker")
 
  
  const phoneNumber = number;
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth,phoneNumber,appVerifier)
  .then((confirmationResult) => {
    window.confirmationResult = confirmationResult;
   alert("opt sended")
  setchangebutton(false)
  }).catch((error) => {
  });
}
const verfiycode = () =>{
  window.confirmationResult.confirm(otp).then((result) => {
    // User signed in successfully.
    phoneNumberCheker()
    const user = result.user;
    console.log(user,"user")
    console.log(user.uid)
    inputValues.firebase_id = user.uid
    alert("ss")
 
  }).catch((error) => {
    
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
          {changebutton ? <button onClick={onSubmitOTP}>sendotp</button>:
          <div><button onClick={verfiycode} >Verify</button> <input type="text" onChange={(e)=>sendotp(e.target.value)} /> </div>
          }
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
