import React from "react";
import DishesCard from "../layouts/DishesCard";

const Menu = () => {
  return (
    <div className="flex flex-col items-center bg-white px-[20px] md:px-[100px] pt-[80px]">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-[#cb6ce6] text-center pb-5">
        Discover Our Premium Menu
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 text-center px-5">
        Indulge in our curated selection of delicious dishes, crafted with
        fresh, high-quality ingredients to offer you the ultimate culinary
        experience. Whether you're in the mood for something savory or sweet,
        our menu is designed to satisfy every craving. Explore our premium
        options and treat yourself to an unforgettable meal.
      </p>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <DishesCard img="/menu1.jpg" title="Grilled Salmon" price="$16.99" />
        <DishesCard
          img="/menu2.jpg"
          title="Spaghetti Carbonara"
          price="$18.99"
        />
        <DishesCard img="/menu3.jpg" title="Beef Wellington" price="$24.99" />
        <DishesCard
          img="/menu1.jpg"
          title="Classic Cheeseburger"
          price="$14.99"
        />
        <DishesCard
          img="/menu2.jpg"
          title="Vegetarian Stir Fry"
          price="$12.99"
        />
        <DishesCard img="/menu3.jpg" title="Chicken Parmesan" price="$19.99" />
      </div>
    </div>
  );
};

export default Menu;
