import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("Login")
  return (
    <div className='login-pop-up'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="Login"?<></>:<input type="text" placeholder ="your name" required/>}
            
            <input type="email" placeholder ="your email" required/>
            <input type="password" placeholder ="password" required/>
        </div>
        <button>{currentState==="sign up"?"Create account":'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By containing,i agree to the terms pf use & privacy policy</p>
        </div>
        {currentState==="Login"?<p>Create a new Account? <span onClick={()=>setCurrentState("sign up")}>Click Here</span></p>:
        <p>Already have an account <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
          
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
