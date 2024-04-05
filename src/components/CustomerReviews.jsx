import React, { useState } from "react";
import { FaStar, FaArrowDown } from "react-icons/fa";
import Image from "../Images/man-reading-newspaper.jpg";

const CustomerReviews = () => {
  const [showAll, setShowAll] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 0,
      name: "rady elkasas",
      data: "Jan 4th, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: 4,
    },
    {
      id: 1,
      name: "Maria Margaretha",
      data: "May 16th, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: 3,
    },
    {
      id: 2,
      name: "Michelle Zudid",
      data: "Jul 31th, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: 2,
    },
    {
      id: 3,
      name: "Samantha",
      data: "Aug 1st, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: 5,
    },
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="text-[#FF7A00]" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="py-5 ps-3 lg:ps-0">
      <h1 className="text-[22px] text-black font-bold">Customer Reviews</h1>
      {/* The main Box */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0 my-[40px] py-[20px] px-3 bg-white rounded-[10px]">
        <div className="flex my-[40px] py-[20px] items-center justify-around px-3 gap-3 relative bg-white rounded-[10px]">
          <div className="flex flex-col items-center lg:w-2/5 w-1/2">
            <p className="text-[#4D4D4D] text-[40px] font-bold">
              4.7
              <span className="font-medium text-[16px]">out of 5</span>
            </p>
            <div className="flex items-center space-x-1 text-[#FF7A00]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="w-2/5 lg:block hidden">
            <p className="text-[14px] text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>
          <div className="lg:w-2/5 w-1/2">
            <div className="flex items-center justify-between text-black">
              {renderStars(5)}
              <span className="w-full h-[6px] bg-[#DDDDDD] rounded-lg mx-2 relative">
                <span className="absolute left-0 top-0 w-[86%] h-full bg-[#FF7A00] rounded-lg"></span>
              </span>
              <span>86%</span>
            </div>
            <div className="flex items-center justify-between text-black">
              {renderStars(4)}
              <span className="w-full h-[6px] bg-[#DDDDDD] rounded-lg mx-2 relative">
                <span className="absolute left-0 top-0 w-[61%] h-full bg-[#FF7A00] rounded-lg"></span>
              </span>
              <span>61%</span>
            </div>
            <div className="flex items-center justify-between text-black">
              {renderStars(3)}
              <span className="w-full h-[6px] bg-[#DDDDDD] rounded-lg mx-2 relative">
                <span className="absolute left-0 top-0 w-[12%] h-full bg-[#FF7A00] rounded-lg"></span>
              </span>
              <span>12%</span>
            </div>
            <div className="flex items-center justify-between text-black">
              {renderStars(2)}
              <span className="w-full h-[6px] bg-[#DDDDDD] rounded-lg mx-2 relative">
                <span className="absolute left-0 top-0 w-[5%] h-full bg-[#FF7A00] rounded-lg"></span>
              </span>
              <span>5%</span>
            </div>
            <div className="flex items-center justify-between text-black">
              {renderStars(1)}
              <span className="w-full h-[6px] bg-[#DDDDDD] rounded-lg mx-2 relative">
                <span className="absolute left-0 top-0 w-[8%] h-full bg-[#FF7A00] rounded-lg"></span>
              </span>
              <span>8%</span>
            </div>
          </div>
          {/* Button View reviews */}
          <div className=" absolute bottom-[-20px]">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-bgbtn text-white px-4 py-3 rounded-[45px] flex items-center gap-[20px] text-[16px] font-medium shadow-[0_4px_9px_-4px_#71887B]"
            >
              <FaArrowDown />
              View reviews
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Boxs */}
      {showAll ? (
        <div className="h-full overflow-hidden duration-300 transition-all">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex my-[40px] py-[20px] items-center justify-around px-3 gap-3 relative bg-transparent rounded-[10px]"
            >
              <div className="flex flex-col items-start w-2/5">
                <p className="text-[#FF7020] text-[26px] font-bold">
                  {review.star}.0
                </p>
                <div className="flex items-center space-x-1">
                  {renderStars(review.star)}
                </div>
              </div>
              <div className="w-3/5 flex flex-col items-start">
                <div className="flex items-center gap-[10px]">
                  <img
                    className="w-[30px] h-[30px] rounded-[50%] object-contain"
                    src={Image}
                    alt={review.name}
                  />
                  <div>
                    <h1 className="text-[16px] text-black font-bold">
                      {review.name}
                    </h1>
                    <p className="text-[12px] text-bgbtn font-medium">
                      {review.data}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-center w-full my-4 opacity-[50%]">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-0 overflow-hidden opacity-0 duration-300 transition-all">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex my-[40px] py-[20px] items-center justify-around px-3 gap-3 relative bg-transparent rounded-[10px]"
            >
              <div className="flex flex-col items-start w-2/5">
                <p className="text-[#FF7020] text-[26px] font-bold">
                  {review.star}.0
                </p>
                <div className="flex items-center space-x-1">
                  {renderStars(review.star)}
                </div>
              </div>
              <div className="w-3/5 flex flex-col items-start">
                <div className="flex items-center gap-[10px]">
                  <img
                    className="w-[30px] h-[30px] rounded-[50%] object-contain"
                    src={Image}
                    alt={review.name}
                  />
                  <div>
                    <h1 className="text-[16px] text-black font-bold">
                      {review.name}
                    </h1>
                    <p className="text-[12px] text-bgbtn font-medium">
                      {review.data}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-center w-full my-4 opacity-[50%]">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
