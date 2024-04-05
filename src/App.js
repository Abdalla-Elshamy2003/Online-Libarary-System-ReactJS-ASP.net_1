import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BooksProvider from "./contextApi/ContextApi";
import BooksStroe from "./pages/BooksStroe";
import CheckoutCart from "./pages/CheckoutCart";
import BookDetails from "./pages/BookDetails";
import PaymentPage from "./pages/PaymentPage";
import ContactUS from "./pages/ContactUS";
import About from "./pages/About";
import AddBooks from "./pages/AddBooks";
import Profile from "./pages/Profile";
import Borrowed from "./pages/Borrowed";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BooksProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/booksStroe" element={<BooksStroe />} />
            <Route path="/booksStroe/:bookId" element={<BookDetails />} />
            <Route path="/checkout" element={<CheckoutCart />} />
            <Route path="/checkout/payment" element={<PaymentPage />} />
            <Route path="/contactUs" element={<ContactUS />} />
            <Route path="/about" element={<About />} />
            <Route path="/addBooks" element={<AddBooks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/borrowed" element={<Borrowed />} />
          </Routes>
        </BooksProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
