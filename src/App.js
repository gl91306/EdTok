import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./main/main";
import LoginPage from "./login/login";
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
            <Route
              path="/login"
              element={<LoginPage signin={signin} setsignin={setsignin} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
