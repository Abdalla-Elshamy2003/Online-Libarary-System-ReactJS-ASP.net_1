import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactUsContainer from "../components/ContactUsContainer";
import NavBreadcrumb from "../components/NavBreadcrumb";

const ContactUS = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Contact" />
      <ContactUsContainer />
      <Footer />
    </>
  );
};

export default ContactUS;
