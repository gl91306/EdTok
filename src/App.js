import SideBar from "./sidebar/sidebar";
import MainBar from "./mainbar/mainbar";
import React, { useState, useEffect } from "react";
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
    <>
      {signin ? signinbar() : nosigninbar()}
      <button id="Dev" onClick={() => setshowDevMode(!showDevMode)}>
        Dev Mode
      </button>

      <div className="App">
        <SideBar showDevMode={showDevMode} DevMode={DevMode} />
        <MainBar />
      </div>
    </>
  );
}

export default App;
