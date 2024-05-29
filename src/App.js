import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  console.log(alert);
  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05357b";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
