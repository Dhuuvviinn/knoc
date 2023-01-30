import React from 'react'
import image from "../../Image/BigCategory.png"
import "./Promotion.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PromotionCard from './PromotionCard';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:200, md:400,xl:600},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Promotions = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <div className='PromotionMainDiv'>
        <img src={`https://knocknoc-webpanel.ondemandservicesappinflutter.online/${props.item.image}`} alt="" />
        <h3>{props.item.type}</h3>
        <h4>{props.item.start_date}</h4>
        <div className='Prombtn'>
        <button className='ModelPromDet' onClick={handleOpen}>View Details</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <PromotionCard handleClose={handleClose} itemdata={props.item}/>
        </Box>
      </Modal>
        </div>
    </div>
  )
}

export default Promotions