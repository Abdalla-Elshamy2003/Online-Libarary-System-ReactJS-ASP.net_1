import React from "react";
import BuyerInfo from "./BuyerInfo";
import PaymentInfo from "./PaymentInfo";

const PaymentData = () => {
  return (
    <div className="bg-[#E5EDE8]">
      <div className="container mx-auto py-[120px] flex items-center flex-col">
        <div className="w-full">
          <ol className="flex items-center w-[80%] mx-auto">
            <li className="flex w-full items-center text-white dark:white after:content-[''] after:w-full after:h-1 after:border-b after:border-bgbtn after:border-4 after:inline-block dark:after:border-blue-800">
              <span className="flex items-center justify-center w-10 h-10 bg-bgbtn rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#E1E1E1] after:border-4 after:inline-block dark:after:border-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-[#E1E1E1] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"></span>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#E1E1E1] after:border-4 after:inline-block dark:after:border-gray-700">
              <span className="flex items-center justify-center w-10 h-10  bg-white border-[8px] border-solid border-[#E1E1E1] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"></span>
            </li>
            <li className="flex items-center border-[1px] border-solid">
              <span className="flex items-center justify-center w-10 h-10 bg-white border-[8px] border-solid border-[#E1E1E1] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"></span>
            </li>
          </ol>
        </div>
        <div className="flex items-center justify-between gap-[30px]">
          <BuyerInfo />
          <PaymentInfo />
        </div>
      </div>
    </div>
  );
};

export default PaymentData;
