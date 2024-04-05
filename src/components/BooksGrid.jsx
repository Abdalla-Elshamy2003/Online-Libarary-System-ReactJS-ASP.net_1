import React, { useContext, useState } from "react";
import { BooksContext } from "../contextApi/ContextApi";
import { FaStar, FaHeart, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksGrid = () => {
  const { Books, addBooksCart } = useContext(BooksContext);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {Books.map((book) => (
          <Link
            to={`/booksStroe/${book.id}`}
            key={book.id}
            className="mt-7 relative w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 shadow-[0_4px_9px_-4px_#71887B] rounded-lg group"
          >
            <img
              className="mx-auto object-contain rounded-xl"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
            <p className="flex items-center text-[14px] mt-3 font-medium gap-1">
              <FaStar className="text-[#FF7A00]" />
              {book.volumeInfo.contentVersion}
            </p>
            <p className="my-4 text-[16px] text-bgbtn font-bold">
              {book.volumeInfo.categories}
            </p>
            <h1 className="text-[18px] font-bold">
              {book.volumeInfo.title.slice(0, 20)}...
            </h1>
            <p className="my-3 opacity-[60%] font-medium text-[16px]">
              {book.volumeInfo.publisher}
            </p>
            <div>
              {book.volumeInfo.price ? (
                <>
                  <div className="flex items-end gap-2">
                    <span className="text-[16px] font-bold">
                      {book.volumeInfo.price}EGP
                    </span>
                    <del className="text-[12px] font-normal">3000EGP</del>
                  </div>
                </>
              ) : (
                <div className="text-red-500 text-[16px]">Out</div>
              )}
            </div>
            {/* Span to show on hover */}
            <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 duration-200 transition-all"></span>
            <button className="absolute right-0 top-[50%] px-[9px] py-[9px] bg-white rounded-[50%] text-[black]-600 text-[22px] opacity-0 group-hover:opacity-100 duration-200 transition-all group-hover:right-[25px] group-hover:top-[50%]">
              <FaHeart />
            </button>
            <button
              onClick={() => addBooksCart(book.id)}
              className="absolute right-0 bottom-[110px] px-[9px] py-[9px] bg-white rounded-[50%] text-bgbtnHome text-[22px] opacity-0 group-hover:opacity-100 duration-200 transition-all group-hover:right-[25px] group-hover:bottom-[110px]"
            >
              <FaShoppingBasket />
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BooksGrid;
