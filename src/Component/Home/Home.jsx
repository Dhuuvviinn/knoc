import React, { useEffect } from 'react'
import "./Home.css"
import { AiOutlineSearch } from 'react-icons/ai';
import Subhome from './Subhome';

const Home = () => {

  
  return (
    <div className='MainDev'>
    <div className='Searchdiv'>
      <input type="" name="" value="" placeholder='Search for services....|'/>
     <div className="Option">
     <select name="cars" id="cars">
       <option value="saab">All Category </option>
       <option value="opel">Opel</option>
       <option value="audi">Audi</option>
     </select>
     <div className="searchIcon">
     <AiOutlineSearch color=' #00C0C9' size={30} width="4rem"/>
     </div>
     </div>
    </div>
      <div className='SubHome'>
      <Subhome/>
      </div>
    </div>
  )
}

export default Home
