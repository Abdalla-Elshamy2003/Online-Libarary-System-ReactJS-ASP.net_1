import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutContainer from "../components/AboutContainer";
import NavBreadcrumb from "../components/NavBreadcrumb";

const About = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="About" />
      <AboutContainer />
      <Footer />
    </>
  );
};

export default About;
