import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import Profile from "../Images/Abdalla_elshamy.jpg";
import { FaStar } from "react-icons/fa";
import { BooksContext } from "../contextApi/ContextApi";

const SectionTrending = () => {
  const { Books } = useContext(BooksContext);
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    770: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  return (
    <>
      <div className="py-[60px] bg-[#E5EDE8]">
        {/* Section Trending this week */}
        <div className="container mx-auto">
          <h1 className="text-[35px] font-bold text-center">
            Trending this week
          </h1>
          <p className="text-[16px] font-normal opacity-[60%] text-center w-[50%] mx-auto my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className=" relative py-6">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              breakpoints={breakpoints}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
            >
              {Books.map((book) => (
                <SwiperSlide key={book.id}>
                  <img
                    className="w-[260px] h-[320px] lg:w-[346px] lg:h-[495px] object-cover rounded-md"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="Book1"
                  />
                </SwiperSlide>
              )).slice(12, 19)}
            </Swiper>
            <div className="flex flex-col items-center absolute bottom-[20px] left-[45%] z-10">
              <img
                className="w-[70px] h-[70px] rounded-[50%] border-white border-[4px] border-solid"
                src={Profile}
                alt="Profile"
              />
              <h1 className="text-[18px] font-semibold text-center">
                Abdalla Elshamy
              </h1>
              <div className="flex gap-1">
                <FaStar className="text-[#FF7A00]" />
                <FaStar className="text-[#FF7A00]" />
                <FaStar className="text-[#FF7A00]" />
                <FaStar className="text-[#FF7A00]" />
                <FaStar className="text-[#FF7A00]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTrending;
