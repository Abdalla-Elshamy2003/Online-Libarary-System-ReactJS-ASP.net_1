import React, { useContext } from "react";
import { BooksContext } from "../contextApi/ContextApi";
import { FaShoppingBasket, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksList = () => {
  const { Books, addBooksCart } = useContext(BooksContext);
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-[120px] py-[60px]">
        {Books.map((book) => (
          <div
            key={book.id}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center justify-between gap-5">
              <div className="w-full relative">
                <img
                  className=" object-contain rounded-xl h-[264px] w-[185px]"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
                {book.volumeInfo.bestBook && book.volumeInfo.bestBook ? (
                  <p className="absolute left-[-3px] bottom-[-30px] shadow-[0_0_17px_3px_#FF7A00] rounded-b-[20px] text-[16px] font-semibold text-white bg-[#FF7A00] w-[190px] h-[50px] flex items-center justify-center">
                    Best Seller
                  </p>
                ) : null}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="my-4 text-[14px] py-3 px-4 rounded-lg bg-bgbtnHome text-white font-bold">
                    {book.volumeInfo.categories}
                  </p>
                  <p className="my-4 text-[12px] py-3 px-4 rounded-lg bg-bgbtnHome text-white font-bold">
                    {book.volumeInfo.publishedDate}
                  </p>
                </div>
                <h1 className="text-[22px] font-semibold">
                  {book.volumeInfo.title.length > 30
                    ? book.volumeInfo.title.slice(0, 45) + "..."
                    : book.volumeInfo.title}
                </h1>
                <p className="flex items-center my-3 opacity-[60%] font-medium text-[16px]">
                  {book.volumeInfo.publisher} .
                  <FaStar className="text-[#FF7A00]" />
                  {book.volumeInfo.contentVersion}
                </p>
                <p className="w-[75%]">
                  {book.volumeInfo.description &&
                  book.volumeInfo.description.length > 120
                    ? book.volumeInfo.description.slice(0, 120) + "..."
                    : book.volumeInfo.description}
                </p>
              </div>
            </div>
            <div>
              {book.volumeInfo.price ? (
                <>
                  <div className="flex flex-col items-start gap-3">
                    <span className="text-[22px] font-bold">
                      {book.volumeInfo.price}EGP
                    </span>
                    <div className="flex items-center gap-2">
                      <del className="text-[14px] text-[#1C1C1C]">5000EGP</del>
                      <span className="bg-[#FF7A00] text-white px-3 py-1 rounded-lg">
                        2%
                      </span>
                    </div>
                    <div
                      onClick={() => addBooksCart(book.id)}
                      className="cursor-pointer flex items-center justify-center w-[150px] h-[50px] rounded-lg gap-2 text-white bg-bgbtnHome text-[14px]"
                    >
                      <FaShoppingBasket />
                      <button className="text-[12px]">Add to Cart</button>
                    </div>
                    <Link
                      to="/borrowed"
                      className="cursor-pointer flex items-center justify-center w-[150px] h-[50px] rounded-lg gap-2 text-white bg-bgbtnHome text-[14px]"
                    >
                      Borrowed
                    </Link>
                  </div>
                </>
              ) : (
                <div className="text-red-500 text-[24px]">Out</div>
              )}
            </div>
          </div>
        )).slice(0, 6)}
      </div>
    </>
  );
};

export default BooksList;
