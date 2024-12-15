import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div
      className="w-full p-5 shadow-lg rounded-lg bg-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
      data-aos="zoom-in"
    >
      {/* Dish Image */}
      <img
        className="rounded-xl w-full h-52 object-cover"
        src={props.img}
        alt={props.title}
      />

      {/* Content */}
      <div className="space-y-4 pt-5 text-center">
        {/* Title */}
        <h3 className="font-semibold text-2xl text-gray-800">{props.title}</h3>

        {/* Star Ratings */}
        <div className="flex justify-center text-yellow-500">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>

        {/* Price and Button */}
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-bold text-lg text-gray-700">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
