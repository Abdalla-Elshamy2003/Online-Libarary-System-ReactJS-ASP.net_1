import React, { useContext } from "react";
import { BooksContext } from "../contextApi/ContextApi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksDisplayCol = () => {
  const { Books } = useContext(BooksContext);

  return (
    <>
      <div>
        <h1 className="text-black text-[22px] font-bold">Related books</h1>
        <div className="flex flex-row flex-wrap items-start justify-around">
          {Books.map((book) => (
            <Link
              to={`/booksStroe/${book.id}`}
              key={book.id}
              className="flex items-center gap-3 my-5 shadow-[0_4px_9px_-4px_#71887B]"
            >
              <div className="w-fill">
                <img
                  className="rounded-md"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </div>
              <div>
                <p className="flex items-center bg-[#FF7A00] gap-2 text-[12px] text-white w-fit px-2 py-1 rounded-[31px]">
                  <FaStar />
                  4.5
                </p>
                <h1 className="text-black text-[14px] font-bold">
                  {book.volumeInfo.title.length > 16
                    ? book.volumeInfo.title.slice(0, 16) + "..."
                    : book.volumeInfo.title}
                </h1>
                <p className=" text-bgbtn text-[20px] font-bold">
                  {book.volumeInfo.price}
                  {book.volumeInfo.currency}
                </p>
              </div>
            </Link>
          )).slice(0, 4)}
        </div>
      </div>
    </>
  );
};

export default BooksDisplayCol;
