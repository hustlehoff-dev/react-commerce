import React from "react";
import "./Featured.css";
import Card from "../card/Card";

const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "../../../img/woman_1.webp",
      img2: "../../../img/woman_1_1.webp",
      title: "Product Mockup",
      isNew: true,
      oldPrice: 249,
      price: 199,
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
      price: 199,
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
  return (
    <div className="featured">
      <div className="top">
        <h3>{type} products</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
