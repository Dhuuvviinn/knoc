import axios from "axios"
import { ACTIVITY_FAILS, ACTIVITY_REQUEST, ACTIVITY_SUCCESS } from "../Constants/CategoryContants"

export const Actvity = (ActiveSmallNAv,SubNav) => async(dispatch) =>{

console.log(ActiveSmallNAv)
console.log(SubNav)

    try {
        dispatch({type:ACTIVITY_REQUEST})
  
        const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/activity",{type:`${ActiveSmallNAv}`,sub_type:`${SubNav}`})
        
        dispatch({type:ACTIVITY_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:ACTIVITY_FAILS,payload:"data not Found"})
    }
}