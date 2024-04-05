import React from "react";
import LogoFooter from "../Images/logo.png";
import FaceIcon from "../Images/faceBook.png";
import YoutubeIcon from "../Images/Youtube.png";
import TwitterIcon from "../Images/Twitter.png";
import LinkedinIcon from "../Images/Linkedin.png";
import InstagramIcon from "../Images/Instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <div className="container mx-auto py-[40px]">
          <div className="flex flex-col ps-[30px] lg:flex-row lg:gap-[60px]">
            {/* Col Follow Us */}
            <div>
              {/* Logo  Footer */}
              <div className="my-[50px] flex items-center gap-[20px]">
                {/* Logo image */}
                <img src={LogoFooter} alt="Logo" />
                {/* Logo Title */}
                <div>
                  <h1 className="text-logo font-bold text-[30px]">Bookoe</h1>
                  <p className="text-logo font-light text-[13px]">
                    Book Store Website
                  </p>
                </div>
              </div>
              {/* Details */}
              <div className="my-[50px]">
                <p className=" text-main text-[13px] w-[300px]">
                  Clevr is a online bookstore website who sells all genres of
                  books from around the world. Find your book here now
                </p>
              </div>
              {/* Social media  Icons */}
              <div>
                <h1 className="font-medium text-[18px]">Follow Us</h1>
                {/* Social media list */}
                <ul className="flex justify-start items-center mt-[25px]">
                  <li>
                    <button
                      href="#"
                      className="w-[45px] h-[45px] rounded-full drop-shadow-lg"
                    >
                      <img className="mx-auto" src={FaceIcon} alt="FaceIcon" />
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="bg-main w-[45px] h-[45px] rounded-full drop-shadow-lg"
                    >
                      <img
                        className="mx-auto"
                        src={YoutubeIcon}
                        alt="FaceIcon"
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="w-[45px] h-[45px] rounded-full drop-shadow-lg"
                    >
                      <img
                        className="mx-auto"
                        src={TwitterIcon}
                        alt="FaceIcon"
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="w-[45px] h-[45px] rounded-full drop-shadow-lg"
                    >
                      <img
                        className="mx-auto"
                        src={LinkedinIcon}
                        alt="FaceIcon"
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="w-[45px] h-[45px] rounded-full drop-shadow-lg"
                    >
                      <img
                        className="mx-auto"
                        src={InstagramIcon}
                        alt="FaceIcon"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Col Quick Links */}
            <div className="py-[50px]">
              <h1 className="text-[18px] font-medium">Quick Links</h1>
              <ul className="mt-[20px]">
                <li className="py-[10px]">
                  <Link
                    to="/about"
                    className="text-[16px] font-medium text-main"
                  >
                    About us
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/contactUs"
                    className="text-[16px] font-medium text-main"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/booksStroe"
                    className="text-[16px] font-medium text-main"
                  >
                    Books
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/login"
                    className="text-[16px] font-medium text-main"
                  >
                    Login
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/signup"
                    className="text-[16px] font-medium text-main"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col Customer Area Links */}
            <div className="py-[45px]">
              <h1 className="text-[18px] font-medium">Customer Area</h1>
              <ul className="mt-[20px]">
                <li className="py-[10px]">
                  <Link
                    to="/profile"
                    className="text-[16px] font-medium text-main"
                  >
                    My Account
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/checkout"
                    className="text-[16px] font-medium text-main"
                  >
                    Orders
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/booksStroe"
                    className="text-[16px] font-medium text-main"
                  >
                    Tracking List
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/about"
                    className="text-[16px] font-medium text-main"
                  >
                    Terms
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/borrowed"
                    className="text-[16px] font-medium text-main"
                  >
                    Borrowed
                  </Link>
                </li>
                <li className="py-[10px]">
                  <Link
                    to="/about"
                    className="text-[16px] font-medium text-main"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            {/* Col email to Subscribe */}
            <div className="py-[45px]">
              <h1 className="text-[18px] font-medium">
                Don’t miss the newest books
              </h1>
              <p className=" text-main text-[13px] w-[300px] my-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <div className="flex">
                <input
                  type="text"
                  className="text-[16px] font-normal drop-shadow-2xl rounded-lg ps-2"
                  placeholder="Your Email Address"
                />
                <button className="bg-bgbtn text-[16px] font-semibold py-[22px] px-[14px] rounded-lg ml-[10px] text-white drop-shadow-2xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
