import SideBar from "./sidebar/sidebar";
import MainBar from "./mainbar/mainbar";
import React, { useState, useEffect } from "react";
function MainPage() {
  const [currPage, setCurrPage] = useState(<MainBar />);
  return (
    <>
      <SideBar setCurrPage={setCurrPage} />
      {currPage}
    </>
  );
}

export default MainPage;
