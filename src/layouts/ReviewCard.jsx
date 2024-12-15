import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full bg-white border-2 border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div>
        <p className="text-gray-600 text-center">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias?"
        </p>
      </div>

      {/* Customer Image and Name */}
      <div className="flex flex-row justify-center items-center mt-6 gap-4">
        <img
          className="rounded-full w-16 h-16 border-4 border-[#cb6ce6]"
          src={props.img}
          alt="customer"
        />
        <h3 className="font-semibold text-lg">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
