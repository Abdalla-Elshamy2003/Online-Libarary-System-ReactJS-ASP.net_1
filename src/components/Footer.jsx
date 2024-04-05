import React from "react";
import FooterForm from "./FooterForm";
import circleElement from "../Images/circleElement.png";
import circleElementbottom from "../Images/circleElementbottom.png";
import { FaShop } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { ImBooks } from "react-icons/im";

const Footer = () => {
  return (
    <>
      {/* Count Footer */}
      <div className="bg-bgbtn p-[60px]">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col items-center justify-center gap-[120px]">
            <div className="box">
              <div className="flex items-center justify-center gap-8 text-white font-bold text-[40px]">
                <FaShop />
                <span>268</span>
              </div>
              <p className="text-[16px] text-center text-white opacity-[60%]">
                Our stores around the world
              </p>
            </div>
            <div className="box">
              <div className="flex items-center justify-center gap-8 text-white font-bold text-[40px]">
                <HiUserGroup />
                <span>25,634</span>
              </div>
              <p className="text-[16px] text-center text-white opacity-[60%]">
                Our happy customers
              </p>
            </div>
            <div className="box">
              <div className="flex items-center justify-center gap-8 text-white font-bold text-[40px]">
                <ImBooks />
                <span>68+k</span>
              </div>
              <p className="text-[16px] text-center text-white opacity-[60%]">
                Book Collections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Send Emaill Footer */}
      <div className="bg-[#506E5C] relative overflow-hidden">
        <div className="container mx-auto py-[60px] flex lg:flex-row flex-col items-center gap-[40px]">
          <div>
            <h1 className="text-[35px] font-bold text-white lg:p-0 ps-4">
              Subscribe our newsletter for newest books updates
            </h1>
          </div>
          <div className="w-full">
            <form className="flex gap-4 items-center">
              <input
                className="w-full h-[50px] ps-4 bg-transparent text-[14px] rounded-lg shadow-2xl text-white focus:outline-none"
                type="text"
                placeholder="Type your email here"
              />
              <button
                className="bg-white rounded-lg text-[16px] font-semibold text-bgbtnHome px-[28px] py-[16px] shadow-2xl"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-10 left-8">
          <img src={circleElement} alt="circleElement" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={circleElementbottom} alt="circleElementbottom" />
        </div>
      </div>

      <FooterForm />
    </>
  );
};

export default Footer;
