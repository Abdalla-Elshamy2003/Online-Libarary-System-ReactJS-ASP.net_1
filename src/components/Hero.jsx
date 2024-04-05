import React, { useContext } from "react";
import IconBooks from "../Images/icon_books.png";
import IconCustomers from "../Images/icon_customers.png";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

// import required modules
import { Pagination } from "swiper/modules";
import { BooksContext } from "../contextApi/ContextApi";
import { Link } from "react-router-dom";

const Hero = () => {
  const { Books } = useContext(BooksContext);
  return (
    <>
      <div className="bg-main">
        <div className="container mx-auto py-[120px]">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div>
              <h1 className="text-[65px] text-white font-bold">
                Welcome to Clevr Online Book Store
              </h1>
              <p className="text-[16px] font-normal text-white my-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
              </p>
              <div className="flex items-center gap-6 my-[50px]">
                <div>
                  <div className="flex items-center gap-2">
                    <img src={IconBooks} alt="IconBooks" />
                    <h1 className="text-[30px] font-bold text-[#163C26]">
                      68+k
                    </h1>
                  </div>
                  <p className="text-[16px] font-normal text-[#163C26] opacity-[60%]">
                    Book Collections
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src={IconCustomers} alt="IconCustomers" />
                    <h1 className="text-[30px] font-bold text-[#163C26]">
                      25,634
                    </h1>
                  </div>
                  <p className="text-[16px] font-normal text-[#163C26] opacity-[60%]">
                    Customers
                  </p>
                </div>
              </div>
              <Link
                to="/booksStroe"
                className="w-[50%] flex items-center gap-[60px] text-[20px] text-white font-semibold bg-black rounded-lg px-[27px] py-[22px]"
              >
                Go to Collections
                <FaArrowRight />
              </Link>
            </div>
            <div className=" w-full h-full py-[60px]">
              <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper mx-auto"
              >
                {Books.map((book) => (
                  <SwiperSlide key={book.id} className="relative">
                    <img
                      className="w-[346px] h-[495px] rounded-md"
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                    />
                    <span className="absolute lg:left-[0px] lg:top-[12px] left-[0px] top-[12px] bg-[#FF7A00] text-white text-[18px] font-semibold pe-[50px] py-[14px] rounded-e-[35px] shadow-custom">
                      Best_Seller
                    </span>
                  </SwiperSlide>
                )).slice(1, 5)}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
