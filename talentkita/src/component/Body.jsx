import React from "react";
import About from "./content/About";
import Blog from "./content/Blog";
import Section3 from "./content/Section3";
import Section4 from "./content/Section4";
import Section5 from "./content/Section5";
import Services from "./content/Services";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="">
      <About />
      <Services/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default Body;
