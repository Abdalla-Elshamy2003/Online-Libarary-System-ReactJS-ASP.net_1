import React, { useContext, useState } from "react";
import circleElement from "../Images/circleElement.png";
import circleElementbottom from "../Images/circleElementbottom.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaShoppingBasket, FaStar, FaHeart } from "react-icons/fa";

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

const SectionFlashSale = () => {
  const { Books } = useContext(BooksContext);

  /* Slide  function for Phone Size*/
  const FlashSaleSection = {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };
  const FeaturedBookSection = {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  };
  return (
    <>
      {/* Flash Sale Section */}
      <section className="bg-[#506E5C] relative overflow-hidden">
        <div className="container mx-auto py-[60px] flex lg:flex-row flex-col items-center gap-[40px]">
          <div>
            <h1 className="text-[45px] font-bold text-white lg:p-0 ps-4">
              Flash Sale
            </h1>
            <p className="my-10 text-[16px] font-medium text-white lg:p-0 ps-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Time */}
            <div className="flex items-center justify-center gap-8 border-[1px] border-white border-solid rounded-lg w-fit px-[24px] py-[14px]">
              <div className="flex flex-col items-center justify-center">
                <span className="font-medium text-[28px] text-white">05</span>
                <span className="text-[14px] text-white font-medium">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-medium text-[28px] text-white">42</span>
                <span className="text-[14px] text-white font-medium">
                  Minutes
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-medium text-[28px] text-white">19</span>
                <span className="text-[14px] text-white font-medium">
                  Second
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:ps-0 ps-[30px]">
            <Swiper
              breakpoints={FlashSaleSection}
              freeMode={true}
              navigation={{
                prevEl: ".custom-swiper-button-bestSellers-prev",
                nextEl: ".custom-swiper-button-bestSellers-next",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper relative"
            >
              {Books &&
                Books.map((bookSale) => (
                  <SwiperSlide key={bookSale.id}>
                    <div className="flex flex-col lg:flex-row items-center gap-6 bg-bgbtn rounded-lg w-fit p-10">
                      <img
                        className="w-[170px] h-[243px] rounded-lg"
                        src={bookSale.volumeInfo.imageLinks.smallThumbnail}
                        alt="Book1"
                      />
                      <div className="flex flex-col justify-around">
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] font-medium text-white">
                            {bookSale.volumeInfo.categories}
                          </span>
                          <div className="flex">
                            <FaStar className="text-[#FF7A00]" />
                            <FaStar className="text-[#FF7A00]" />
                            <FaStar className="text-[#FF7A00]" />
                            <FaStar className="text-[#FF7A00]" />
                            <FaStar className="text-white" />
                          </div>
                          <span className="text-[14px] font-medium text-white">
                            {bookSale.saleInfo.saleability === "FOR_SALE" ? (
                              <p>
                                ({bookSale.saleInfo.offers[0].availability})
                              </p>
                            ) : (
                              <p>(0)</p>
                            )}
                          </span>
                        </div>
                        <div className="py-8">
                          <h1 className="text-[22px] font-medium">
                            {bookSale.volumeInfo.title.length > 20
                              ? bookSale.volumeInfo.title.slice(0, 20) + "..."
                              : bookSale.volumeInfo.title}
                          </h1>
                          <p className="text-[18px] font-light">
                            {bookSale.volumeInfo.publisher}
                          </p>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="w-full h-1 bg-white rounded-lg relative after:absolute after:left-0 after:top-0 after:bottom-0 after:rounded-lg after:w-[80%] after:bg-[#FF7A00]"></span>
                          <span className="text-[14px] font-medium text-white opacity-[60%]">
                            {bookSale.saleInfo.saleability === "FOR_SALE" ? (
                              <p className="inline-block">
                                {bookSale.saleInfo.offers[0].availability} books
                                left
                              </p>
                            ) : (
                              <div className="text-red-500">Out of stock</div>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )).slice(0, 4)}

              <button className="custom-swiper-button-bestSellers-prev text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute left-0 z-20 top-[45%] bottom-0 flex items-center">
                <FaArrowLeft className="mx-auto" />
              </button>
              <button className="custom-swiper-button-bestSellers-next text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute right-0 lg:right-[25%] z-20 top-[45%] bottom-0 flex items-center">
                <FaArrowRight className="mx-auto" />
              </button>
            </Swiper>
          </div>
        </div>
        <div className="absolute top-10 left-8">
          <img src={circleElement} alt="circleElement" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={circleElementbottom} alt="circleElementbottom" />
        </div>
      </section>
      {/* Featured Book Section */}
      <section>
        <div className="w-full py-8 bg-[#E5EDE8]">
          <div className="flex items-center justify-between container mx-auto w-full py-8">
            <h1 className="text-[16px] ps-2 lg:ps-0 lg:text-[25px] font-bold">
              Featured Book
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
            breakpoints={FeaturedBookSection}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".custom-swiper-button-Featured-prev",
              nextEl: ".custom-swiper-button-Featured-next",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper relative"
          >
            {Books &&
              Books.map((book) => (
                <SwiperSlide key={book.id}>
                  <div className="flex lg:flex-row flex-col items-center lg:items-start gap-6 rounded-lg min-w-full p-10">
                    <img
                      className="lg:w-[200px] w-[120px] lg:h-[250px] h-[180px] rounded-lg object-contain"
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="Book1"
                    />
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] lg:text-[12px] font-medium text-white bg-bgbtnHome px-[18px] py-[14px] rounded-lg">
                          {book.volumeInfo.categories}
                        </span>
                        <div className="flex text-[9px] lg:text-[14px]">
                          <FaStar className="text-[#FF7A00]" />
                          <FaStar className="text-[#FF7A00]" />
                          <FaStar className="text-[#FF7A00]" />
                          <FaStar className="text-[#FF7A00]" />
                          <FaStar className="text-white" />
                        </div>
                        <span className="text-[9px] lg:text-[14px] font-medium text-[#1C1C1C]">
                          {book.saleInfo.saleability === "FOR_SALE" ? (
                            <p>({book.saleInfo.offers[0].availability})</p>
                          ) : (
                            <p>(0)</p>
                          )}
                        </span>
                      </div>
                      <div className="py-8">
                        <h1 className="lg:text-[30px] text-[18px] font-semibold lg:text-start text-center">
                          {book.volumeInfo.title.length > 20
                            ? book.volumeInfo.title.slice(0, 20) + "..."
                            : book.volumeInfo.title}
                        </h1>
                        <p className="lg:text-[12px] text-[10px] font-light lg:text-start text-center">
                          {book.volumeInfo.description &&
                            book.volumeInfo.description.slice(0, 120) + "..."}
                        </p>
                      </div>
                      {book.volumeInfo.price && book.volumeInfo.price ? (
                        <div className="flex items-end gap-4">
                          <span className="lg:text-[24px] text-[18px] font-bold text-bgbtn">
                            {book.volumeInfo.price}
                            {book.volumeInfo.currency}
                          </span>
                          <del className="lg:text-[14px] text-[9px] font-medium mb-1">
                            4000{book.volumeInfo.currency}
                          </del>
                        </div>
                      ) : (
                        <div className="text-red-500">Out of stock</div>
                      )}

                      <div className="flex items-center gap-2 py-5">
                        <button className="lg:text-[14px] text-[9px] flex items-center gap-3 text-white px-[18px] py-[14px] bg-bgbtnHome rounded-lg shadow-2xl">
                          <FaShoppingBasket />
                          Add to cart
                        </button>
                        <button>
                          {book.saleInfo.saleability === "FOR_SALE" ? (
                            <FaHeart className="text-red-500 text-[20px] duration-200 transition-colors" />
                          ) : null}
                        </button>
                        <a
                          href="#"
                          className="lg:text-[16px] text-[9px] font-medium text-bgbtnHome"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )).slice(0, 7)}

            <button className="custom-swiper-button-Featured-prev text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute left-0 z-20 top-[45%] bottom-0 flex items-center">
              <FaArrowLeft className="mx-auto" />
            </button>
            <button className="custom-swiper-button-Featured-next text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute right-0 z-20 top-[45%] bottom-0 flex items-center">
              <FaArrowRight className="mx-auto" />
            </button>
            <span className="h-full w-[30px] bg-white shadow-btnSwiper absolute left-0 z-10  top-0 bottom-0"></span>
            <span className="h-full w-[30px] bg-white shadow-btnSwiper absolute right-0 z-10  top-0 bottom-0"></span>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SectionFlashSale;
