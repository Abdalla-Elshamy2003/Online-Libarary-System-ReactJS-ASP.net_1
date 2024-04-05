import React, { useContext, useState } from "react";
import { BooksContext } from "../contextApi/ContextApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

// import image Personal
import Person1 from "../Images/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg";
import Person2 from "../Images/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.jpg";
import Person3 from "../Images/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg";
import Person4 from "../Images/cheerful-curly-business-girl-wearing-glasses.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../index.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

const Personal = () => {
  const {Books} = useContext(BooksContext);

  /* Slide  show for personal profile images */
  const [personal, setPersonal] = useState([
    {
      id: 0,
      name: "Jane Smith",
      img: Person1,
    },
    {
      id: 1,
      name: "Emily Davis",
      img: Person2,
    },
    {
      id: 2,
      name: "Mark Johnson",
      img: Person3,
    },
    {
      id: 3,
      name: "Jane Ahmed",
      img: Person4,
    },
  ]);

  return (
    <>
      <section>
        <div className="container mx-auto py-[120px]">
          <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 items-center justify-between w-full">
            <div className="ps-[30px] lg:ps-0">
              <h1 className="text-[35px] font-bold">Testimonials</h1>
              <p className="my-8 text-[14px] w-full lg:w-[50%] opacity-[60%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="flex items-center justify-start ms-[17px]">
                {personal.map((person) => (
                  <div className="ms-[-17px]" key={person.name}>
                    <img
                      className="w-[40px] h-[40px] rounded-[50%] object-contain"
                      src={person.img}
                      alt={person.title}
                    />
                  </div>
                ))}
                <div className="ms-[-17px] w-[40px] h-[40px] rounded-[50%] bg-bgbtnHome flex items-center justify-center">
                  <span className="text-white text-[12px] font-bold">21k+</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[600px] text-center">
              <Swiper
                navigation={{
                  prevEl: ".custom-swiper-button-PersonalPerview-prev",
                  nextEl: ".custom-swiper-button-PersonalPerview-next",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper relative"
              >
                {personal.map((person) => (
                  <SwiperSlide key={person.id}>
                    <div className="text-center shadow-2xl p-5 rounded-lg bg-[#E5EDE8]">
                      <div className="flex items-center justify-center gap-1 text-[#FF7A00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="mt-8 text-[22px] font-medium leading-[29px]">
                        Shoping book in Clevr. is very easy. Quick delivery and
                        fast respon. They services is awesome!
                      </p>
                      <h1 className="text-[18px] font-semibold mt-8">
                        {person.name}
                      </h1>
                      <span className="text-[14px] text-[#3D3D3D]">
                        Book Lovers
                      </span>
                      <img
                        className="w-[40px] h-[40px] rounded-[50%] object-contain mx-auto mt-5 mb-[-10px]"
                        src={person.img}
                        alt={person.name}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <button className="custom-swiper-button-PersonalPerview-prev text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute left-0 z-20 top-[45%] bottom-0 flex items-center">
                  <FaArrowLeft className="mx-auto" />
                </button>
                <button className="custom-swiper-button-PersonalPerview-next text-bgbtn shadow-2xl w-[40px] h-[40px] rounded-[50%] bg-white absolute right-0 z-20 top-[45%] bottom-0 flex items-center">
                  <FaArrowRight className="mx-auto" />
                </button>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Personal;
