import "./register.css";
import axios from "axios";
import { useState } from "react";

import LoginPage from "../login/login";

function Register({ setCurrentPage, setAuthToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [educator, setEducator] = useState(false);
  return (
    <div className="windows">
      <div className="registerwindow">
        <div className="signuptitle">
          <h1>Register</h1>
          <div className="outline">
            <input
              type="text"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="outline">
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="outline">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="check">
            <input
              type="checkbox"
              value={educator}
              onChange={(e) => setEducator(e.target.value)}
            ></input>
            Educator Account
          </div>
          <div className="registerbutton">
            <button
              onClick={() => {
                axios
                  .post("http://localhost:5000/signup", {
                    username: username,
                    email: email,
                    password: password,
                    type: educator ? "teachers" : "students",
                  })
                  .then((response) => {
                    console.log(response.data);
                    if (response.data === "True") {
                      setCurrentPage(
                        <LoginPage
                          setCurrentPage={setCurrentPage}
                          setAuthToken={setAuthToken}
                        />
                      );
                    } else {
                      setUsername("");
                      setEmail("");
                      setPassword("");
                      setEducator(false);
                    }
                  });
              }}
            >
              Register
            </button>
          </div>
          <div
            onClick={() =>
              setCurrentPage(
                <LoginPage
                  setCurrentPage={setCurrentPage}
                  setAuthToken={setAuthToken}
                />
              )
            }
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
