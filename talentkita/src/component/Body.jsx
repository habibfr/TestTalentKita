import React from "react";
import About from "./content/About";
import Section3 from "./content/Section3";
import Services from "./content/Services";

const Body = () => {
  return (
    <div className="mb-80">
      <About />
      <Services/>
      <Section3/>
    </div>
  );
};

export default Body;
