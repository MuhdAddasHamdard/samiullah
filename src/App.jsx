import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
