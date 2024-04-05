import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StoreFeatures from "../components/StoreFeatures";
import News from "../components/News";
import Books from "../components/Books";
import NavBreadcrumb from "../components/NavBreadcrumb";

const BooksStroe = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Books" title={false} />
      <Books />
      <News />
      <StoreFeatures />
      <Footer />
    </>
  );
};

export default BooksStroe;
