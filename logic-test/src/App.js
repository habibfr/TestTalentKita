import React from "react";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import HitungBungaDinamis from "./components/HitungBungaDinamis";
import HitungBungaStatic from "./components/HitungBungaStatic";
import Segitiga from "./components/Segitiga";

const App = () => {
  return (
    <div>
      <HitungBungaStatic />
      <HitungBungaDinamis />
      <Segitiga />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;
