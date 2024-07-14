import "./login.css";
import axios from "axios";
import { useState } from "react";

import Register from "../register/register";
import MainPage from "../main/main";

function Login({ setCurrentPage, setAuthToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [educator, setEducator] = useState(false);
  const [output, setOutput] = useState("...");
  return (
    <>
      <div className="window">
        <div className="loginscreen">
          <h1>Login</h1>
          <div className="username">
            <p>Username</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="passsword">
            <p>Password</p>
            <input
              type="text"
              placeholder="passsword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              value={educator}
              onChange={(e) => setEducator(e.target.value)}
            ></input>
            Educator Account
          </div>
          <div className="loginbutton">
            <button
              onClick={() => {
                axios
                  .post("http://localhost:5000/login", {
                    username: username,
                    password: password,
                    type: educator ? "teachers" : "students",
                  })
                  .then((response) => {
                    console.log(response.data);
                    if (
                      response.data != "Incorrect Password" &&
                      response.data != "Username Does Not Exist" &&
                      response.data != "POST requests only"
                    ) {
                      setAuthToken(
                        JSON.stringify([
                          response.data,
                          username,
                          educator ? "teachers" : "students",
                        ])
                      );
                      localStorage.setItem(
                        "authToken",
                        JSON.stringify([
                          response.data,
                          username,
                          educator ? "teachers" : "students",
                        ])
                      );
                      console.log([
                        response.data,
                        username,
                        educator ? "teachers" : "students",
                      ]);
                      setCurrentPage(
                        <MainPage
                          authToken={localStorage.getItem("authToken")}
                          setAuthToken={setAuthToken}
                          setCurrentPage={setCurrentPage}
                        />
                      );
                    } else {
                      setUsername("");
                      setPassword("");
                      setEducator(false);
                      setOutput(response.data);
                    }
                  });
              }}
            >
              Login
            </button>
          </div>
          <div className="noaccount">
            Don't have an account?{" "}
            <b
              onClick={() =>
                setCurrentPage(
                  <Register
                    setCurrentPage={setCurrentPage}
                    setAuthToken={setAuthToken}
                  />
                )
              }
            >
              Register
            </b>
          </div>
          <div>{output}</div>
        </div>
      </div>
    </>
  );
}
export default Login;
