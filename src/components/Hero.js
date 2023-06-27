import React from "react";
import heroImage from "../img/Group 77.png";

export default function Hero() {
  return (
    <div className="flex justify-center p-5 flex-col">
      <img src={heroImage} width="80%" />
      <h1>Online Experiences</h1>
      <p className="w-[60%]">
        Join unique interactive activities led by one-of-a-kind hosts without
        leaving home.
      </p>
    </div>
  );
}
