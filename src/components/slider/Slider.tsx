import React, { useState } from "react";
import "./Slider.css";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Slider = () => {
  const [Slide, setSlide] = useState(0);

  const img = [
    "../../../img/doge1.png",
    "../../../img/doge2.png",
    "../../../img/doge3.png",
  ];

  const lastSlide = () => {
    setSlide(Slide === 0 ? 2 : (last) => last - 1);
  };
  const nextSlide = () => {
    setSlide(Slide === 2 ? 0 : (last) => last + 1);
  };
  return (
    <div className="kadi-slider">
      <div
        className="wrapper"
        style={{ transform: `translateX(-${Slide * 100}vw)` }}
      >
        <img src={img[0]} alt="Slider image" />
        <img src={img[1]} alt="Slider image" />
        <img src={img[2]} alt="Slider image" />
      </div>
      <div className="buttons">
        <div className="icon" onClick={lastSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
