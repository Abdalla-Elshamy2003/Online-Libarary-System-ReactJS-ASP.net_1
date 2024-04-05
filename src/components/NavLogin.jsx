import React from "react";
import Logo from "../Images/logo-nav.png";
import { Link } from "react-router-dom";

const NavLogin = () => {
  return (
    <>
      <nav className="bg-main">
        <div className="container mx-auto py-[40px]">
          <div className="flex justify-between items-center">
            {/* Left side to Nav bar */}
            <div className="left-side hidden lg:flex items-center gap-[20px]">
              {/* Logo image */}
              <img src={Logo} alt="Logo" />
              {/* Logo Title */}
              <div>
                <h1 className="text-logo font-bold text-[30px]">Bookoe</h1>
                <p className="text-logo font-light text-[13px]">
                  Book Store Website
                </p>
              </div>
            </div>
            {/* Right side to Nav bar */}
            <div className="right-side flex flex-row justify-around w-full lg:max-w-max items-start gap-3 lg:gap-[40px]">
              <Link
                to="/login"
                className="bg-bgbtn font-bold text-white px-[30px] py-[10px] rounded-full"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-bgbtn font-bold text-white px-[30px] py-[10px] rounded-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavLogin;
