import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducer, serviceReducer, subcategoryReducer } from "./Component/Reducer/Category";
import { activityReducer } from "./Component/Reducer/ActivityReducer";
import { addressReducer, editReducer } from "./Component/Reducer/AdressReducer";
const reducer = combineReducers({
   categorydata : categoryReducer,
   subcategory : subcategoryReducer,
   services:serviceReducer,
   activity:activityReducer,
   address:addressReducer,
   edit:editReducer
})
let initialState = {
  // categorydata :{
    
  // }
    // cart: {
    //   cartItems: localStorage.getItem("cartItems")
    //     ? JSON.parse(localStorage.getItem("cartItems"))
    //     : [],
    //   shippingInfo: localStorage.getItem("shippingInfo")
    //     ? JSON.parse(localStorage.getItem("shippingInfo"))
    //     : {},
    // },
  };

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;