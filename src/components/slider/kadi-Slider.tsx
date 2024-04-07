import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
const images = [
  "../../../img/doge1.png",
  "../../../img/doge2.png",
  "../../../img/doge3.png",
];
const Slider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const images = slider.querySelectorAll(".slide-wrapper");

    const nextSlide = () => {
      const nextIndex = (index + 1) % images.length;
      images[index].style.opacity = 0;
      images[index].style.left = "16px";
      images[index].style.transform = "scale(1.1)";
      images[index].style.filter = "blur(10px)";
      setIndex(nextIndex);
      images[nextIndex].style.opacity = 1;
      images[nextIndex].style.left = "0px";
      images[nextIndex].style.transform = "scale(1)";
      images[nextIndex].style.filter = "blur(0px)";
    };

    const interval = setInterval(nextSlide, 4200);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="kadi-slider-wrapper">
      <div id="kadi-slider" className="kadi-slider" ref={sliderRef}>
        <div className="slide-wrapper">
          <img src={images[0]} alt="" />
        </div>
        <div className="slide-wrapper">
          <img src={images[1]} alt="" />
        </div>
        <div className="slide-wrapper">
          <img src={images[2]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;

/* .kadi-slider-wrapper {
  height: 70vh;
  position: relative;
  .kadi-slider {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;

    .slide-wrapper {
      display: flex;
      justify-content: center;

      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 16px;
      opacity: 0;
      transform: scale(1.1);
      filter: blur(0px);
      transition: left 0.25s ease-out, opacity 0.3s ease-in,
        transform 0.42s ease-in-out, filter 0.3s ease-in;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;

        opacity: 0.35;
        z-index: 20;
      }

      &:first-child {
        opacity: 1;
        left: 0px;
        transform: scale(1);
        filter: blur(0px);
      }
    }
  }
}
*/
