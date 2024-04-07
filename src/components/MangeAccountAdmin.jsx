import React from "react";

const MangeAccountAdmin = () => {
    return (
        <>
            <div className="bg-[#E5EDE8]">
                <div className="container mx-auto py-[120px]">
                    <table className="min-w-full divide-y divide-gray-200 my-5">
                        <thead className="bg-white divide-gray-200">
                            <tr className="text-black bg-white rounded-lg">
                                <th className="px-10 py-4 whitespace-nowrap"></th>
                                <th className="px-6 py-4 whitespace-nowrap">User Name</th>
                                <th className="px-6 py-4 whitespace-nowrap">Password</th>
                                <th className="px-6 py-4 whitespace-nowrap">Email</th>
                                <th className="px-6 py-4 whitespace-nowrap">Phone</th>
 
                            </tr>
                        </thead>
                        <thead className="bg-white divide-gray-200">
                            <tr className="text-black bg-white rounded-lg">
                                <td>
                                    <div className="flex flex-col items-center gap-2">
                                        <button className="bg-bgbtn text-white text-[12px] w-full h-[40px] rounded-lg hover:bg-opacity-[50%] transition-all duration-200">
                                            Accept
                                        </button>
                                        <button className="bg-red-600 text-white text-[12px] w-full h-[40px] rounded-lg hover:bg-opacity-[50%] transition-all duration-200">
                                        Reject
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <h1>rady</h1>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                   <span>000000</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                   <span>rady@gmail.com</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">+201010428983</td>
                                </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}
export default MangeAccountAdmin;