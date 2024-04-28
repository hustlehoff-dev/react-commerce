import React from "react";
import "./Featured.css";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const Featured = ({ type }) => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error :/</p>;
  console.log(data.data);
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
        {data.data.map((product) => (
          <Card item={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
