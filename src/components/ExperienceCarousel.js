import React from "react";
import ExperienceCard from "./ExperienceCard";
import bike from "../img/mountain-bike-1.png";
import swimmer from "../img/image-12.png";
import photographer from "../img/wedding-photography-1.png";
import { v4 as uuidv4 } from "uuid";

const experiences = [
  {
    id: uuidv4(),
    soldOut: true,
    rating: 5.0,
    numberReviews: 6,
    country: "USA",
    description: "Life lessons with Katie Zofares",
    price: 136,
    cardBackground: swimmer,
  },
  {
    id: uuidv4(),
    soldOut: true,
    rating: 5.0,
    numberReviews: 30,
    country: "USA",
    description: "Learn wedding photography",
    price: 125,
    cardBackground: photographer,
  },
  {
    id: uuidv4(),
    soldOut: false,
    rating: 4.8,
    numberReviews: 2,
    country: "USA",
    description: "Group Mountain Bike tour",
    price: 60,
    cardBackground: bike,
  },
];

export default function Carousel() {
  return (
    <div className="flex gap-5 mx-5">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>
  );
}
