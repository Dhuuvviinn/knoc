import {CATEGORYDATA_REQUEST,CATEGORYDATA_FAILS,CATEGORYDATA_SUCCESS, SUB_CATEGORYDATA_REQUEST, SUB_CATEGORYDATA_SUCCESS, SUB_CATEGORYDATA_FAILS, SERVICES_REQUEST, SERVICES_SUCCESS, SERVICES_FAILS} from "../Constants/CategoryContants"
export const categoryReducer = (state={category:[]},action)=>{
    // console.log(state)
     switch (action.type) {
        case CATEGORYDATA_REQUEST:
            return{
                loading:true
            }
        case CATEGORYDATA_SUCCESS:
            return{
                loading:false,
                category:action.payload.data
            }
        case CATEGORYDATA_FAILS:
            return{
                loading:false,
                error:action.payload
            }
     
        default:
            return state
     } 
}
export const subcategoryReducer = (state={subcategory:[]},action)=>{
   
     switch (action.type) {
        case SUB_CATEGORYDATA_REQUEST:
            return{
                loading:true
            }
        case SUB_CATEGORYDATA_SUCCESS:
            return{
                loading:false,
                subcategory:action.payload.data
            }
        case SUB_CATEGORYDATA_FAILS:
            return{
                loading:false,
                error:action.payload
            }
     
        default:
            return state
     } 
}
export const serviceReducer = (state={service:[]},action) =>{
    switch (action.type) {
        case SERVICES_REQUEST:
            return{
                loading:true
            }
        case SERVICES_SUCCESS:
            return{
                loading:false,
                services:action.payload.data
            }
        case SERVICES_FAILS:
            return{
                loading:false,
                error:action.payload
            }
     
        default:
            return state
     } 
}