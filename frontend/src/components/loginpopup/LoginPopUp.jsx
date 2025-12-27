import React, {  useContext, useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/createContext'
import axios from "axios"

const LoginPopUp = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

    const [currentState,setCurrentState] = useState("Login")
    const[data,setData] = useState({
      name:"",
      email:"",
      password:""
    })
      const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

      }
        const onLogin = async (event) =>{
            event.preventDefault();
            let newUrl = url;
            if (currentState==="Login") {
              newUrl+= "/api/user/login"
            }
            else{
              newUrl+="/api/user/register"
            }
            const response = await axios.post(newUrl,data);
            if(response.data.success){
              setToken(response.data.token);
              localStorage.setItem("token",response.data.token);
              setShowLogin(false);
            }
            else{
              alert(response.data.message)
            }
        }

        
      

  return (
    <div className='login-pop-up'>
      <form  onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value= {data.name} type="text" placeholder ="your name" required/>}
            
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder ="your email" required/>
            <input  name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder ="password" required/>
        </div>
        <button type='submit'>{currentState==="sign up"?"Create account":'Login'}</button>
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
