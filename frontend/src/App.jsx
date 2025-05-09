import React, { useState } from 'react';
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceHolder from "./pages/placeorder/PlaceHolder";
import Footer from './components/footer/Footer'; // Adjust the path if needed
import LoginPopUp from './components/loginpopup/LoginPopUp';







function App() {
  const[showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
 <div className="App">
      <Navbar setShowLogin ={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceHolder/>} />
      </Routes>
    </div>
    <Footer/>

    </>
   
  );
}

export default App;
