import React from 'react'
import {RxCross2} from "react-icons/rx"
import "./PromotionCard.css"
import image from "../../Image/BigCategory.png"
const PromotionCard = ({handleClose,itemdata}) => {
  
  return (
    <div>
      <div className='PromotionMainCard'>
           <div className='PromotionCard1'>
                <p>{itemdata.type}</p>
                <RxCross2 size={30} color="#00C0C9" onClick={handleClose} cursor="pointer"  />
           </div>
            <div className='PromotionCard2'>
                <img src={`https://knocknoc-webpanel.ondemandservicesappinflutter.online/${itemdata.image}`} alt=""/>
            </div>

            <div className='PromotionCard3'>
                <div className='PromotionCard3Top'>
                    <p>{itemdata.type}</p>
                    <p>{itemdata.end_date}</p>
                </div>

                <div className='PromotionCard3Bottom'>
                    <p>Description</p>
                     <p>{itemdata.description
                     }</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default PromotionCard
