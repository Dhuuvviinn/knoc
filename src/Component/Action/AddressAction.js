import axios from "axios"
import { ADDRESS_SEND_FAILS, ADDRESS_SEND_REQUEST, ADDRESS_SEND_SUCCESS, EDIT_FAILS, EDIT_REQUEST, EDIT_SUCCESS } from "../Constants/CategoryContants"

export const Address = (e) => async(dispatch) =>{

    var data
        try {
            dispatch({type:ADDRESS_SEND_REQUEST})
          
            if (e != "gdfgghhfghfghg") {
              
            await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/user_address",{ users_id:"gdfgghhfghfghg",house_no:`${e.address.Hosue_No}`,street:`${e.address.street}`,post_code:`${e.address.post_code}`,area_city:`${e.address.area_city}`,state:`${e.address.state}`})
         
   
            const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/get_address",{ users_id:`${e.address.users_id}`})
            dispatch({type:ADDRESS_SEND_SUCCESS,payload:data})

          } else {
    
             const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/get_address",{ users_id:`${e}`})
             dispatch({type:ADDRESS_SEND_SUCCESS,payload:data})
            
          }
 
          
        } catch (error) {
            dispatch({type:ADDRESS_SEND_FAILS,payload:"data not Found"})
        }
    }

    // ----------------------------------EditAddres ---------------------
    export const Edit = (e,id) => async(dispatch) =>{
        console.log(e,id)
        try {
            dispatch({type:EDIT_REQUEST})
   
            const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/update_address",{id:`${id}`,users_id:"gdfgghhfghfghg",house_no:`${e.Hosue_No}`,street:`${e.street}`,post_code:`${e.post_code}`,area_city:`${e.area_city}`,state:`${e.state}`})
            dispatch({type:EDIT_SUCCESS,payload:data})
            
            
    
        } catch (error) {
            dispatch({type:EDIT_FAILS,payload:"data not Found"})
        }
    }

    export const Delete = (id) => async(dispatch) =>{
        console.log(id)
        try {
            dispatch({type:EDIT_REQUEST})
     
            const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/delete_address",{id:`${id}`})
         
        } catch (error) {
            dispatch({type:EDIT_FAILS,payload:"data not Found"})
        }
    }