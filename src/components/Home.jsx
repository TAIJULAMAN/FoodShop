import React, { useEffect } from "react";
import Button from "../layouts/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white px-[20px] md:px-[100px] pt-[80px] overflow-hidden">
      {/* Left Side - Background Image */}
      <div
        className="w-full lg:w-1/2 min-h-[70vh] bg-[url('/shop.png')] bg-cover bg-center"
        data-aos="fade-right"
      ></div>

      {/* Right Side - Content */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 space-y-6"
        data-aos="fade-left"
      >
        <h1
          className="text-[#cb6ce6] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight transform 
          transition duration-500 hover:scale-105"
          data-aos="zoom-in"
        >
          One Plate at a Time
        </h1>

        <p
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Unleash your taste buds with flavors that inspire. From sizzling dishes
          to savory bites, we bring food that speaks to the soul. Perfect for
          every craving, every time.
        </p>

        <div>
          <Button title="Explore Menu" />
        </div>
      </div>
    </div>
  );
};

export default Home;
