import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Today from "../components/Today";
import Categories from "../components/Categories.jsx";
import Month from "../components/Month.jsx";
import Banner from "../components/Banner.jsx";
import Product from "../components/product.jsx";  
import Arrivable from "../components/Arrivable.jsx";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Today />
      <Categories />
      <Month />
      <Banner />
      <Product />
      <Arrivable/>

    </div>
  );
};

export default Home;
