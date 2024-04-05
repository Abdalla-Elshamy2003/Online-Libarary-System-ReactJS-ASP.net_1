import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReactSlider from "react-slider";

const BooksFilter = () => {
  const [categoriesValue, setCategoriesValue] = useState([]);
  const [bookFormatValue, setBookFormatValue] = useState([]);
  const [dropDownCategories, setDropDownCategories] = useState(false);
  const [dropDownBookFormat, setDropDownBookFormat] = useState(false);

  const categories = [
    { id: "1", name: "Arts & Photography" },
    { id: "2", name: "Biographies & Memory" },
    { id: "3", name: "Children’s Book" },
    { id: "4", name: "Cookbook & Food" },
    { id: "5", name: "History" },
    { id: "6", name: "Literature & Fiction" },
    { id: "7", name: "Romance" },
    { id: "8", name: "Sicfi & Fantasy" },
    { id: "9", name: "Teen & Young Adult" },
  ];
  const BookFormat = [
    { id: "1", name: "Hard Cover" },
    { id: "2", name: "Paper Back" },
    { id: "3", name: "E-Book" },
    { id: "4", name: "Large Print" },
  ];

  console.log(categoriesValue);

  return (
    <>
      <div className=" mt-[80px] bg-[#E5EDE8]">
        <h1 className="text-[45px] font-bold">Filter</h1>
        {/*  CATEGORIES */}
        <div>
          {!dropDownCategories ? (
            <div className="pt-3">
              <button
                onClick={() => setDropDownCategories(!dropDownCategories)}
                className="flex items-center justify-between w-[90%] text-[22px] font-bold"
              >
                Categories
                <IoIosArrowDown className="text-[#71887B] rotate-180 duration-200 transition-transform" />
              </button>
              <ul className="pt-2">
                {categories.map((categorie) => (
                  <li className="mt-2" key={categorie.id}>
                    <input
                      type="checkbox"
                      id={categorie.id}
                      onChange={() =>
                        setCategoriesValue([...categoriesValue, categorie.name])
                      }
                    />
                    <label
                      className="text-[#636363] text-[14px] ms-2"
                      htmlFor={categorie.id}
                    >
                      {categorie.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="pt-3">
              <button
                onClick={() => setDropDownCategories(!dropDownCategories)}
                className="flex items-center justify-between w-[90%] text-[22px] font-bold"
              >
                Categories
                <IoIosArrowDown className="text-[#71887B] rotate-0 duration-200 transition-transform" />
              </button>
            </div>
          )}
        </div>
        {/* Book Format */}
        <div>
          {!dropDownBookFormat ? (
            <div className="pt-3">
              <button
                onClick={() => setDropDownBookFormat(!dropDownBookFormat)}
                className="flex items-center justify-between w-[90%] text-[22px] font-bold"
              >
                Book Format
                <IoIosArrowDown className="text-[#71887B] rotate-180 duration-200 transition-transform" />
              </button>
              <ul className="pt-2">
                {BookFormat.map((book) => (
                  <li className="mt-2" key={book.name}>
                    <input
                      type="checkbox"
                      id={book.name}
                      onChange={() =>
                        setBookFormatValue([...bookFormatValue, book.name])
                      }
                    />
                    <label
                      className="text-[#636363] text-[14px] ms-2"
                      htmlFor={book.name}
                    >
                      {book.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="pt-3">
              <button
                onClick={() => setDropDownBookFormat(!dropDownBookFormat)}
                className="flex items-center justify-between w-[90%] text-[22px] font-bold"
              >
                Book Format
                <IoIosArrowDown className="text-[#71887B] rotate-0 duration-200 transition-transform" />
              </button>
            </div>
          )}
        </div>
        {/* Publisher */}
        <div>
          <div className="pt-6">
            <button className="flex items-center justify-between w-[90%] text-[22px] font-bold">
              Publisher
              <IoIosArrowDown className="text-[#71887B] duration-200 transition-transform" />
            </button>
          </div>
        </div>
        {/* Years */}
        <div>
          <div className="pt-6">
            <button className="flex items-center justify-between w-[90%] text-[22px] font-bold">
              Years
              <IoIosArrowDown className="text-[#71887B] duration-200 transition-transform" />
            </button>
          </div>
        </div>
        {/* Price Range */}
        <div className="mt-5">
          <ReactSlider
            className="horizontal-slider py-8"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[10, 3000]}
            max={5000}
            min={50}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
          />
        </div>
        {/* Buttons */}
        <div className="mt-6">
          <button className="w-full bg-bgbtnHome py-3 shadow-2xl rounded-lg text-white text-[16px] font-semibold">
            Refine Search
          </button>
          <button className="w-full bg-transparent mt-5 shadow-2xl py-3 rounded-lg text-[#636363] text-[16px] font-semibold">
            Reset Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default BooksFilter;
