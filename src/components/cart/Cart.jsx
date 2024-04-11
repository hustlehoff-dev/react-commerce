import React from 'react'
import './Cart.css'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "../../../img/woman_1.webp",
      img2: "../../../img/woman_1_1.webp",
      title: "Product Mockup",
      isNew: true,
      oldPrice: 249,
      price: 99,
    },
    {
      id: 2,
      img: "../../../img/woman_8.webp",
      img2: "../../../img/woman_8_1.webp",
      title: "Product Mockup",
      isNew: true,
      oldPrice: 249,
      price: 199,
    },
    {
      id: 3,
      img: "../../../img/woman_3.webp",
      img2: "../../../img/woman_3_1.webp",
      title: "Product Mockup",
      isNew: true,
      oldPrice: 249,
      price: 299,
    },
    {
      id: 4,
      img: "../../../img/woman_7.webp",
      img2: "../../../img/woman_7_1.webp",
      title: "Product Mockup",
      isNew: true,
      oldPrice: 249,
      price: 199,
    },
  ];

  const totalPrice = () => {
    let total = 0;
    data.forEach((item)=> {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className='cart'>
        <h3>Your lovely cart</h3>
        {data.map((item)=>(
          <div className="cartItem" key={item.id}>
          <div className="cartItemImage">
              <img src={item.img} alt="Cart product image" />
          </div>
          <div className="cartItemContent">
              <span>{item.title}</span>
              <span className='cartItemAmount'>{item.quantity} x ${item.price}</span>
          </div>
          <div className="cartItemRemove">
          <DeleteOutlineIcon/>
          </div>
      </div>
        ))}
        
        
        <span>Subtotal <span>${totalPrice()}</span></span>
        <button>Checkout</button>
    </div>
  )
}

export default Cart