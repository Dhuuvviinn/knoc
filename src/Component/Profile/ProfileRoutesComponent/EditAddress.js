import { Box, Button, Stack, TextField } from '@mui/material'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Address, Delete, Edit } from '../../Action/AddressAction'
import { useAlert } from "react-alert"
const EditAddress = ({datas,handleClose}) => {
    const [address, setaddress] = useState(
      datas ? {
      users_id:"gdfgghhfghfghg",
        Hosue_No:`${datas.house_no}`,
        street:`${datas.street}`,
        post_code:`${datas.post_code}`,
        area_city:`${datas.area_city}`,
        state:`${datas.state}`
    } : { users_id:"gdfgghhfghfghg",
    Hosue_No:"",
    street:"",
    post_code:"",
    area_city:"",
    state:""})
    const dispatch = useDispatch()
const alert = useAlert()
    const Changeaddress = (e) => {
        setaddress({...address, [e.target.name]: e.target.value})
     }
    
    const AddressData = () =>{
        dispatch(Address({address}))
        alert.success("Edit successfully")
    }
    const editAddress = (e) =>{
    dispatch(Edit(e,datas.id))
    alert.success("Edit successfully")

    dispatch(Address(e.users_id))
    }
    const deletes = (e) =>{
      dispatch(Delete(datas.id))
      alert.success("Deleted successfully")
      dispatch(Address(e.users_id))
    }
    const validate = () => {
      return (
        address.Hosue_No &&
        address.post_code &&
        address.street &&
        address.area_city &&
        address.state
      );
    };
  return (
    <Box>
       <Box>
       <TextField
       id="filled-multiline-flexible"
       label="Hosue_No."
       multiline
       maxRows={4}
       variant="filled"
       fullWidth
       name='Hosue_No'
       sx={{marginBottom:"1.5rem"}}
       onChange={Changeaddress}
       value={ address.Hosue_No}
     />
   
     <TextField
     id="filled-multiline-flexible"
     label="street"
     multiline
     maxRows={4}
     variant="filled"
     fullWidth
     name='street'
     sx={{marginBottom:"1.5rem"}}
     onChange={Changeaddress}
     value={address.street}
   />
   <TextField
   id="filled-multiline-flexible"
   label="post_code"
   multiline
   maxRows={4}
   variant="filled"
   fullWidth
   name='post_code'
   sx={{marginBottom:"1.5rem"}}
   onChange={Changeaddress}
   value={address.post_code}
   />
   
   <TextField
   id="filled-multiline-flexible"
   label="area_city"
   multiline
   maxRows={4}
   variant="filled"
   fullWidth
   name='area_city'
   sx={{marginBottom:"1.5rem"}}
   onChange={Changeaddress}
   value={address.area_city}

   />
   <TextField
   id="filled-multiline-flexible"
   label="state"
   multiline
   maxRows={4}
   variant="filled"
   fullWidth
   name='state'
   sx={{marginBottom:"1.5rem"}}
   onChange={Changeaddress}
   value={address.state}

   />
       </Box>  
       <Stack sx={{float:"right" ,flexDirection:"row"}}>
        {
       datas ?
         <Box>
             <Button variant="contained" onClick={()=>deletes(address)} sx={{background:"red",marginRight:"1rem"}}>DELETE</Button>
              <Button onClick={()=>editAddress(address)}  variant="contained">ADD ADDRESS</Button>
         </Box>
    
       : 
       <Button onClick={()=>{AddressData()
handleClose()}}  disabled={!validate()}  variant="contained">ADD ADDRESS</Button>
       
        }
       </Stack>
    </Box>
  )
}

export default EditAddress
