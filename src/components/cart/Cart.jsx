import React from 'react'
import './Cart.css'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  return (
    <div className='cart'>
        <h3>Your lovely cart</h3>
        <div className="cartItem">
            <div className="cartItemImage">
                <img src="../../../img/woman_1.webp" alt="Cart product image" />
            </div>
            <div className="cartItemContent">
                <span>Big Booty Leggins</span>
                <span className='cartItemAmount'>1 x $199</span>
            </div>
            <div className="cartItemRemove">
            <DeleteOutlineIcon/>
            </div>
        </div>
        <div className="cartItem">
            <div className="cartItemImage">
                <img src="../../../img/woman_1.webp" alt="Cart product image" />
            </div>
            <div className="cartItemContent">
                <span>Big Booty Leggins</span>
                <span className='cartItemAmount'>1 x $199</span>
            </div>
            <div className="cartItemRemove">
            <DeleteOutlineIcon/>
            </div>
        </div>
        
        <span>Subtotal <span>$199</span></span>
        <button>Checkout</button>
    </div>
  )
}

export default Cart