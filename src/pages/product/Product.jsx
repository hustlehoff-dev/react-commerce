import React from "react";
import { useState } from "react";
import './Product.css'

import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";


const Product = () => {

  const [productImage, setProductImage] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1)
  const orderQuantityDecrement = () => {
    if (productQuantity === 1) {

      return;
    } else {
      setProductQuantity(productQuantity - 1);
    }
  }
  const orderQuantityIncrement = () => {
    setProductQuantity(productQuantity + 1);
  }
  const images = [
    '../../../img/woman_2.webp','../../../img/woman_2_1.webp'
  ];

  return (
    <div className="product-page">
      <div className="sidebar">
        <div className="productThumbs">
          <img src={images[0]} alt="Product Image" onClick={() => setProductImage(0)}/>
          <img src={images[1]} alt="Product Image" onClick={()=> setProductImage(1)}/>
        </div>
        <div className="productImage">
          <img src={images[productImage]} alt="" />
        </div>
      </div>
      <div className="productMain">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div className="orderQuantity">
          <button onClick={()=>orderQuantityDecrement()}>-</button>
          <span>{productQuantity}</span>
          <button onClick={()=>orderQuantityIncrement()}>+</button>
        </div>
        <button className="addToCart">
          <AddShoppingCart/> Add to cart
        </button>
        <div className="wishCompare">
          <div className="link"><FavoriteBorder/>Add to wishlist</div>
          <div className="link"><Balance />Add to compare</div>
        </div>
        <div className="productInfo">
          <span>Brand: Hustle</span>
          <span>Product: Leggins</span>
          <span>Tags: Leggins, Big Ass, Booty modeling</span>
        </div>
        <div className="productDetails">
          <span>Description</span>
          <span>Usual questions</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
