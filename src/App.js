import SideBar from "./sidebar/sidebar";
import MainBar from "./mainbar/mainbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./main"
import LoginPage from "./login"
import "./index.css";

function App() {
  const [showDevMode, setshowDevMode] = useState(false);
  const [signin, setsignin] = useState();
  return (
    <>
    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/login' element ={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
        <SideBar />
        <MainBar />
      </div>
    </>
  );
}

export default App;
