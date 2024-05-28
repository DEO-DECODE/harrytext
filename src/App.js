import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Router>
        <Navbar title="Text Utils" aboutText="About Us" mode="light" />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
