import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import StoreFeatures from "../components/StoreFeatures";
import SectionTrending from "../components/SectionTrending";
import SectionTopBoock from "../components/SectionTopBoock";
import SectionFlashSale from "../components/SectionFlashSale";
import Personal from "../components/Personal";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <StoreFeatures />
      <SectionTrending />
      <SectionTopBoock />
      <SectionFlashSale />
      <News />
      <Personal />
      <Footer />
    </>
  );
};

export default Home;
