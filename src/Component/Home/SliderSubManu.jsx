import React, { useEffect } from 'react'
import "./SliderSubMenu.css"
import image from "../../Image/sliderIm.png"
import {Link} from "react-router-dom"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { subcategoryReducer } from '../Reducer/Category';
import { SubCategory } from '../Action/CategoryAction';
const SliderSubManu = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    servieID()
  }, [])
  const servieID = (e) =>{
    dispatch(SubCategory(e))
  }
  return (
    <div className='SliderMain'>
      <div className="slidercontent">
        <img src={`https://knocknoc-webpanel.ondemandservicesappinflutter.online/${props.sliderdata.image}`} alt=""/>
        <h3>{props.sliderdata.cat_name}</h3>
        <Link to={`pamping/${props.sliderdata.id}`} onClick={()=>{servieID(props.sliderdata.id)}}>Explore more<AiOutlineArrowRight/></Link>
      </div>
    </div>
  )
}

export default SliderSubManu
