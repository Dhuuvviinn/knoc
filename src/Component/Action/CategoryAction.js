import {CATEGORYDATA_REQUEST,CATEGORYDATA_FAILS,CATEGORYDATA_SUCCESS, SUB_CATEGORYDATA_REQUEST, SUB_CATEGORYDATA_SUCCESS, SUB_CATEGORYDATA_FAILS, SERVICES_FAILS, SERVICES_REQUEST, SERVICES_SUCCESS} from "../Constants/CategoryContants"
import axios from "axios"
import { type } from "@testing-library/user-event/dist/type"

export const Category = () => async(dispatch) =>{
    try {
        dispatch({type:CATEGORYDATA_REQUEST})
        const {data} = await axios.get("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/category")
        console.log(data)
        dispatch({type:CATEGORYDATA_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:CATEGORYDATA_FAILS,payload:"data not Found"})
    }
}
export const SubCategory = (subID) => async(dispatch) =>{
    console.log(subID)
    try {
        dispatch({type:SUB_CATEGORYDATA_REQUEST})
        const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/subcategory",{cat_id: `${subID}`})
console.log(data)
        dispatch({type:SUB_CATEGORYDATA_SUCCESS,payload:data})

    } catch (error){ 
        dispatch({type:SUB_CATEGORYDATA_FAILS,payload:"data not Found"})
    }
}

export const Services = (subID,catID) => async(dispatch)=>{
    console.log(catID,"catID")
    console.log(subID,"subID")

    try {
        dispatch({type:SERVICES_REQUEST})
        const {data} = await axios.post("https://knocknoc-webpanel.ondemandservicesappinflutter.online/api/subcategory2",{subcat_id: `${subID}`,cat_id:`${catID}`})
        console.log(data)
         dispatch({type:SERVICES_SUCCESS,payload:data})
    } catch (error) {
        
    }
}