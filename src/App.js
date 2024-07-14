import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./main/main";
import LoginPage from "./login/login";
import RegisterPage from "./register/register";
import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  const [showDevMode, setshowDevMode] = useState(false);
  const [signin, setsignin] = useState();
  return (
    <>
      <div className="App">
        <MainPage />
      </div>
    </>
  );
}

export default App;
