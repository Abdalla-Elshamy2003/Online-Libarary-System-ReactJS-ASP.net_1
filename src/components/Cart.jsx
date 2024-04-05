import React, { useContext, useState } from "react";
import { BooksContext } from "../contextApi/ContextApi";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const { booksCart, removeFromCart } = useContext(BooksContext);
  const [quantities, setQuantities] = useState({});
  const handleQuantityChange = (bookId, newQuantity) => {
    const updatedQuantity = Math.max(newQuantity, 1);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [bookId]: updatedQuantity,
    }));
  };
  return (
    <>
      <div className="bg-[#E5EDE8] w-full h-full">
        <div className="container mx-auto py-8">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="font-medium bg-bgbtn rounded-lg text-white">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-[16px] font-semibold"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-[16px] font-semibold"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-[16px] font-semibold"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-[16px] font-semibold"
                        >
                          Total Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {booksCart &&
                        booksCart.map((book) => (
                          <tr
                            key={book.id}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4">
                              <div className="flex items-start w-fit gap-3">
                                <img
                                  src={book.volumeInfo.imageLinks.thumbnail}
                                  alt={book.volumeInfo.title}
                                />
                                <div className="flex-grow flex flex-col gap-5">
                                  <p className="text-[#4D4D4D] text-[16px]">
                                    {book.volumeInfo.publishedDate}
                                  </p>
                                  <h1 className="text-[18px] text-black font-bold">
                                    {book.volumeInfo.title.length > 20
                                      ? book.volumeInfo.title.slice(0, 20) +
                                        "..."
                                      : book.volumeInfo.title}
                                  </h1>
                                  <span className="text-[14px] font-medium">
                                    {book.volumeInfo.authors
                                      ? book.volumeInfo.authors
                                      : "No Author"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <div className="bg-bgbtnHome flex items-center justify-around text-white h-[50px] w-full rounded-lg">
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      book.id,
                                      (quantities[book.id] || 0) - 1
                                    )
                                  }
                                  className="text-[25px] bg-bgbtnHome rounded-lg"
                                >
                                  -
                                </button>
                                <span className="text-[18px] bg-bgbtnHome rounded-lg">
                                  {quantities[book.id] || 1}
                                </span>
                                <button
                                  onClick={() =>
                                    handleQuantityChange(
                                      book.id,
                                      (quantities[book.id] || 0) + 1
                                    )
                                  }
                                  className="text-[25px] bg-bgbtnHome rounded-lg"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {book.volumeInfo.price &&
                                Math.floor(book.volumeInfo.price)}
                              EGP
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {book.volumeInfo.price && book.volumeInfo.price
                                ? quantities[book.id]
                                  ? Math.floor(
                                      quantities[book.id] *
                                        book.volumeInfo.price
                                    )
                                  : Math.floor(book.volumeInfo.price)
                                : "N/A"}
                              EGP
                            </td>
                            <td className="text-[#A4A4A4]">
                              <button onClick={() => removeFromCart(book)}>
                                <FaTrashCan />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
