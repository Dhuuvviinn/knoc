import { ACTIVITY_FAILS, ACTIVITY_REQUEST, ACTIVITY_SUCCESS } from "../Constants/CategoryContants"

export const activityReducer = (state={activity:[]},action)=>{
    
     switch (action.type) {
        case ACTIVITY_REQUEST:
            return{
                loading:true
            }
        case ACTIVITY_SUCCESS:
            return{
                loading:false,
                activity:action.payload.data
            }
        case ACTIVITY_FAILS:
            return{
                loading:false,
                error:action.payload
            }
     
        default:
            return state
     } 
}