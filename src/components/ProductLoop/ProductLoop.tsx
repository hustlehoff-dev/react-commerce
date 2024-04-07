import React from "react";
import "./ProductLoop.css";
import Card from "../card/Card";

const List = () => {
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
    <div className="product-loop">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}{" "}
    </div>
  );
};

export default List;
