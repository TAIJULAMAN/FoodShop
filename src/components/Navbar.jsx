import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[20px] md:px-[100px] py-5">
      <div>
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <img
              src="/food.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-semibold text-[#cb6ce6]">FOOD SHOP</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#cb6ce6] transition-all cursor-pointer"
                >
                  Dishes
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-[#cb6ce6] transition-all cursor-pointer"
                  >
                    Spicy
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-[#cb6ce6] transition-all cursor-pointer"
                  >
                    Tasty
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-[#cb6ce6] transition-all cursor-pointer"
                  >
                    Delicious
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-[#cb6ce6] transition-all cursor-pointer"
                  >
                    Crispy
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            >
              Reviews
            </Link>
          </nav>

          <div className="hidden md:flex items-center text-lg font-medium">
            <Button title="Login" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleChange}
              aria-label="Toggle menu"
              className="p-2 bg-[#cb6ce6] rounded-md text-white transition-all"
            >
              {menu ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } flex flex-col absolute text-[#cb6ce6] bg-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            onClick={handleChange}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            onClick={handleChange}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            onClick={handleChange}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            onClick={handleChange}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#cb6ce6] transition-all cursor-pointer"
            onClick={handleChange}
          >
            Reviews
          </Link>

          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
