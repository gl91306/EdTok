import "./header.css";
import axios from "axios";
import { useEffect, useState } from "react";
import pfp from "../images/pfp.png"; // temp
import LoginPage from "../login/login";

function Header({ setCurrentPage, setCurrPage, setAuthToken }) {
  const [name, setName] = useState("John Pork");
  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    setName(JSON.parse(localStorage.getItem("authToken"))[1]);
  }, []);
  return (
    <div
      id="profilecontainer"
      onClick={() => {
        localStorage.setItem("authToken", "null");
        setCurrentPage(
          <LoginPage
            setCurrentPage={setCurrentPage}
            setAuthToken={setAuthToken}
          />
        );
      }}
    >
      <p id="username">{name}</p>
      <img id="pfp" src={pfp} alt="profile" />
    </div>
  );
}
export default Header;
