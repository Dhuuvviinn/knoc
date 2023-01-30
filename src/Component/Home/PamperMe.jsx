import React, { useEffect, useState } from 'react'
import Image from "../../Image/Group.png"
import Image2 from "../../Image/pampertaddy.png"
import Image3 from "../../Image/Group 2.png"
import "./Pamper.css"
import { Swiper, SwiperSlide } from "swiper/react";
import CatImage from "../../Image/category1.png"
import "swiper/css";
import CatergoryData from './CatergoryData'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Services, SubCategory } from '../Action/CategoryAction'

const PamperMe = () => {
    const subdata = useSelector(state=>state.subcategory.subcategory)
    const {id} = useParams()
 const sevices= useSelector(state => state.services.services
    )
 console.log(sevices)

    const [Activated, setActivated] = useState("")
    const dispatch = useDispatch()
console.log(Activated)

    const data = (e,item) =>{
       setActivated(e)
       dispatch(Services(item,id))
    }
    useEffect(() => {
       dispatch(Services("",id))
        dispatch(SubCategory(id))
    }, [])
    return (
        <div className="PamperMain">
            <div className='PamperTopSubMenu'>
                <div className='Details'>
                    <img src={Image} alt="" />
                    <div className='CategoryName'>
                     <h1> <h1>Pamper Me</h1></h1>
                    </div>
                </div>

                <div className='taddy'>
                    <img src={Image2} alt=""/>
                </div>
            </div>
            <div className='PamperBottomSubMenu'>
                 <div className='Categ'>
                    <h2>Category</h2>
                    <img src={Image3} alt=""/>
                 </div>

                 <div className='BottomSubMenu'>
                    <div className='border'>         
                       <Swiper slidesPerView={5} 
                       spaceBetween={30}
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
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                        1042: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                        1700: {
                          slidesPerView: 5,
                          spaceBetween: 50,
                        },
                      }}
                       className="mySwiper">
            <SwiperSlide className={Activated == "" ? "active":"unactive"}><p className='bor' onClick={()=>{
                dispatch(Services("",id))
                setActivated("")}
            } >All</p></SwiperSlide>

          {
            subdata && subdata.map((item)=>(
                <SwiperSlide className={Activated === item.subcat_name ? "active":"unactive"}>
                <div className='bor'>
                <p  onClick={()=>data(item.subcat_name,item.id)}>{item.subcat_name}</p>
                </div>
                </SwiperSlide>
            ))
          }
      </Swiper>
                    </div>
                    <div className='CategoryData'> 
                      <div className='subCategory'>
                      {
                        sevices && sevices.map((item)=>(
                            <CatergoryData item = {item}  />))
                      }
                      </div>
                 
                    </div>
                 </div>
            </div>
       
        
            </div>
    )
}

export default PamperMe
