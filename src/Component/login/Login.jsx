import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import image from "../../Image/googleLogo.png"
const Login = () => {
  return (
    <div className='LoginMain'>
    <div className='Loginsbmain'>
        
    <h1>Login</h1>
      <div className='login1'>
          <div className='Email'>
          <p>Phone Number</p>
          <input type="text" name="" placeholder='Phone Number...' value=""/> 
          </div>
          <button >login</button>
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
