import React from "react";
import HitungBungaDinamis from "./components/HitungBungaDinamis";
import HitungBungaStatic from "./components/HitungBungaStatic";
import Segitiga from "./components/Segitiga";

const App = () => {
  return (
    <div>
      <HitungBungaStatic/>
      <HitungBungaDinamis />
      <Segitiga/>
    </div>
  );
};

export default App;
