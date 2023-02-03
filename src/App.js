// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Featured from './Component/Featured/Featured';
import Activity from './Component/Activity/Activity';
import Profile from './Component/Profile/Profile';
import Booking from './Component/booking/Booking';
import PamperMe from './Component/Home/PamperMe';
import CategoryDetail from './Component/Home/CategoryDetail';
import Address from "./Component/Profile/ProfileRoutesComponent/Adress"
import Payment from './Component/Profile/ProfileRoutesComponent/Payment';
import { Favorite } from '@mui/icons-material';
import Favourites from './Component/Profile/ProfileRoutesComponent/Favourites';
import Login from './Component/login/Login';
import Register from './Component/login/Register';
import Checking from './Component/Checking';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/featured" element={<Featured />}/>
      <Route path="/profile" element={<Profile />}>
            <Route path="/profile" element={<Address />}/>
           <Route path="/profile/payment" element={<Payment />}/>
           <Route path="/profile/package" element={<PamperMe />}/>
          <Route path="/profile/favourites" element={<Favourites/>}/>
          <Route path="/profile/ratings" element={<PamperMe />}/>
          <Route path="/profile/vouchers" element={<PamperMe />}/>
           <Route path="/profile/referrals" element={<PamperMe />}/>
            <Route path="/profile/catprovider" element={<PamperMe />}/>
      </Route>
      <Route path="/activity" element={<Activity />}/>
      <Route path="/booking" element={<Booking />}/>
      <Route path="/pamping/:id" element={<PamperMe />}/>
      <Route path="/pamping/:id/:subid" element={<CategoryDetail/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Checker" element={<Checking/>}/>
      

      
    </Routes></div>
  );
}

export default App;
