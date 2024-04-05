import React, { useState } from "react";

const BuyerInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("Egypt");

  const countries = ["England", "United State", "Egypt"];

  return (
    <>
      <div className="my-[40px]">
        <h1 className="text-black text-[40px] font-bold">Buyer Info</h1>
        <form className="py-[60px]">
          {/* User Name */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col items-start">
              <label
                htmlFor="firstName"
                className="text-[14px] font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="rady"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="lastName"
                className="text-[14px] font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="elkasas"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
          </div>
          {/* Email Address & Phone Number */}
          <div className="flex items-center justify-between gap-6 mt-5">
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="text-[14px] font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="rady@gmail.com"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="phone" className="text-[14px] font-medium mb-2">
                Mobile Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="elkasas"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
          </div>
          {/* input Address */}
          <div className="flex flex-col items-start mt-5">
            <label htmlFor="address" className="text-[14px] font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Corner Grove St. Franklin Avenue"
              className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none w-full"
            />
          </div>
          {/* STATE & Postcode/ZIP */}
          <div className="flex items-center justify-between gap-6 mt-5">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="country" className="text-[14px] font-medium mb-2">
                STATE
              </label>
              <select
                id="country"
                className="border-[#E1E1E1] border-solid w-full border-[1px] rounded-lg h-[40px] ps-2 focus:outline-none"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="postcode"
                className="text-[14px] font-medium mb-2"
              >
                Postcode/ZIP
              </label>
              <input
                type="text"
                id="postcode"
                placeholder="1241255"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
          </div>
          {/* Input Town/City */}
          <div className="flex items-center justify-between gap-6 mt-5">
            <div className="flex flex-col items-start">
              <label htmlFor="city" className="text-[14px] font-medium mb-2">
                Town/City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Giza"
                className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[40px] ps-2  focus:outline-none"
              />
            </div>
          </div>
          {/* Input Note */}
          <div className="flex flex-col items-start mt-5">
            <label htmlFor="note" className="text-[14px] font-medium mb-2">
              Note
            </label>
            <input
              type="text"
              id="note"
              className="border-[#E1E1E1] border-solid border-[1px] rounded-lg h-[85px] ps-2  focus:outline-none w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BuyerInfo;
