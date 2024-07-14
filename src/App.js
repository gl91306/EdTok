import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./main/main";
import LoginPage from "./login/login";
import RegisterPage from "./register/register";
import "./index.css";
import React, { useState, useEffect } from "react";

const authTokenStart = () => localStorage.getItem("authToken");

function App() {
  const [showDevMode, setshowDevMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(false);
  const [authToken, setAuthToken] = useState(authTokenStart());

  useEffect(() => {
    localStorage.setItem("authToken", authToken);
  }, [authToken]);

  return (
    <>
      <div className="App">
        {currentPage ? (
          currentPage
        ) : authToken && authToken !== "null" ? (
          <MainPage
            authToken={authToken}
            setCurrentPage={setCurrentPage}
            setAuthToken={setAuthToken}
          />
        ) : (
          <RegisterPage
            setCurrentPage={setCurrentPage}
            setAuthToken={setAuthToken}
          />
        )}
      </div>
    </>
  );
}

export default App;
