import React from "react";
import bike from "../img/mountain-bike-1.png";
import swimmer from "../img/image-12.png";
import SoldOut from "./SoldOut";
import star from "../img/Star 1.png";

export default function ExperienceCard(props) {
  console.log(props);
  return (
    <div>
      <div
        className="rounded-md p-2 w-[22vw] h-64 bg-black"
        style={{
          backgroundImage: `url(${props.cardBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {props.soldOut ? <SoldOut /> : ""}
      </div>
      <div className="text-sm">
        <div className="flex flex-row gap-2 text-sm mt-2  items-center">
          <img
            src={star}
            style={{ maxWidth: "18px", maxHeight: "18px" }}
            width="100%"
            height="100%"
          />
          <span className="">{props.rating}</span>
          <span className="font-light text-gray-400">
            ({props.numberReviews}) • {props.country}
          </span>
        </div>
        <p>{props.description}</p>
        <span className="font-bold">From £{props.price}</span>
        <span> / person</span>
      </div>
    </div>
  );
}
