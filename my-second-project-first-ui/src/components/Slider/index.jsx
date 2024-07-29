import React from "react";
import { StylesSliderWrapper } from "../../styles/SliderStyles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "antd";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2250, min: 1366 },
    items: 18,
    slidesToSlide: 3,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1366, min: 1128 },
    items: 12,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1128, min: 550 },
    items: 10,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 6,
  },
};

const itemsList = [
  {
    itemName: "Icons",
    itemIcon: "/icons/img0.webp",
  },
  {
    itemName: "Beach",
    itemIcon: "/icons/img9.jpg",
  },
  {
    itemName: "Amazing Pools",
    itemIcon: "/icons/img10.jpg",
  },
  {
    itemName: "Farms",
    itemIcon: "/icons/img2.jpg",
  },
  {
    itemName: "Mentions",
    itemIcon: "/icons/img1.jpg",
  },
  {
    itemName: "OMG",
    itemIcon: "/icons/img7.jpg",
  },
  {
    itemName: "TreeHouses",
    itemIcon: "/icons/img6.jpg",
  },
  {
    itemName: "Lakefront",
    itemIcon: "/icons/img5.jpg",
  },
  {
    itemName: "Castles",
    itemIcon: "/icons/img10.jpg",
  },
  {
    itemName: "Luxe",
    itemIcon: "/icons/img9.jpg",
  },
  {
    itemName: "Beach",
    itemIcon: "/icons/img8.jpg",
  },
  {
    itemName: "Amazing Pools",
    itemIcon: "/icons/img7.jpg",
  },
  {
    itemName: "Farms",
    itemIcon: "/icons/img6.jpg",
  },
  {
    itemName: "Mentions",
    itemIcon: "/icons/img5.jpg",
  },
  {
    itemName: "OMG",
    itemIcon: "/icons/img2.jpg",
  },
  {
    itemName: "TreeHouses",
    itemIcon: "/icons/img4.jpg",
  },
  {
    itemName: "Lakefront",
    itemIcon: "/icons/img3.jpg",
  },
  {
    itemName: "Castles",
    itemIcon: "/icons/img1.jpg",
  },
  {
    itemName: "Luxe",
    itemIcon: "/icons/img10.jpg",
  },
  {
    itemName: "Beach",
    itemIcon: "/icons/img9.jpg",
  },
  {
    itemName: "Amazing Pools",
    itemIcon: "/icons/img8.jpg",
  },
  {
    itemName: "Farms",
    itemIcon: "/icons/img6.jpg",
  },
  {
    itemName: "Mentions",
    itemIcon: "/icons/img7.jpg",
  },
  {
    itemName: "OMG",
    itemIcon: "/icons/img5.jpg",
  },
  {
    itemName: "TreeHouses",
    itemIcon: "/icons/img4.jpg",
  },
  {
    itemName: "Lakefront",
    itemIcon: "/icons/img1.jpg",
  },
  {
    itemName: "Castles",
    itemIcon: "/icons/img2.jpg",
  },
  {
    itemName: "Luxe",
    itemIcon: "/icons/img3.jpg",
  },
];

const SliderSection = () => {
  return (
    <>
      <StylesSliderWrapper>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // customTransition="all .5"
          // transitionDuration={500}
        >
          {itemsList.map((item, index) => (
            <div key={index} className="item-container">
              <img src={item.itemIcon} alt={index + 1} />
              <span>{item.itemName}</span>
            </div>
          ))}
        </Carousel>
      </StylesSliderWrapper>
    </>
  );
};

export default SliderSection;
