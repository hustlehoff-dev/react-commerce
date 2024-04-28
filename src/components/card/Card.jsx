import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          <img src={item.img} alt="Product image" className="firstImage" />
          <img src={item.img2} alt="Product image" className="secondImage" />
        </div>
        <h2 className="title">{item.attributes.title}</h2>
        <div className="price">
          <span>{item.attributes.oldPrice}$</span>
          <span>{item.attributes.price}$</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
