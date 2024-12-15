import React, { useEffect } from "react";
import Button from "../layouts/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for smooth animations
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:px-[100px] px-[20px] pt-[80px] gap-8 bg-white">
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-right" // AOS animation
      >
        <img
          src="/about.png"
          alt="About Us"
          className="w-full max-h-[350px] rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-full lg:w-1/2 space-y-6 text-gray-800"
        data-aos="fade-left" // AOS animation
      >
        <h1
          className="font-bold text-4xl md:text-5xl text-[#cb6ce6] leading-tight text-center lg:text-left"
        >
          Why Dine With Us?
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          At **Food Shop**, we believe in serving dishes that bring people
          together. Our carefully crafted recipes combine **fresh ingredients**
          and authentic flavors to offer you an **unforgettable dining
          experience**.
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          From cozy meals to grand celebrations, our chefs ensure each dish is
          made with **love and perfection**. Come and indulge in the rich
          culinary traditions that make us stand out.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
