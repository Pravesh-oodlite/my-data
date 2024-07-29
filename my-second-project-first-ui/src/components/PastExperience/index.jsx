import React from "react";
import { StylesItemCardWrapper } from "../../styles/CardStyles";
import CarouselSlider from "../Carousel";
import CardDetails from "../CardDetails";
import { StylePastExperienceWrapper } from "../../styles/PastExperienceStyles";

const data = [
  {
    images: [
      "/images/cardImg13.jpeg",
      "/images/cardImg2.webp",
      "/images/cardImg3.webp",
      "/images/cardImg4.webp",
      "/images/cardImg5.webp",
    ],
    cardData: {
      propertyName: "Spend the night in the Ferrari Museum",
      hostedBy: "Hosted by Marc Gené",
      price: "Sold out",
    },
  },
  {
    images: [
      "/images/cardImg11.webp",
      "/images/cardImg2.webp",
      "/images/cardImg3.webp",
      "/images/cardImg4.webp",
      "/images/cardImg5.webp",
    ],
    cardData: {
      propertyName: "Ted Lasso's Favourite Pub",
      hostedBy: "Hosted by Mae",
      price: "Sold out",
    },
  },
  {
    images: [
      "/images/cardImg12.webp",
      "/images/cardImg1.webp",
      "/images/cardImg10.webp",
      "/images/cardImg9.webp",
      "/images/cardImg2.webp",
    ],
    cardData: {
      propertyName: "Shrek’s Swamp",
      hostedBy: "Hosted by Donkey",
      price: "Sold out",
    },
  },
  {
    images: [
      "/images/cardImg15.webp",
      "/images/cardImg7.jpeg",
      "/images/cardImg9.webp",
      "/images/cardImg10.webp",
      "/images/cardImg6.webp",
    ],
    cardData: {
      propertyName: "The Last Blockbuster",
      hostedBy: "Hosted by SandiHosted by Sandi",
      price: "Sold out",
    },
  },
  {
    images: [
      "/images/cardImg14.webp",
      "/images/cardImg10.webp",
      "/images/cardImg4.webp",
      "/images/cardImg6.webp",
      "/images/cardImg7.jpeg",
    ],
    cardData: {
      propertyName: "Barbie’s Malibu DreamHouse, Ken’s Way",
      hostedBy: "Hosted by Kens",
      price: "Sold out",
    },
  },
  {
    images: [
      "/images/cardImg16.jpeg",
      "/images/cardImg8.jpeg",
      "/images/cardImg7.jpeg",
      "/images/cardImg10.webp",
      "/images/cardImg6.webp",
    ],
    cardData: {
      propertyName: "Home Alone Holiday",
      hostedBy: "Hosted by Buzz",
      price: "Sold out",
    },
  },
];

const PastExperience = () => {
  return (
    <>
      <StylePastExperienceWrapper>
        <h1>Past experiences</h1>

        <StylesItemCardWrapper>
          {data?.map((item, index) => (
            <div key={index} className="card-container">
              <CarouselSlider images={item?.images} infinite={false} />
              <CardDetails {...item?.cardData} />
            </div>
          ))}
        </StylesItemCardWrapper>
      </StylePastExperienceWrapper>
    </>
  );
};

export default PastExperience;
