import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MyClasses from "../MyClasses/MyClasses";
import Mainbar from "../mainbar/mainbar";

function Sidebar(props) {
  const [clases, setClases] = useState([]);
  useEffect(() => {
    console.log(JSON.parse(props.authToken));
    axios
      .post("http://localhost:5000/classes", {
        username: JSON.parse(props.authToken)[1],
        authtoken: JSON.parse(props.authToken)[0],
        type: JSON.parse(props.authToken)[2],
      })
      .then((response) => {
        console.log(response.data);
        setClases(response.data);
      });
  }, []);

  return (
    <div className="topics">
      <div className="title">
        <h1
          onClick={() =>
            props.setCurrPage(
              <MyClasses
                educator={props.educator}
                currPage={props.currPage}
                setCurrPage={props.setCurrPage}
              />
            )
          }
        >
          EdTok
        </h1>
        {props.educator ? <h6>Educator</h6> : <></>}
      </div>
      <div className="foryou">
        <h1
          onClick={() => {
            props.setCurrPage(<Mainbar />);
          }}
        >
          {props.educator ? "Preview" : "For You"}
        </h1>
      </div>
      <div className="classes">
        {clases.map((name, id) => (
          <h1 className="lineanimation" key={id}>
            {name[0]}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
