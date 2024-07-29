import React from "react";
import { Carousel } from "antd";

const CarouselSlider = ({ images }) => {
  return (
    <>
      <Carousel arrows infinite={true}>
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselSlider;
