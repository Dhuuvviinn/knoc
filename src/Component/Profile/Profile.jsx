import React, { useState } from 'react'
import image from "../../Image/Profile.png"
import "./Profile.css"
import { BiPencil } from "react-icons/bi"
import { BiLogIn } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import {BsFillMenuButtonWideFill} from "react-icons/bs"
import { Link, Outlet } from 'react-router-dom'
import Address from "./ProfileRoutesComponent/Adress"
const Profile = () => {
  const [toggle, settoggle] = useState(false)
  const [componentRender, setcomponentRender] = useState("Addresses")
  const [Starter, setStarter] = useState("address")
  return (
<>
    <div className="profileMain">
    
     <div className='togglebutton'>{
     toggle ? <BsFillMenuButtonWideFill size={30} onClick={()=>settoggle(false)}/>
     : <BsFillMenuButtonWideFill size={30} onClick={()=>settoggle(true)}/>}
     </div>
    
      {
       <div className={toggle ? "ProfileLeft activeee":"ProfileLeft"} >
        <div className='ProfileSection'>
          <div className='ImageSection'>
            <img src={image} alt="" />
            <div className='Username'>
              <p >
                Elsa Connor
              </p>
              <BiPencil />

            </div>
            <div className='ProfileRating'>
              (
              <AiFillStar color="#00C0C9" />
              <p >4.5</p>
              )
            </div>
          </div>

          <div className='logout'>
            <BiLogIn />
            <p>Logout</p>
          </div>
        </div>

        <div className='Account'>
          <h2>My Account</h2>
          <div className='AccountList'>
            <ul>
              <li><Link to="/profile" className={Starter == "address" && "profileNavActivate"} onClick={()=>{setStarter("address")}}>Addresses</Link></li>
              <li><Link to="/profile/payment" className={Starter == "payment" && "profileNavActivate"} onClick={()=>{setStarter("payment")}}>Linked Payment Methods</Link></li>
              <li><Link to="/profile/package"  className={Starter == "package" && "profileNavActivate"} onClick={()=>{setStarter("package")}}>My Package</Link></li>
              <li><Link to="/profile/favourites"  className={Starter == "fav" && "profileNavActivate"} onClick={()=>{setStarter("fav")}}>My Favourites</Link></li>
              <li><Link to="/profile/ratings" className={Starter == "rating" && "profileNavActivate"} onClick={()=>{setStarter("rating")}} >My Ratings</Link></li>
              <li><Link to="/profile/vouchers" className={Starter == "voucher" && "profileNavActivate"} onClick={()=>{setStarter("voucher")}}>Vouchers</Link></li>
              <li><Link to="/profile/referrals" className={Starter == "referral" && "profileNavActivate"} onClick={()=>{setStarter("referral")}}>Referrals</Link></li>
              <li><Link to="/profile/catprovider" className={Starter == "catprovider" && "profileNavActivate"} onClick={()=>{setStarter("catprovider")}}>Become a cat provider</Link></li>

            </ul>
          </div>
        </div>

        <div className='Account'>
          <h2>Support</h2>
          <div className='AccountList'>
            <ul>
              <li>Get Help</li>
              <li>Feedback</li>
              <li>About KNOC KNOC</li>
              <li>Terms & Conditions / Privacy</li>


            </ul>
          </div>
        </div>


      </div>
      }
      






      <div className='ProfileRight'>
       <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Profile
