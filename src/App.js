import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./main";
import LoginPage from "./login";
import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  const [showDevMode, setshowDevMode] = useState(false);
  const [signin, setsignin] = useState();
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
