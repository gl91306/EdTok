import SideBar from "./sidebar/sidebar";
import MainBar from "./mainbar/mainbar";
import React, { useState, useEffect } from "react";
function MainPage() {
  return (
    <>
      <SideBar />
      <MainBar />
    </>
  );
}

export default MainPage;
