import React, { useEffect } from 'react'
import { Link, Params, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./CategoryDetails.css"
import image from "../../Image/tadi.png"
import image2 from "../../Image/BigCategory.png"
import Option from './Option'
import CatImage from "../../Image/category1.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Calender from './Calender'
import { RatingStar } from "rating-star";
import {AiOutlineRight} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { Services } from '../Action/CategoryAction'
const CategoryDetail = () => {
const cat = useSelector(state=>state.services.services)

    const {id,subid} = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()
    const backActive = () =>{
   nav(`/pamping/${id}`)
    }
     useEffect(() => {
     dispatch(Services("",id))
     }, [])
    const details = cat && cat.filter((item)=>{
        if (item.id == subid) {
           return item
        }
    })
    console.log(details)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        

      {
        details && details.map((item)=> {
            return (
                <div>
                <div className='CategoryDetailsMain'> 
                <div className="CategoryDetail1">
                   <div className='backButton'>
                       <AiOutlineArrowLeft size={30} color="white" cursor="pointer" onClick={backActive}/>
                         <h2>Back</h2>
                     </div>
                     <div className="detailsnavimage">
                           <img src={image} alt=""/>
                     </div>
                </div>
                <div className="CategoryDetail2">
                   <div className='CategoryDetail2SubmenuLeft'>
                   <img src={`https://knocknoc-webpanel.ondemandservicesappinflutter.online/${item.image}`} alt=""/>
                    </div>
                    <div className='CategoryDetail2SubmenuRight'>
                   <Option/>
                   <div className="bookBtn">
                   <button className="btn" onClick={handleOpen}>Book Now</button>
                         <div>
              
               <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description"
               >
                 <Box sx={style}>
                 <Calender handleClose={handleClose}/>
                 </Box>
               </Modal>
             </div>    
                   </div>
                    </div>
                </div>
                
             </div>
             <div className="CategoryDetail3">
             <div className='CategoryDetail3Top'>
                 <div className='price'> 
                    <h2>{item.ser_name
                    }</h2>
                     <h1>$ {item.price}</h1>
                     </div>
                 <div className='rating'>
                 
                 <li><RatingStar id="123" rating={3.5} /> Ratings & Reviews  <AiOutlineRight/></li>
                
                 </div>
             </div>
         
             <div className='description'>
                <h4>Description</h4> 
                <p>{item.description
                }</p>
             </div>
            </div>
                </div>
            )
        })
      }
      </div>
  )
}

export default CategoryDetail
