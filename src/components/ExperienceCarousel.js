import React from "react";
import ExperienceCard from "./ExperienceCard";
import bike from "../img/mountain-bike-1.png";
import swimmer from "../img/image-12.png";
import photographer from "../img/wedding-photography-1.png";

const experiences = [
  {
    soldOut: true,
    rating: 5.0,
    numberReviews: 6,
    country: "USA",
    description: "Life lessons with Katie Zofares",
    price: 136,
    cardBackground: swimmer,
  },
  {
    soldOut: true,
    rating: 5.0,
    numberReviews: 30,
    country: "USA",
    description: "Learn wedding photography",
    price: 125,
    cardBackground: photographer,
  },
  {
    soldOut: false,
    rating: 4.8,
    numberReviews: 2,
    country: "USA",
    description: "Group Mountain Bike tour",
    price: 60,
    cardBackground: bike,
  },
];

function createCarousel() {
  const carouselArray = [];
  for (let i = 0; i < experiences.length; i++) {
    carouselArray.push(
      <ExperienceCard
        key={i}
        rating={experiences[i].rating}
        numberReviews={experiences[i].numberReviews}
        country={experiences[i].country}
        description={experiences[i].description}
        price={experiences[i].price}
        soldOut={experiences[i].soldOut}
        cardBackground={experiences[i].cardBackground}
      />
    );
  }
  return carouselArray;
}

export default function Carousel() {
  return (
    <div className="flex gap-5 mx-5">
      {createCarousel()}

      {/* <ExperienceCard data={rating} /> */}
    </div>
  );
}
