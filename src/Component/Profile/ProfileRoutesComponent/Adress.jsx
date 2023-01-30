import { Alert, Box, Button, FormControlLabel, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Address.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FaPen } from "react-icons/fa"
import EditAddress from './EditAddress';
import { useDispatch, useSelector } from 'react-redux';
import { Address } from '../../Action/AddressAction';


const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Adress = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [datas,setdata] = useState("")
    const addressData = useSelector(state=>state.address.address)
    const updatedata = useSelector(state =>state.edit.edit)
    console.log(updatedata)
    const dispatch = useDispatch()
   useEffect(() => {
    dispatch(Address("gdfgghhfghfghg"))
   }, [])
  
//    ----------------AddButton-----------
   const func1 = (data) =>{
      
     setdata(data)
     
   }

//    ----------------AddButton-----------
   const func2 = (data) =>{
    setdata("")
    
  }
  
    return (
        <div className='AddressMAin'>
            <h1>Your Addresses</h1>
        {
            addressData && addressData.map((e)=>(
                <div className='Address1'>
                <div>
                    <h4>{e.house_no}</h4>
                    <p style={{wordBreak:" break-all"}}>{e.house_no}  &nbsp; {e.area_city} &nbsp;
                    {e.post_code} &nbsp;
                    {e.state} &nbsp;
                    {e.street}</p>
                    <FormControlLabel value="Set as default" control={<Radio />} label="Set as default" />
                </div>

                <div className='edit' >
                    <FaPen />
                    <p onClick={function(){ func1(e); handleOpen();}}>Edit</p>
                   
                </div>

            </div>
            ))
        }
            
            <Button style={{background:"#00C0C9",color:"white",padding:"1rem",marginTop:"2rem"}} onClick={function(){ func2(); handleOpen();}}>Add New Address</Button>
 <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                     <EditAddress datas ={datas} handleClose={handleClose}/>
                    </Box>
                  </Modal>

        </div>
    )
}

export default Adress
