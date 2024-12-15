import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-[#cb6ce6] text-[#cb6ce6] hover:bg-[#cb6ce6] hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
