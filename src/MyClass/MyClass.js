import "./MyClass.css";
import Class from "./clas/clas";
import axios from "axios";
import { useState, useEffect } from "react";
import AddClass from "./popupAddclass/addAssig";

function MyClass(props) {
  const [classAdd, setclassAdd] = useState(false);
  const [clases, setClases] = useState([]);
  useEffect(() => {
    console.log(JSON.parse(props.authToken));
    axios
      .post("http://localhost:5000/clas", {
        username: JSON.parse(props.authToken)[1],
        authtoken: JSON.parse(props.authToken)[0],
        type: JSON.parse(props.authToken)[2],
        classtoken: props.classtoken,
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
        <div id="Title">My Class</div>
        <div id="classes">
          {clases.map((clas, id) => (
            <Class name={clas[0]} id={clas[1]} image={clas[2]} key={id} />
          ))}
          {props.educator ? <TeacherAdd /> : null}
        </div>
      </div>
    </>
  );
}
export default MyClass;
