import React from "react";
import "./Home.scss";
import Slider from "../../components/slider/Slider";
import Featured from "../../components/featured/Featured";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="Featured" />
      <Categories />
      <Featured type="Best selling" />
    </div>
  );
};

export default Home;
