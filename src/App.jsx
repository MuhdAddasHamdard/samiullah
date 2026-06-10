import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
