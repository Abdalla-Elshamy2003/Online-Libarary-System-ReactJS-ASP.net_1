import React from "react";

const AddBorrowedTable = () => {
  return (
    <>
      <div className="bg-[#E5EDE8]">
        <div className="container mx-auto py-[120px]">
          <table className="min-w-full divide-y divide-gray-200 my-5">
            <thead className="bg-white divide-gray-200">
              <tr className="text-black bg-white rounded-lg">
                <th className="px-10 py-4 whitespace-nowrap"></th>
                <th className="px-6 py-4 whitespace-nowrap">Image</th>
                <th className="px-6 py-4 whitespace-nowrap">Book Title</th>
                <th className="px-6 py-4 whitespace-nowrap">Author</th>
                <th className="px-6 py-4 whitespace-nowrap">Date Published</th>
                <th className="px-6 py-4 whitespace-nowrap">ISBN</th>
                <th className="px-6 py-4 whitespace-nowrap">Publisher</th>
              </tr>
            </thead>
            <thead className="bg-white divide-gray-200">
              <tr className="text-black bg-white rounded-lg">
                <td>
                  <div className="flex flex-col items-center gap-2">
                    <button className="bg-bgbtn text-white text-[12px] w-full h-[40px] rounded-lg hover:bg-opacity-[50%] transition-all duration-200">
                      Update
                    </button>
                    <button className="bg-red-600 text-white text-[12px] w-full h-[40px] rounded-lg hover:bg-opacity-[50%] transition-all duration-200">
                      Delete
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="http://books.google.com/books/content?id=ljEEAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                    alt="Outlook Business"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Outlook Business
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Carlos A. Varela
                </td>
                <td className="px-6 py-4 whitespace-nowrap">2008-09-07</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ISBN_13-9780262313360
                </td>
                <td className="px-6 py-4 whitespace-nowrap">MIT Press</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddBorrowedTable;
