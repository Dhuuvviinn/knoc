import { ADDRESS_SEND_FAILS, ADDRESS_SEND_REQUEST, ADDRESS_SEND_SUCCESS } from "../Constants/CategoryContants"

export const addressReducer = (state={address:[]},action)=>{
    
    switch (action.type) {
       case ADDRESS_SEND_REQUEST:
           return{
               loading:true
           }
       case ADDRESS_SEND_SUCCESS:
           return{
               loading:false,
               address:action.payload.data
           }
       case ADDRESS_SEND_FAILS:
           return{
               loading:false,
               error:action.payload
           }
    
       default:
           return state
    } 
}
export const editReducer = (state={edit:[]},action)=>{
    console.log(action.payload)
    switch (action.type) {
       case ADDRESS_SEND_REQUEST:
           return{
               loading:true
           }
       case ADDRESS_SEND_SUCCESS:
           return{
               loading:false,
               edit:action.payload.message
           }
       case ADDRESS_SEND_FAILS:
           return{
               loading:false,
               error:action.payload
           }
    
       default:
           return state
    } 
}

export const deleteReducer = (state={delete:[]},action)=>{
    
    switch (action.type) {
       case ADDRESS_SEND_REQUEST:
           return{
               loading:true
           }
       case ADDRESS_SEND_SUCCESS:
           return{
               loading:false,
               delete:action.payload.data
           }
       case ADDRESS_SEND_FAILS:
           return{
               loading:false,
               error:action.payload
           }
    
       default:
           return state
    } 
}