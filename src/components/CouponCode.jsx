import React from "react";
import ImageCouponCode from "../Images/MaskCouponCode.png";
import { FaArrowRight, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CouponCode = () => {
  return (
    <>
      <div className="bg-[#E5EDE8] w-full h-full">
        <div className="container mx-auto bg-bgbtnHome w-full h-[470px] rounded-lg my-[80px]">
          <div className="z-100 flex w-full h-full items-center justify-around px-5 pt-8 text-black">
            <div className="w-[50%] CouponCode h-full">
              <h1 className="text-[28px] font-semibold mb-[50px]">
                Shopping Summary
              </h1>
              <p className="text-[18px] font-normal opacity-[50%] mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className="text-[20px] opacity-[80%] font-medium mb-[20px]">
                Have a coupon code?
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 h-[50px] px-2 bg-white rounded-lg outline-none">
                  <label className="text-bgbtn text-[24px]" htmlFor="coupon">
                    <FaTicketAlt />
                  </label>
                  <input
                    id="coupon"
                    className="bg-transparent focus:outline-none placeholder:text-bgbtnHome"
                    type="text"
                    placeholder="Enter promo code here"
                  />
                </div>
                <div>
                  <button className="text-white bg-bgbtnHome rounded-lg px-7 py-5">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right w-[50%]">
              <p className="text-[22px] font-semibold mb-[20px]">22</p>
              <p className="text-[22px] font-semibold mb-[40px]">22</p>
              <p className="w-full h-[2px] bg-gray-400 rounded-lg"></p>
              <p className="text-[22px] font-semibold mb-[40px] mt-3">22</p>
              <div className="flex flex-col">
                <Link
                  to="/checkout/payment"
                  className="text-center text-white bg-bgbtn w-full rounded-lg py-4"
                >
                  CHECKOUT
                </Link>
                <button className=" text-bgbtn w-full rounded-lg py-4">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCode;
