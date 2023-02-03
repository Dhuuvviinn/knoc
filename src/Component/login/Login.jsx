import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import image from "../../Image/googleLogo.png"
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firease/firebase'
import {getMessaging, getToken } from "firebase/messaging";
const Login = () => {
  const [FcmToken,setFcmToken] = useState("")
  // const nav = useNavigate()
 


   const [number, setNumber] = useState()
  const [inputValues, setInputValues] = useState({
    firebase_id: " ", first :"",last:"",email: '', password: '',phone:"",number:""
  });
  const [otp,sendotp] = useState()
  console.log(FcmToken,"FcmToken")
  console.log(otp)
  const [changebutton, setchangebutton] = useState(true)
 
  
  
  
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
  //    const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/register",{   
  //      firebase_id:`${inputValues.firebase_id}`,
  //      fcm_token:`${FcmToken}`,
  //      firstname:`${inputValues.first}`,
  //      lastname:`${inputValues.last}`,
  //      email:`${inputValues.email}`,
  //      phonenumber:`${number}`,
  //      gender:"male"
  //  })
   window.location.reload();
   }  
    const  phoneNumberCheker = async () =>{
      
      const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/checkphonenumber",{phonenumber:`${number}`})
      alert("check Alert")
      if (data.status == "400") {
        alert("Phone number is not Register")
        
      } 
      else if (data.status == "200") {
        requestPermission()
        userDataEntry()
      }
    }
  
    const auth = getAuth(app);
  

    const onCaptchVerify=()=>{
      window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
        'size': 'invisible',
        'callback': (response) => {
        }
      }, auth);

  } 
    // ----//recaptcha verify----

    
    const onSubmiOTP = () =>{
      phoneNumberCheker()
      onCaptchVerify()
      alert("phoneNumberCheker")
      const phoneNumber = number;
      
    const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth,phoneNumber,appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("otp dalu")
      }).catch((error) => {
        alert(error.message)
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
    

  return (
    <div className='LoginMain'>
    <div className='Loginsbmain'>
    <h1>Login</h1>
      <div className='login1'>
          <div className='Email'>
          <div id='recaptcha-container'>
            
            </div>
          <div className='passord'>
          <p>Phone Number</p>
          <PhoneInput
          placeholder="Enter phone number"
          value={number}
      onChange={(e)=>setNumber(e)}/>
          </div>
          </div>
          {changebutton ? <button onClick={onSubmiOTP}>SendOtp</button> : <div><button onClick={verfiycode} >login</button> <input type="text" onChange={(e)=>sendotp(e.target.value)} /> </div> }
      <div className='forgetpassword'>
            <Link>Forgot Password?</Link>
      </div>
      </div>
      <div className='GoogleLogin'>
        <div className='googleimage'>
            <img src={image} alt=""/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Login
