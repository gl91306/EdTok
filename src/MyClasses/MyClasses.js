import "./MyClasses.css";
import Class from "./class/class";
import MyClass from "../MyClass/MyClass";
import axios from "axios";
import { useState, useEffect } from "react";
import AddClass from "./popupAddclass/addClass";

function MyClasses(props) {
  const [classAdd, setclassAdd] = useState(false);
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
  useEffect(() => {}, []);

  const TeacherAdd = (props) => {
    return (
      <>
        <div id="newClass" onClick={() => setclassAdd(true)}>
          <div id="verticalplus"></div>
          <div id="horizontalplus"></div>
        </div>
      </>
    );
  };
  return (
    <>
      {classAdd ? <AddClass /> : null}
      <div className="myclasses">
        <div id="Title">My Classes</div>
        <div id="classes">
          {clases.map((clas, id) => (
            <Class
              name={clas[0]}
              id={clas[1]}
              image={clas[2]}
              key={id}
              onClick={() => {
                props.setCurrPage(<MyClass />);
              }}
            />
          ))}
          {props.educator ? <TeacherAdd /> : null}
        </div>
      </div>
    </>
  );
}
export default MyClasses;
