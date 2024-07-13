import SideBar from "./sidebar/sidebar";
import MainBar from "./mainbar/mainbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./index.css";

function App() {
  const [showDevMode, setshowDevMode] = useState(false);
  const [signin, setsignin] = useState();
  const DevMode = () => {
    if (showDevMode) {
      return (
        <>
          <div id="horizontal"></div>
          <div id="vertical"></div>
        </>
      );
    }
  };
  const signinbar = () => {
    return (
      <div>
        <a href="/signin.js">Sign In</a>
      </div>
    );
  };
  const nosigninbar = () => {
    return;
  };
  return (
    <BrowserRouter>
      {signin ? signinbar() : nosigninbar()}
      
      <div className="App">
        <SideBar showDevMode={showDevMode} DevMode={DevMode} />
        <MainBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
