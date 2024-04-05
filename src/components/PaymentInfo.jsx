import React, { useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { PiPaypalLogo } from "react-icons/pi";

const PaymentInfo = () => {
  const [selectedBox, setSelectedBox] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("March");

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Year = (() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 10; i++) {
      years.push(currentYear + i);
    }
    return years;
  })();

  const paymenBox = [
    {
      id: 0,
      icon: <BiTransfer />,
      title: "Bank Transfer",
    },
    {
      id: 1,
      icon: <BsCreditCard2Front />,
      title: "Credit Card",
    },
    {
      id: 2,
      icon: <PiPaypalLogo />,
      title: "Paypal",
    },
  ];

  const handleBoxSelect = (id) => {
    setSelectedBox(id === selectedBox ? null : id);
  };

  return (
    <>
      <div className="my-[40px] w-full">
        <h1 className="text-black text-[40px] font-bold text-start mb-[45px]">
          Payment
        </h1>
        <div className="flex items-center justify-between gap-6">
          {paymenBox.map((box) => (
            <div
              key={box.id}
              htmlFor={box.title}
              className={`w-full h-[174px] flex flex-col gap-4 items-center justify-center bg-white rounded-lg relative cursor-pointer`}
              onClick={() => handleBoxSelect(box.id)}
            >
              <p
                className={`text-${
                  selectedBox === box.id ? "bgbtn" : "gray-800"
                } text-[60px]`}
              >
                {box.icon}
              </p>
              <h1 className="text-black text-[18px] font-semibold">
                {box.title}
              </h1>
              <input
                type="checkbox"
                id={box.title}
                className="absolute right-0 top-[20px] accent-bgbtn"
                checked={selectedBox === box.id}
                readOnly
              />
            </div>
          ))}
        </div>
        <p className="border-b-[2px] border-dashed border-[#AAAAAA] w-full h-3 my-[60px]"></p>
        <form>
          {/* NAME Card */}
          <div className="flex flex-col items-start mt-5">
            <label htmlFor="name" className="text-[14px] font-medium mb-2">
              NAME ON CARD
            </label>
            <input
              type="text"
              id="name"
              placeholder="Rady Elkasas"
              className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none w-full"
            />
          </div>
          {/* Card number && cvv */}
          <div className="flex items-center justify-between gap-6 mt-6">
            <div className="flex flex-col items-start  w-2/3">
              <label
                htmlFor="cardnumber"
                className="text-[14px] font-medium mb-2"
              >
                Card number
              </label>
              <input
                type="text"
                id="cardnumber"
                placeholder="0000 - 0000 - 0000 - 0000"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] w-full ps-2  focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-start w-1/3 ">
              <label htmlFor="cvv" className="text-[14px] font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
          </div>
          {/* Expiry Month & Year */}
          <div className="flex items-center justify-between gap-6 mt-6 w-full">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="month" className="text-[14px] font-medium mb-2">
                EXPIRY MONTH
              </label>
              <select
                id="month"
                className="border-[#E1E1E1] border-solid border-[1px] w-full rounded-lg h-[40px] ps-2 focus:outline-none"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {Month.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start  w-full">
              <label htmlFor="year" className="text-[14px] font-medium mb-2">
                EXPIRY YEAR
              </label>
              <select
                id="year"
                className="border-[#E1E1E1] border-solid border-[1px]  w-full rounded-lg h-[40px] ps-2 focus:outline-none"
              >
                {Year.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-bgbtn py-4 text-white font-bold px-4 rounded-lg w-full"
            >
              PLACE ORDER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentInfo;
