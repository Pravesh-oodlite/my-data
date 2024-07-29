import React from "react";
import { StylesItemCardWrapper } from "../../styles/CardStyles";
import CarouselSlider from "../Carousel";
import CardDetails from "../CardDetails";
import { StyleLatestWrapper } from "../../styles/LatestStyles";

// const images = [
//   "/images/cardImg1.webp",
//   "/images/cardImg2.webp",
//   "/images/cardImg3.webp",
//   "/images/cardImg4.webp",
//   "/images/cardImg2.webp",
// ];

// const imagesCollections = [
//   [
//     "/images/cardImg1.webp",
//     "/images/cardImg2.webp",
//     "/images/cardImg3.webp",
//     "/images/cardImg4.webp",
//     "/images/cardImg5.webp",
//   ],
//   [
//     "/images/cardImg6.webp",
//     "/images/cardImg1.webp",
//     "/images/cardImg10.webp",
//     "/images/cardImg9.webp",
//     "/images/cardImg2.webp",
//   ],
//   [
//     "/images/cardImg8.jpeg",
//     "/images/cardImg7.jpeg",
//     "/images/cardImg9.webp",
//     "/images/cardImg10.webp",
//     "/images/cardImg6.webp",
//   ],
//   [
//     "/images/cardImg1.webp",
//     "/images/cardImg10.webp",
//     "/images/cardImg4.webp",
//     "/images/cardImg6.webp",
//     "/images/cardImg7.jpeg",
//   ],
//   [
//     "/images/cardImg9.webp",
//     "/images/cardImg8.jpeg",
//     "/images/cardImg7.jpeg",
//     "/images/cardImg10.webp",
//     "/images/cardImg6.webp",
//   ],
// ];

const data = [
  {
    images: [
      "/images/cardImg1.webp",
      "/images/cardImg2.webp",
      "/images/cardImg3.webp",
      "/images/cardImg4.webp",
      "/images/cardImg5.webp",
    ],
    cardData: {
      propertyName: "Train at the X-Mansion",
      hostedBy: "Hosted by Jubilee",
      price: "₹3,182",
    },
  },
  {
    images: [
      "/images/cardImg6.webp",
      "/images/cardImg1.webp",
      "/images/cardImg10.webp",
      "/images/cardImg9.webp",
      "/images/cardImg2.webp",
    ],
    cardData: {
      propertyName: "Design your Incredibles Supersuit",
      hostedBy: "Hosted by Edna Mode",
      price: "₹4,560",
    },
  },
  {
    images: [
      "/images/cardImg8.jpeg",
      "/images/cardImg7.jpeg",
      "/images/cardImg9.webp",
      "/images/cardImg10.webp",
      "/images/cardImg6.webp",
    ],
    cardData: {
      propertyName: "Shrek’s Swamp",
      hostedBy: "Hosted by Donkey",
      price: "₹3,699",
    },
  },
  {
    images: [
      "/images/cardImg1.webp",
      "/images/cardImg10.webp",
      "/images/cardImg4.webp",
      "/images/cardImg6.webp",
      "/images/cardImg7.jpeg",
    ],
    cardData: {
      propertyName: "Barbie’s Malibu DreamHouse, Ken’s Way",
      hostedBy: "Hosted by Kens",
      price: "₹5,999",
    },
  },
  {
    images: [
      "/images/cardImg9.webp",
      "/images/cardImg8.jpeg",
      "/images/cardImg7.jpeg",
      "/images/cardImg10.webp",
      "/images/cardImg6.webp",
    ],
    cardData: {
      propertyName: "Home Alone Holiday",
      hostedBy: "Hosted by Buzz",
      price: "₹2,899",
    },
  },
];

const ItemCard = () => {
  return (
    <>
      {/* <StyleLatestWrapper> */}
      <StylesItemCardWrapper>
        {data?.map((item, index) => (
          <div key={index} className="card-container">
            <CarouselSlider
              images={item?.images}
              draggable={true}
              infinite={false}
            />
            <CardDetails {...item?.cardData} />
          </div>
        ))}
      </StylesItemCardWrapper>
      {/* </StyleLatestWrapper> */}
    </>
  );
};

export default ItemCard;
