import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
