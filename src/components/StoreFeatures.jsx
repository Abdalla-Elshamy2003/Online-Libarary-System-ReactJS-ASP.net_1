import React from "react";
import BestQuality from "../Images/BestQuality-icon.png";
import Quick from "../Images/Quick-icon.png";
import SecurePayment from "../Images/SecurePayment-Icon.png";
import Guarantee from "../Images/Guarantee-Icon.png";

const StoreFeatures = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
          <div className="box w-full flex flex-col items-start p-5">
            <img src={Quick} alt="BestQuality" />
            <h1 className="text-[22px] font-medium my-5">Quick Delivery</h1>
            <p className="text-[14px] opacity-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="box w-full flex flex-col items-start p-5">
            <img src={SecurePayment} alt="BestQuality" />
            <h1 className="text-[22px] font-medium my-5">Secure Payment</h1>
            <p className="text-[14px] opacity-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="box w-full flex flex-col items-start p-5">
            <img src={BestQuality} alt="BestQuality" />
            <h1 className="text-[22px] font-medium my-5">Best Quality</h1>
            <p className="text-[14px] opacity-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="box w-full flex flex-col items-start p-5">
            <img src={Guarantee} alt="BestQuality" />
            <h1 className="text-[22px] font-medium my-5">Return Guarantee</h1>
            <p className="text-[14px] opacity-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreFeatures;
