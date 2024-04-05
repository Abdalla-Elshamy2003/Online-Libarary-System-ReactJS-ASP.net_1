import React, { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../index.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import { BooksContext } from "../contextApi/ContextApi";
import { Link } from "react-router-dom";

const SectionTopBoock = () => {
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
      slidesPerView: 5,
      spaceBetween: 10,
    },
  };
  const BestSellersPerview = {
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    770: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
  };

  return (
    <>
      <div className="container mx-auto py-[60px]">
        <div>
          {/* Section Trending this week */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[16px] ps-2 lg:ps-0 lg:text-[25px] font-bold">
              10 Top Rated Books
            </h1>
            <Link
              to="/booksStroe"
              className="text-[12px] lg:text-[16px] font-medium text-bgbtn flex items-center gap-3"
            >
              View more
              <FaArrowRight className="text-[14px] mt-1 font-bold" />
            </Link>
          </div>
          {/* Section 10 Top Rated Books*/}
          <div className="w-full py-8">
            <Swiper
              breakpoints={breakpoints}
              freeMode={true}
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper relative"
            >
              {Books.map((book) => (
                <SwiperSlide key={book.id}>
                  <img
                    className="w-[170px] h-[243px] rounded-lg"
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <div className="flex gap-1 mt-3">
                    <FaStar className="text-[#FF7A00]" />
                    <FaStar className="text-[#FF7A00]" />
                    <FaStar className="text-[#FF7A00]" />
                    <FaStar className="text-[#FF7A00]" />
                    <FaStar className="text-[#FF7A00]" />
                  </div>
                  <h1 className="text-[16px] font-medium text-start my-1">
                    {book.volumeInfo.title.length > 20
                      ? book.volumeInfo.title.slice(0, 20) + "..."
                      : book.volumeInfo.title}
                  </h1>
                  <p className="text-[14px] opacity-[80%] text-start">
                    {book.volumeInfo.publisher}
                  </p>
                  <div className="cursor-pointer mt-2 text-white text-[14px] font-bold bg-bgbtnHome flex justify-around w-[50%] h-[50px]  items-center  rounded-xl">
                    {book.volumeInfo.price ? (
                      <>
                        <div className="flex flex-col">
                          <p className="inline-block">
                            {book.volumeInfo.price}
                            {book.volumeInfo.currency}
                          </p>
                          <del className="text-[12px] opacity-[50%] ">
                            5000EGP
                          </del>
                        </div>
                        <a href="#">
                          <FaShoppingBasket />
                        </a>
                      </>
                    ) : (
                      <div className="text-red-500 text-[13px]">Out</div>
                    )}
                  </div>
                </SwiperSlide>
              )).slice(12, 20)}
              <button className="custom-swiper-button-prev text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute left-0 z-20 top-[45%] bottom-0 flex items-center">
                <FaArrowLeft className="mx-auto" />
              </button>
              <button className="custom-swiper-button-next text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute right-0 z-20 top-[45%] bottom-0 flex items-center">
                <FaArrowRight className="mx-auto" />
              </button>
              <span className="h-full w-[30px] bg-white shadow-btnSwiper absolute left-0 z-10  top-0 bottom-0"></span>
              <span className="h-full w-[30px] bg-white shadow-btnSwiper absolute right-0 z-10  top-0 bottom-0"></span>
            </Swiper>
          </div>
          {/* Section Best Sellers */}
          <div className="w-full py-8">
            <div className="flex items-center justify-between w-full py-8">
              <h1 className="text-[16px] ps-2 lg:ps-0 lg:text-[25px] font-bold">
                Best Sellers
              </h1>
              <Link
                to="/booksStroe"
                className="text-[12px] lg:text-[16px] font-medium text-bgbtn flex items-center gap-3"
              >
                View more
                <FaArrowRight className="text-[14px] mt-1 font-bold" />
              </Link>
            </div>
            <Swiper
              breakpoints={BestSellersPerview}
              freeMode={true}
              navigation={{
                prevEl: ".custom-swiper-button-bestSellers-prev",
                nextEl: ".custom-swiper-button-bestSellers-next",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper relative"
            >
              {Books.map((bookbest) => (
                <SwiperSlide key={bookbest.id}>
                  <div className="flex flex-row gap-3">
                    <img
                      className="w-[170px] h-[243px] rounded-lg"
                      src={bookbest.volumeInfo.imageLinks.smallThumbnail}
                      alt={bookbest.volumeInfo.title}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <button className="text-[12px] font-medium bg-bgbtnHome text-white py-[12px] px-[18px] rounded-lg">
                          {bookbest.volumeInfo.categories}
                        </button>
                        <button className="text-[16px] flex items-center gap-2 font-medium bg-[#FFD782] text-[#FF7A00] py-[12px] px-[18px] rounded-lg">
                          <FaStar />
                          3.5
                        </button>
                      </div>
                      <div className="py-8">
                        <h1 className="text-[24px] font-medium">
                          {bookbest.volumeInfo.title.length > 20
                            ? bookbest.volumeInfo.title.slice(0, 20) + "..."
                            : bookbest.volumeInfo.title}
                        </h1>
                        <p className="text-[18px] font-light">
                          {bookbest.volumeInfo.publisher}
                        </p>
                      </div>
                      <span className="text-[30px] font-bold text-bgbtnHome">
                        {bookbest.volumeInfo.price}
                        {bookbest.volumeInfo.currency}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              )).slice(3, 8)}

              <button className="custom-swiper-button-bestSellers-prev text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute left-0 z-20 top-[45%] bottom-0 flex items-center">
                <FaArrowLeft className="mx-auto" />
              </button>
              <button className="custom-swiper-button-bestSellers-next text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute right-0 z-20 top-[45%] bottom-0 flex items-center">
                <FaArrowRight className="mx-auto" />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTopBoock;
