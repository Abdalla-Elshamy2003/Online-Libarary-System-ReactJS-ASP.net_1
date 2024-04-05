import React from "react";

const TableDetail = ({ book }) => {
  return (
    <>
      <div className="ps-3 lg:ps-0">
        <h1 className="text-[22px] font-bold text-black my-5">Details</h1>
        <table className="min-w-full divide-y divide-gray-200 my-5">
          <tbody className="bg-white divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white rounded-t-lg">
                Book Title
              </td>
              <td className="px-6 py-4 whitespace-nowrap kg:text-[20px] text-base font-medium">
                {book.volumeInfo && book.volumeInfo.title
                  ? book.volumeInfo.title
                  : ""}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white">
                Author
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-base">
                {book.volumeInfo && book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : ""}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white">
                ISBN
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2 text-xs sm:text-base">
                {book.volumeInfo &&
                book.volumeInfo.industryIdentifiers &&
                book.volumeInfo.industryIdentifiers.length > 0 &&
                book.volumeInfo.industryIdentifiers[0] &&
                book.volumeInfo.industryIdentifiers[0].identifier
                  ? book.volumeInfo.industryIdentifiers[0].identifier
                  : ""}
                {book.volumeInfo &&
                  book.volumeInfo.industryIdentifiers &&
                  book.volumeInfo.industryIdentifiers.length > 0 &&
                  book.volumeInfo.industryIdentifiers[0] && (
                    <p>
                      ( {book.volumeInfo.industryIdentifiers[0].type}:{" "}
                      {book.volumeInfo.industryIdentifiers[0].identifier})
                    </p>
                  )}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white">
                Edition Language
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-base">
                {book.volumeInfo && book.volumeInfo.language === "en"
                  ? "English"
                  : book.volumeInfo && book.volumeInfo.language === "ar"
                  ? "Arabic"
                  : "Other"}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white">
                Page Count
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-base">
                {book.volumeInfo && book.volumeInfo.pageCount
                  ? book.volumeInfo.pageCount
                  : ""}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white">
                Date Published
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-base">
                {book.volumeInfo && book.volumeInfo.publishedDate
                  ? book.volumeInfo.publishedDate
                  : ""}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap bg-[#4D4D4D] text-white rounded-b-lg">
                Publisher
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-base">
                {book.volumeInfo && book.volumeInfo.publisher
                  ? book.volumeInfo.publisher
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDetail;
