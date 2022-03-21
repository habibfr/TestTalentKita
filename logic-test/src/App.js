import React from "react";
import HitungBungaDinamis from "./components/HitungBungaDinamis";
import HitungBungaStatic from "./components/HitungBungaStatic";

const App = () => {
  return (
    <div>
      <HitungBungaStatic/>
      <HitungBungaDinamis />
    </div>
  );
};

export default App;
