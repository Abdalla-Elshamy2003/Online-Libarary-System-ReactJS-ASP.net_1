import React, { useContext, useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { BooksContext } from "../contextApi/ContextApi";
import { SlGrid } from "react-icons/sl";
import { MdOutlineFormatListBulleted } from "react-icons/md";

import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import BooksGrid from "./BooksGrid";
import BooksList from "./BooksList";
import BooksFilter from "./BooksFilter";
const Books = () => {
  const { advancedSearch, gridBtn, setGridBtn } = useContext(BooksContext);
  const [selectItem, setSelectItem] = useState("Newest");

  return (
    <>
      <div className="bg-[#E5EDE8]">
        <div className="container mx-auto">
          {gridBtn && gridBtn ? (
            /* Books List */
            <div className="flex items-start justify-center gap-6 pt-[80px]">
              <div className="w-[40%]">
                <BooksFilter />
              </div>
              <div>
                {/* Header Books Store */}
                <div>
                  <div className="mt-[80px] flex items-end justify-between">
                    <div>
                      <h1 className="text-[45px] font-bold">Books</h1>
                      <p className="text-[16px] font-normal opacity-[60%]">
                        Over 475+ books available here, find it now!
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {/* Drob Dwon Menu */}
                      <TEDropdown className="flex justify-center">
                        <TERipple rippleColor="light">
                          <TEDropdownToggle
                            defaultValue={selectItem}
                            className="flex items-center whitespace-nowrap rounded text-bgbtn border-[1px] border-bgbtn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#71887B] transition duration-150 ease-in-out hover:bg-bgbtn hover:text-white hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-bgbtn focus:text-white focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-bgbtn active:textw active:shadow-[0_8px_9px_-4px_#71887B,0_4px_18px_0_#71887B] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_#71887B] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          >
                            {selectItem}
                            <span className="ml-2 [&>svg]:w-5 w-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </TEDropdownToggle>
                        </TERipple>
                        <TEDropdownMenu>
                          <TEDropdownItem>
                            <a
                              onClick={() => setSelectItem("Newest")}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#71887B] hover:text-bgbtn active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Newest
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              onClick={() => setSelectItem("Oldest")}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#71887B] hover:text-bgbtn active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Oldest
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              onClick={() => setSelectItem("Best Sellers")}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#71887B] hover:text-bgbtn active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Best Sellers
                            </a>
                          </TEDropdownItem>
                        </TEDropdownMenu>
                      </TEDropdown>

                      {/* Grid Button */}
                      {gridBtn && gridBtn ? (
                        <>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtnHome bg-opacity-[15%] text-bgbtn px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <SlGrid />
                          </button>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtn text-white px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <MdOutlineFormatListBulleted />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtn text-white px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <SlGrid />
                          </button>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtnHome bg-opacity-[15%] text-bgbtn px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <MdOutlineFormatListBulleted />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/*  Books Container */}
                <div>
                  {/* <BooksGrid /> */}
                  <BooksList />
                </div>
                <div className="py-7">
                  <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex justify-center gap-2">
                      <li>
                        <a className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                          Previous
                        </a>
                      </li>
                      <li aria-current="page">
                        <a
                          className="relative block rounded bg-bgbtn px-3 py-1.5 text-sm font-medium text-white transition-all duration-300"
                          href="#!"
                        >
                          1
                          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          ) : (
            /* Books Gride */
            <div className="flex items-start justify-center gap-6 pt-[80px]">
              <div>
                {/* Header Books Store */}
                <div>
                  <div className="mt-[80px] flex items-end justify-between">
                    <div>
                      <h1 className="text-[45px] font-bold">Books</h1>
                      <p className="text-[16px] font-normal opacity-[60%]">
                        Over 475+ books available here, find it now!
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {/* Advanced Search */}
                      {advancedSearch ? null : (
                        <button
                          onClick={() => {
                            setGridBtn(true); // تحديث قيمة gridBtn إلى true عند النقر على زر Advanced Search
                          }}
                          className="flex items-center gap-2 text-bgbtn border-[1px] border-bgbtn rounded-lg py-[8px] px-[16px] shadow-[0_4px_9px_-4px_#71887B]"
                        >
                          <VscSettings />
                          Advanced Search
                        </button>
                      )}
                      {/* Drob Dwon Menu */}
                      <TEDropdown className="flex justify-center">
                        <TERipple rippleColor="light">
                          <TEDropdownToggle
                            defaultValue={selectItem}
                            className="flex items-center whitespace-nowrap rounded text-bgbtn border-[1px] border-bgbtn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#71887B] transition duration-150 ease-in-out hover:bg-bgbtn hover:text-white hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-bgbtn focus:text-white focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-bgbtn active:textw active:shadow-[0_8px_9px_-4px_#71887B,0_4px_18px_0_#71887B] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_#71887B] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          >
                            {selectItem}
                            <span className="ml-2 [&>svg]:w-5 w-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </TEDropdownToggle>
                        </TERipple>
                        <TEDropdownMenu>
                          <TEDropdownItem>
                            <a
                              onClick={() => setSelectItem("Newest")}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#71887B] hover:text-bgbtn active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Newest
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              onClick={() => setSelectItem("Oldest")}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#71887B] hover:text-bgbtn active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Oldest
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              onClick={() => setSelectItem("Best Sellers")}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-[#71887B] hover:text-bgbtn active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Best Sellers
                            </a>
                          </TEDropdownItem>
                        </TEDropdownMenu>
                      </TEDropdown>

                      {/* Grid Button */}
                      {gridBtn && gridBtn ? (
                        <>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtnHome bg-opacity-[15%] text-bgbtn px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <SlGrid />
                          </button>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtn text-white px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <MdOutlineFormatListBulleted />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtn text-white px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <SlGrid />
                          </button>
                          <button
                            onClick={() => setGridBtn(!gridBtn)}
                            className="bg-bgbtnHome bg-opacity-[15%] text-bgbtn px-4 py-2 rounded-xl shadow-[0_4px_9px_-4px_#71887B] transition-colors duration-200"
                          >
                            <MdOutlineFormatListBulleted />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/*  Books Container */}
                <div>
                  <BooksGrid />
                </div>
                <div className="py-7">
                  <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex justify-center gap-2">
                      <li>
                        <a className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                          Previous
                        </a>
                      </li>
                      <li aria-current="page">
                        <a
                          className="relative block rounded bg-bgbtn px-3 py-1.5 text-sm font-medium text-white transition-all duration-300"
                          href="#!"
                        >
                          1
                          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          className="relative block rounded bg-bgbtnHome bg-opacity-[15%] px-3 py-1.5 text-sm text-bgbtn transition-all duration-300 hover:bg-bgbtn hover:text-white dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Books;
