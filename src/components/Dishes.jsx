import React from "react";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="flex flex-col items-center px-[20px] md:px-[100px] pt-[80px] bg-white">
      {/* Title */}
      <h1
        className="text-5xl font-bold text-[#cb6ce6] text-center pb-5 tracking-wide leading-tight"
        data-aos="fade-down"
      >
        Discover a World of Flavorful Dishes
      </h1>

      {/* Description */}
      <p
        className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mb-10 leading-relaxed"
        data-aos="fade-up"
      >
        From sizzling **grilled specialties** to vibrant **vegetarian
        delights**, we craft each dish with love and the finest ingredients.
        Explore our menu and indulge in **mouth-watering flavors** that will
        leave your taste buds craving for more.
      </p>

      {/* Grid Layout */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
        data-aos="fade-up"
      >
        <DishesCard
          img="/img1.jpg"
          title="Spicy Grilled Chicken"
          price="$10.99"
        />
        <DishesCard
          img="/img2.jpg"
          title="Creamy Pasta Delight"
          price="$12.99"
        />
        <DishesCard
          img="/img3.jpg"
          title="Classic Cheese Pizza"
          price="$8.99"
        />
        <DishesCard img="/img4.jpg" title="Fresh Veggie Salad" price="$7.49" />
        <DishesCard img="/img5.jpg" title="Savory Beef Steak" price="$15.99" />
        <DishesCard img="/img6.jpg" title="Tangy Shrimp Tacos" price="$11.99" />
      </div>
    </div>
  );
};

export default Dishes;
