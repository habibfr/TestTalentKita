import React from "react";
import Calculator from "./components/Calculator";
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
    </div>
  );
};

export default App;
