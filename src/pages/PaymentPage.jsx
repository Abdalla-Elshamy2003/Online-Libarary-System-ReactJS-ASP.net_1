import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBreadcrumb from "../components/NavBreadcrumb";
import PaymentData from "../components/PaymentData";

const PaymentPage = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Checkout" />
      <PaymentData />
      <Footer />
    </>
  );
};

export default PaymentPage;
