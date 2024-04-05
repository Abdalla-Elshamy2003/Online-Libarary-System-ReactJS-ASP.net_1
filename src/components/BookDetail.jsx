import React, { useEffect } from "react";
import { useContext } from "react";
import { FaStar, FaShoppingBasket } from "react-icons/fa";
import { BooksContext } from "../contextApi/ContextApi";

const BookDetail = ({ book }) => {
  const { addBooksCart } = useContext(BooksContext);

  return (
    <>
      <div className="lg:container ps-3 lg:ps-0 mx-auto py-[120px]">
        <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
          {/* Left side */}
          <div className="lg:w-[50%] w-full">
            <div className="flex items-center gap-5 text-[16px] text-[#4D4D4D]">
              <div className="flex items-center gap-6 border-solid border-[1px] border-[#FFD782] w-fit rounded-lg px-5 py-2">
                <div className="text-[#FF7A00] flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-[#FF7A00] text-[16px]">4.5</span>
              </div>
              <p>
                {book.volumeInfo && book.volumeInfo.contentVersion
                  ? book.volumeInfo.contentVersion
                  : ""}
              </p>
            </div>
            <h1 className="lg:text-[30px] text-[16px] text-black font-bold my-6">
              {book.volumeInfo && book.volumeInfo.title}
            </h1>
            <p className="lg:text-[16px] text-[12px]">
              {book.volumeInfo && book.volumeInfo.description
                ? book.volumeInfo.description.length > 350
                  ? book.volumeInfo.description.slice(0, 350) + "..."
                  : book.volumeInfo.description
                : ""}
            </p>

            {/* Price & Button Add to Card */}
            <div className="flex lg:flex-row flex-col lg:items-end items-start gap-4">
              <p className="flex items-center text-bgbtn lg:text-[45px] text-[28px] font-bold">
                {book.volumeInfo &&
                book.volumeInfo.price &&
                book.volumeInfo.currency
                  ? book.volumeInfo.price + book.volumeInfo.currency
                  : ""}
              </p>
              <del className="text-[#636363] text-[16px]">5000EGP</del>
              <span className="text-white bg-[#FF7A00] px-4 py-2 rounded-lg text-[14px]">
                2%
              </span>
            </div>
            <button
              onClick={() => addBooksCart(book.id)}
              className="flex items-center justify-center gap-7 lg:text-[30px] text-[22px] text-white bg-bgbtn rounded-lg w-[50%] h-[60px] my-8"
            >
              <FaShoppingBasket />
              BUY
            </button>
          </div>
          {/* Right Side */}
          <div className="lg:w-[50%] w-full p-7 flex flex-col justify-center">
            <img
              src={
                book.volumeInfo &&
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              alt={book.volumeInfo && book.volumeInfo.title}
              className="rounded-md w-full h-[575px] object-contain"
            />
            <div className="flex justify-center items-center gap-4 py-5">
              <img
                src={
                  book.volumeInfo &&
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                    ? book.volumeInfo.imageLinks.thumbnail
                    : ""
                }
                alt={book.volumeInfo && book.volumeInfo.title}
                className="cursor-pointer"
              />
              <img
                src={
                  book.volumeInfo &&
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.smallThumbnail
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : ""
                }
                alt={book.volumeInfo && book.volumeInfo.title}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
