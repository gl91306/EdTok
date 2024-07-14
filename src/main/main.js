import SideBar from "../sidebar/sidebar";
import MainBar from "../mainbar/mainbar";
import Header from "../header/header";
import MyClasses from "../MyClasses/MyClasses";
import React, { useState, useEffect } from "react";
function MainPage({ authToken, setCurrentPage, setAuthToken }) {
  const [currPage, setCurrPage] = useState(false);
  const [educator, seteducator] = useState(true);
  useEffect(() => {
    currPage
      ? console.log("HHHHHHHHHHHHHHHH")
      : setCurrPage(
          <MyClasses authToken={authToken} setCurrPage={setCurrPage} />
        );
  }, [authToken, currPage]);
  return (
    <>
      <div>
        <SideBar
          setCurrPage={setCurrPage}
          educator={
            JSON.parse(localStorage.getItem("authToken"))[2] == "teachers"
          }
          authToken={authToken}
        />
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
        <Header
          setCurrentPage={setCurrentPage}
          setCurrPage={setCurrPage}
          setAuthToken={setAuthToken}
        />
        {currPage}
      </div>
    </>
  );
}

export default MainPage;
