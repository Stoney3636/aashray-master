import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Workshop from "./components/Workshop";
import Sliderimages from "./components/Sliderimages";

import Sponsers from "./components/sponsers/index";

function App() {
  return (

    <BrowserRouter>
      
      <Hero />
      <Sliderimages />
      <Workshop />
      <Events />
      <Sponsers/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
