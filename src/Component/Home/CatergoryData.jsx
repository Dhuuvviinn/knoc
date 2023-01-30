import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../../Image/category1.png"
import "./Category.css"
const CatergoryData = (props) => {
  console.log(props.item)
  return (
    <Link to={`/pamping/${props.item.cat_id}/${props.item.id}`}>
        <div className='Cat'>
            <div className="forimage">
            <img src={`https://knocknoc-webpanel.ondemandservicesappinflutter.online/${props.item.image}`} alt=""/>
            </div>
            <p>{props.item.ser_name}</p>
            <h4>{props.item.price}</h4>
    </div>
    </Link>
  )
}

export default CatergoryData
