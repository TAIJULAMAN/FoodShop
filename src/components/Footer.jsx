import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top Footer Section */}
      <div className="flex flex-col md:flex-row justify-between pt-[80px] md:px-[100px] px-[20px] gap-8">
        {/* Section 1 - About */}
        <div className="w-full md:w-1/4">
          <img
            src="/food.png"
            alt="Classroom Logo"
            className="w-20 h-20 object-contain"
          />
          <p className="text-sm leading-relaxed">
            Welcome to our classroom! Explore our courses and classes to
            discover the perfect learning opportunity for your future success.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h1 className="font-medium text-xl text-[#cb6ce6] pb-4">
            Quick Links
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
             Dishes
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>

        {/* Section 3 - Services */}
        <div>
          <h1 className="font-medium text-xl text-[#cb6ce6] pb-4">
            Our Services
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
             Menues
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
            Dishes
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="/"
            >
             Premium Menu
            </a>
          </nav>
        </div>

        {/* Section 4 - Contact */}
        <div>
          <h1 className="font-medium text-xl text-[#cb6ce6] pb-4">
            Contact Us
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="mailto:Classroom@email.com"
            >
              foodshop@email.com
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
              href="tel:01892595424"
            >
              01886606001
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="pt-[20px]">
        <p className="text-center py-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()}
          <span className="text-[#cb6ce6] font-semibold"> Craftysoft Ui</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;