import React from 'react'
import PromotionCard from '../../Activity/PromotionCard'
import CatergoryData from '../../Home/CatergoryData'
import "./Favourites.css"
import image from "../../../Image/BigCategory.png"
import {AiFillStar} from "react-icons/ai"
const Favourites = () => {
  return (
    <div className='FavouritesMAin'>
         <h3>My Favourites</h3>
         <div className='FavouritesCardhandle'>
         <div className='FavouritesCard'>
         <button type="button" className="btn-close  close" aria-label="Close"></button>
         <img src={image} alt="" />
            <div className='FavouritesCardDetails'>
               <p>Body Massage</p>
               <div className='rat'>
                <AiFillStar size={20}/>
                <p>4.5</p>
               </div>
            </div>
            <div className='price'>
              <h2>$100</h2>
            </div>
            <div className='favbtnforflex'>
            <button className='favbtn'>Book Now</button>
            </div>
         </div>
         <div className='FavouritesCard'>
         <button type="button" className="btn-close  close" aria-label="Close"></button>
         <img src={image} alt="" />
            <div className='FavouritesCardDetails'>
               <p>Body Massage</p>
               <div className='rat'>
                <AiFillStar size={20}/>
                <p>4.5</p>
               </div>
            </div>
            <div className='price'>
              <h2>$100</h2>
            </div>
            <div className='favbtnforflex'>
            <button className='favbtn'>Book Now</button>
            </div>
         </div>
         <div className='FavouritesCard'>
         <button type="button" className="btn-close  close" aria-label="Close"></button>
         <img src={image} alt="" />
            <div className='FavouritesCardDetails'>
               <p>Body Massage</p>
               <div className='rat'>
                <AiFillStar size={20}/>
                <p>4.5</p>
               </div>
            </div>
            <div className='price'>
              <h2>$100</h2>
            </div>
            <div className='favbtnforflex'>
            <button className='favbtn'>Book Now</button>
            </div>
         </div>
         <div className='FavouritesCard'>
         <button type="button" className="btn-close  close" aria-label="Close"></button>
         <img src={image} alt="" />
            <div className='FavouritesCardDetails'>
               <p>Body Massage</p>
               <div className='rat'>
                <AiFillStar size={20}/>
                <p>4.5</p>
               </div>
            </div>
            <div className='price'>
              <h2>$100</h2>
            </div>
            <div className='favbtnforflex'>
            <button className='favbtn'>Book Now</button>
            </div>
         </div>
         </div>
    </div>
  )
}

export default Favourites
