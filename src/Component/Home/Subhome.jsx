
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import image from "../../Image/teddy2.png"
import "./Subhome.css"
import image2 from "../../Image/Group.png"
// import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image3 from "../../Image/Group 2.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination ,Navigation} from "swiper";

import SliderSubManu from './SliderSubManu';
import { useSelector } from 'react-redux';

const Subhome = () => {
  const {category} = useSelector(state => state.categorydata)
  

  return (
    <div className="MainSubhome">


      <div className='TopSubHome'>
         <div className='details'>
            <img src={image2} alt=""/>
           <div className='subdetails'>
              <h1>Hi Cat,</h1>
              <h3>How can we help you today?</h3>
               <button type=""><AiOutlinePlus/>New Booking</button>
           </div>
         </div>
         <div className='teddyIm'>
            <img src={image} alt=""/>
         </div>
      </div>

       

      <div className="BottomHome">

      {/* Bottom Top */}
      <div className='BottomTop'>
                 <h3>Our Services</h3>
                 <img src={image3} alt=""/>
            </div>
       {/* Bottom Top */}


  {/*-------------------------*/}
     <div className="sliderMain"> 
     <Swiper
        slidesPerView={8}
        spaceBetween={30}
    
        navigation={true}
        modules={[Navigation,Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          }, 
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1042: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          1700: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
     className="mySwiper"
   >
 {
  category && category.map((item ,index)=>(
    <SwiperSlide><SliderSubManu sliderdata = {item} index={index}/></SwiperSlide>
  ))
 }     

   
   </Swiper>
     </div>
{/*-------------------------*/}

     </div>



    </div>
  )
}

export default Subhome