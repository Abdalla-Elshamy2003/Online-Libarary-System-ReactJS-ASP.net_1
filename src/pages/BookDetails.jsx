import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBreadcrumb from "../components/NavBreadcrumb";
import BookDetail from "../components/BookDetail";
import TableDetail from "../components/TableDetail";
import BooksDisplayCol from "../components/BooksDisplayCol";
import CustomerReviews from "../components/CustomerReviews";
import axios from "axios";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/books/${bookId}`
        );
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookDetails, bookDetails]);

  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Books" title={true} titlePage={bookDetails.title} />
      <div className="bg-[#E5EDE8]">
        <BookDetail book={bookDetails} />
        <div className="container lg:mx-auto flex flex-col items-start lg:flex-row lg:gap-16 lg:w-full">
          <div className="w-full lg:w-[75%]">
            <TableDetail book={bookDetails} />
            <CustomerReviews />
          </div>
          <div className="w-full lg:w-[25%]">
            <BooksDisplayCol />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDetails;
