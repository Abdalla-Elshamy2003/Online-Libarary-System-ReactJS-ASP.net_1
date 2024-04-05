import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

// import image news
import news1 from "../Images/3d-render-globe-abstract.jpg";
import news2 from "../Images/man-reading-newspaper.jpg";
import news3 from "../Images/global-business.jpg";
import news4 from "../Images/3d-render-globe-abstract.jpg";
import Profile from "../Images/Abdalla_elshamy.jpg";

const News = () => {
  const [news, setNews] = useState([
    {
      id: 0,
      img: news1,
      title: "Why reading is important for our children?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      date: "2 days ago",
      Profile: Profile,
      name: "Abdalla Elshamy",
    },
    {
      id: 1,
      img: news2,
      title: "Benefits of reading: Smart, Diligent, Happy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      date: "5 August 2020",
      Profile: Profile,
      name: "Jane Smith",
    },
    {
      id: 2,
      img: news3,
      title: "What books you should read in 2020?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      date: "3 August 2020",
      Profile: Profile,
      name: "Mark Johnson",
    },
    {
      id: 3,
      img: news4,
      title: "10 Things you must know to improve your reading skills",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      date: "3 August 2020",
      Profile: Profile,
      name: "Emily Davis",
    },
  ]);
  return (
    <>
      <section className="bg-[#E5EDE8]">
        <div className="container mx-auto py-[120px]">
          <h1 className="text-center text-[35px] font-bold">Letest News</h1>
          <p className="text-center text-[16px] font-medium w-[60%] m-auto opacity-[60%] my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex lg:flex-row flex-col ps-[30px] lg:ps-0 items-center gap-7 py-8">
            {news.map((nw) => (
              <div key={nw.id}>
                <img
                  className="w-[372px] h-[210px] rounded-lg"
                  src={nw.img}
                  alt={nw.title}
                />
                <h1 className="text-[18px] font-semibold my-4">{nw.title}</h1>
                <p className="text-[14px] font-medium opacity-[50%] inline">
                  {nw.desc.slice(0, 70) + "..."}
                </p>
                <a href="#" className="opacity-100 text-bgbtn">
                  Continue reading
                </a>
                <div className="flex items-center gap-5 mt-5">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={nw.Profile}
                    alt={nw.name}
                  />
                  <div>
                    <h1 className="text-[14px] font-semibold">{nw.name}</h1>
                    <span className="text-[14px] font-medium text-[#A4A4A4]">
                      {nw.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-6 text-[16px] text-white bg-bgbtnHome py-[18px] px-[26px] mx-auto rounded-lg">
            View more <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default News;
