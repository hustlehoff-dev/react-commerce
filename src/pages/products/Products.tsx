import React, { useState } from "react";
import "./Products.css";
import ProductLoop from "../../components/ProductLoop/ProductLoop";
import { useParams } from "react-router-dom";
const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="sidebar">
        <div className="filter">
          <h3>By category</h3>
          <div className="filterInput">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Leggins</label>
          </div>
          <div className="filterInput">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Tops</label>
          </div>
          <div className="filterInput">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Sneakers</label>
          </div>
        </div>
        <div className="filter">
          <h3>By price</h3>
          <div className="filterInput">
            <input
              type="range"
              min={1}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}$</span>
          </div>
        </div>
        <div className="filter">
          <h3>Sort by</h3>
          <div className="filterInput">
            <input
              type="radio"
              id="low"
              value="low"
              name="price"
              onClick={(e) => setSort("low")}
            />
            <label htmlFor="low">Price (Lowest first)</label>
          </div>
          <div className="filterInput">
            <input
              type="radio"
              id="high"
              value="high"
              name="price"
              onClick={(e) => setSort("high")}
            />
            <label htmlFor="high">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="main">
        <img
          className="mainImage"
          src="../../../img/woman_leggins_1.webp"
          alt="Image of the category"
        />
        <ProductLoop />
      </div>
    </div>
  );
};

export default Products;
