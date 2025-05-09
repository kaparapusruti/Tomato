import React, { useContext } from 'react'
import './PlaceHolder.css'
import { StoreContext } from '../../context/createContext'

const PlaceHolder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
    
    <form className='placeholder'>
     
        <div className="place-holder-left">
          <div>
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text"  placeholder='First Name'/>
            <input type="text" placeholder='Last Name' />
          </div>
            <input type="email"  placeholder='Email address'/>
            <input type="text" placeholder='street' />
        </div>
        <div className="multi-fields">
            <input type="text"  placeholder='city'/>
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text"  placeholder='ZipCode'/>
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone'/>
          </div>

        <div className="place-holder-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          </div>
        <button className='cart-total-button'>PROCEED TO PAYMENT</button> 
      </div>
          </div>
       
      
    </form>
  )
}

export default PlaceHolder
