import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";
import { TiPlus } from "react-icons/ti";

const AddButtons = () => {
  const [showModalLg, setShowModalLg] = useState(false);

  return (
    <>
      <div className="bg-[#E5EDE8]">
        <div className="pt-[50px]">
          {/* <!--Button trigger large modal-->*/}
          <div className="py-4">
            <div className="flex items-center flex-wrap w-full justify-around">
              <TERipple className="w-1/6" rippleColor="white">
                <button
                  type="button"
                  onClick={() => setShowModalLg(true)}
                  className="inline-block rounded-lg border-dashed border-bgbtn border-[2px] w-full py-[50px] text-sm font-medium uppercase leading-normal text-bgbtn transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                  <TiPlus className="text-[24px] mx-auto" />
                  <h1>Add</h1>
                </button>
              </TERipple>
              <div className="w-1/6">
                <button
                  type="button"
                  className="flex flex-col items-center rounded-lg border-dashed border-white border-[2px] bg-bgbtnHome bg-opacity-[50%] w-full py-[50px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                  <h1 className="text-[24px] font-bold">580</h1>
                  <p className="text-[16px] font-semibold">Books</p>
                </button>
              </div>
              <div className="w-1/6">
                <button
                  type="button"
                  className="flex flex-col items-center rounded-lg border-dashed bg-opacity-[50%] border-white border-[2px] bg-bgbtnHome w-full py-[50px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                  <h1 className="text-[24px] font-bold">22K</h1>
                  <p className="text-[16px] font-semibold">Readers</p>
                </button>
              </div>
              <div className="w-1/6">
                <button
                  type="button"
                  className="flex flex-col items-center rounded-lg w-full border-dashed bg-opacity-[50%] border-white border-[2px] bg-bgbtnHome py-[50px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                  <h1 className="text-[24px] font-bold">80%</h1>
                  <p className="text-[16px] font-semibold">Interested</p>
                </button>
              </div>
            </div>
          </div>
          {/* <!--Large modal-->*/}
          <TEModal show={showModalLg} setShow={setShowModalLg}>
            <TEModalDialog size="lg">
              <TEModalContent className="px-[40px]">
                <TEModalHeader>
                  {/* <!--Modal title--> */}
                  <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                    Add Book
                  </h5>
                  {/* <!--Close button--> */}
                  <button
                    type="button"
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    onClick={() => setShowModalLg(false)}
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </TEModalHeader>
                {/* <!--Modal body--> */}
                <TEModalBody>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="bookName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Book Title
                      </label>
                      <input
                        type="text"
                        id="bookName"
                        name="bookName"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="author"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Author
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="publicationDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Publication Date
                      </label>
                      <input
                        type="date"
                        id="publicationDate"
                        name="publicationDate"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="isbn"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ISBN
                      </label>
                      <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="bookData"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        id="bookData"
                        name="bookData"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="img"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        id="img"
                        name="img"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-primary-500 text-white px-4 py-2 rounded-md"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </TEModalBody>
              </TEModalContent>
            </TEModalDialog>
          </TEModal>
        </div>
      </div>
    </>
  );
};

export default AddButtons;
