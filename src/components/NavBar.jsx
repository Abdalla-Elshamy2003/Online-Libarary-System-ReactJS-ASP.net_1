import React, { useContext, useState } from "react";
import LogoFooter from "../Images/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import UserIcon from "../Images/user-icon.png";
import { Link, NavLink } from "react-router-dom";
import { BooksContext } from "../contextApi/ContextApi";

const NavBar = () => {
  const { booksCart } = useContext(BooksContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="container mx-auto py-6">
          <div className="flex items-center gap-6 w-full">
            <Link to="/" className="items-center gap-[20px] hidden lg:flex">
              {/* Logo image */}
              <img src={LogoFooter} alt="Logo" />
              {/* Logo Title */}
              <div>
                <h1 className="text-logo font-bold text-[30px]">Bookoe</h1>
                <p className="text-logo font-light text-[13px]">
                  Book Store Website
                </p>
              </div>
            </Link>
            {/* Navigation Links */}
            <div className="relative">
              <button
                className="flex items-center gap-1 font-semibold justify-center text-[18px] py-[8px] px-[18px] rounded-lg text-white bg-bgbtnHome"
                onClick={toggleMenu}
              >
                Menu
                <IoMdArrowDropdown className="mt-1" />
              </button>
            </div>
            {/* Search */}
            <div className="relative">
              <input
                className="w-full lg:w-[350px] text-[14px] lg:text-[18px] ps-2 drop-shadow-2xl font-medium h-[40px] focus:outline-none"
                type="serach"
                placeholder="Find books here.."
              />
              <div className="absolute right-2 top-2 hidden lg:block">
                <CiSearch className="text-[22px] text-gray-400 font-bold" />
              </div>
            </div>
            {/*  Cart Icon with Count */}
            <Link to="/checkout" className="relative">
              <FaShoppingBasket className="text-gray-400 text-[18px]" />
              <span className="w-3 h-3 bg-main text-white text-[7px] rounded-full absolute -bottom-1 -right-1 flex justify-center items-center">
                {booksCart.length}
              </span>
            </Link>
            {/*  User Profile Icon */}
            <Link
              to="/profile"
              className="flex items-center gap-2 border-main lg:border-[1px] border-solid rounded-lg lg:py-[8px] lg:px-[16px]"
            >
              <img src={UserIcon} alt="UserIcon" />
              <span className="text-[18px] font-semibold text-main hidden lg:block">
                Roberto Karlos
              </span>
              <IoMdArrowDropdown className="text-main font-semibold hidden lg:block" />
            </Link>
          </div>
        </div>
        <div className="shadow-md transition-all duration-500 ease-in-out">
          {isOpen && (
            <>
              <div className="shadow-md transition-all duration-500 ease-in-out">
                <IoMdArrowDropdown className="mx-auto m-0 text-[#506E5C] text-[30px] transform rotate-180 absolute left-0 top-[78px] lg:left-[350px] lg:top-[100px]" />
                <div className="active-navbar flex flex-col gap-[40px] ps-4 lg:flex-row m-0 py-3 justify-center w-full bg-[#506E5C] border text-white border-gray-300 p-2 mt-1 rounded ">
                  <NavLink
                    to="/"
                    className="text-[18px] font-semibold opacity-[60%]"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/booksStroe"
                    className="text-[18px] font-semibold opacity-[60%]"
                  >
                    Books
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="text-[18px] font-semibold opacity-[60%]"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/addBooks"
                    className="text-[18px] font-semibold opacity-[60%]"
                  >
                    Add Book
                  </NavLink>
                  <NavLink
                    to="/contactUs"
                    className="text-[18px] font-semibold opacity-[60%]"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
