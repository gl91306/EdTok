import SideBar from "../sidebar/sidebar";
import MainBar from "../mainbar/mainbar";
import Header from "../header/header";
import React, { useState, useEffect } from "react";
function MainPage() {
  const [currPage, setCurrPage] = useState(<MainBar />);
  const [educator, seteducator] = useState(true);
  return (
    <>
      <div>
        <SideBar setCurrPage={setCurrPage}  educator = {educator}/>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Header />
        {currPage}
      </div>
    </>
  );
}

export default MainPage;
