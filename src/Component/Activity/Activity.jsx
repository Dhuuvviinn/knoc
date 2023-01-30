import React, { useEffect, useState } from 'react'
import "./Activity.css"
import Promotions from './Promotions'
import { useDispatch, useSelector } from 'react-redux'
import { Actvity } from '../Action/ActivityAction'
import { Services } from '../Action/CategoryAction'
import Image from "../../Image/Empty.gif"
import { Box, CircularProgress } from '@mui/material'
const Activity = () => {
  const [ActiveSmallNAv, setActiveSmallNAv] = useState("Promotions")
  const [SubNav, setSubNav] = useState("past")
  const dispatch = useDispatch()
  const Activitystate = useSelector(state => state.activity.activity) 
  const loading = useSelector(state => state.activity.loading)
  console.log(loading,"loading")
  console.log(Activitystate,"Activitystate")
  useEffect(() => {
    dispatch(Actvity(ActiveSmallNAv,SubNav))
  }, [dispatch,ActiveSmallNAv,SubNav])


  return (
    <div className='ActivityMain'>
      <div className="SmallNav">
      <div className='upperSelect'>
          <li className={ActiveSmallNAv == "Promotions" ? "ActiveSmall":""} onClick={()=>{
            setActiveSmallNAv("Promotions")
            }} >Promotions</li>
          <li className={ActiveSmallNAv == "Campaigns" ? "ActiveSmall":""} onClick={()=>{setActiveSmallNAv("Campaigns") 
          }}>Campaigns</li>
          <li className={ActiveSmallNAv == "Charity" ? "ActiveSmall":""} onClick={()=>{setActiveSmallNAv("Charity")  
          }}>Charity</li>
          </div>
          <div className='subSmallNav'>
           <li className={SubNav == "past"  && "ActivesubSmallNav"} onClick={()=>{setSubNav("past") 
           } }>PAST</li>
           <li className={SubNav == "current" &&  "ActivesubSmallNav"} onClick={()=>{setSubNav("current")
           } }>CURRENT</li>
           <li className={SubNav == "upcoming" &&  "ActivesubSmallNav"} onClick={()=>{setSubNav("upcoming")
           } }>UPCOMING</li>

          </div>
      </div>
      { !loading ? [
         Activitystate ? <div className='Promotions'> {Activitystate.map((item,index)=>( <Promotions item={item} index={index}/>))}  </div> : <div style={{marginTop:"10rem"}}>
      <img src={Image} alt=""/>
      </div>] :  <Box sx={{ textAlign: "center" , mt:"10rem"}}>
    <CircularProgress/>
    </Box>}
      </div>
   
  )
}

export default Activity
