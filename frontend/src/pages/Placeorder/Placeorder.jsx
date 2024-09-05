import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const Placeorder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text"  placeholder='First name'/>
          <input type="text"  placeholder='Last name'/>
        </div>
        <input type="text"  placeholder='Email address'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text"  placeholder='City'/>
          <input type="text"  placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text"  placeholder='Zip code'/>
          <input type="text"  placeholder='Country'/>
        </div>
        <input type="text" placeholder='Mobile number' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Delivery Fee</b>
              <b>₹ {getTotalCartAmount()===0?0:2}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
        </div>
      </div>
      </div>
    </form>
  )
}

export default Placeorder