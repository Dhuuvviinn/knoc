import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import image from "../Image/tadi.png"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross2} from "react-icons/rx"
import { useDispatch } from 'react-redux'
import { Category } from './Action/CategoryAction'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [navHand, setnavHand] = useState("Home")
    console.log(navHand)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(Category())
    }, [dispatch])
    return (
        
        <div className='mainNav'>
            <img className='tadi' src={image} alt=""/>
            <div className='main2Nav'>
                <ul>
                    <li onClick={()=>setnavHand("Home")}  className={navHand == "Home" ? "actives": ""} >
                    <Link to="/">Home</Link>
                        
                    </li>
                    <li onClick={()=>setnavHand("Featured")} className={navHand == "Featured" ? "actives": ""}>
                    <Link  to="/featured">Featured</Link>  
                    </li>

                    <li onClick={()=>setnavHand("Activity")}  className={navHand == "Activity" ? "actives": ""}>
                    <Link  to="/activity">   Activity</Link>
                    </li>

                    <li onClick={()=>setnavHand("Profile")}  className={navHand == "Profile" ? "actives": ""}>
                    <Link  to="/profile">  Profile</Link>
                    </li>

                    <li onClick={()=>setnavHand("New Booking")}  className={navHand == "New Booking" ? "actives": ""}>
                    <Link  to="/booking"> New Booking</Link> 
                    </li>

                </ul>
                <div><p><Link to="/register">login/register</Link></p></div>
            </div>
            <div className='topmedia'>       {
                toggle ? <GiHamburgerMenu color='white' size={40} onClick={()=>{setToggle(false)}}/> : <GiHamburgerMenu color='white' size={40} onClick={()=>{setToggle(true)}}/>
              }  
              {
                toggle &&  <div className='mediaNav'>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                        
                    </li>
                    <li>
                    <Link to="/featured">Featured</Link>  
                    </li>

                    <li>
                    <Link to="/activity">   Activity</Link>
                    </li>

                    <li>
                    <Link to="/profile">  Profile</Link>
                    </li>

                    <li>
                    <Link to="/booking"> New Booking</Link> 
                    </li>

                </ul>
            </div>
              }
            </div>
        </div>
    )
}

export default Navbar
