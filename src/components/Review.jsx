import React from "react";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-[20px] md:px-[100px] pt-[80px]">
      <h1 className="text-4xl font-semibold text-[#cb6ce6] text-center pb-10">
        What Our Customers Are Saying
      </h1>

      {/* Customer Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ReviewCard img="/avatar1.png" name="Sophia Azura" />
        <ReviewCard img="/avatar2.png" name="John Deo" />
        <ReviewCard img="/avatar3.png" name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
