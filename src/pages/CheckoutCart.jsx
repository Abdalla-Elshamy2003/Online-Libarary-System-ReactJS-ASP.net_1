import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBreadcrumb from "../components/NavBreadcrumb";
import Cart from "../components/Cart";
import CouponCode from "../components/CouponCode";

const CheckoutCart = () => {
  useEffect(() => {}, [Cart]);
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Checkout" title={false} />
      <Cart />
      <CouponCode />
      <Footer />
    </>
  );
};

export default CheckoutCart;
