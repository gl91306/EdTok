import "./MyClasses.css";
import Class from "./class/class";
import { useState } from "react";
import AddClass from "./popupAddclass/addClass";

function MyClasses(props) {
  const [classAdd, setclassAdd] = useState(false);
  var classes = [
    ["Math", "math", "234j234"],
    ["Reading", "reading", "2452wr"],
    ["Biology", "biology", "asdfsdfa"],
    ["World History", "hush", "asfasdfasdf"],
  ];

  const TeacherAdd = (props) => {
    return (
      <>
        <div id="newClass" onClick={setclassAdd(true)}>
          <div id="verticalplus"></div>
          <div id="horizontalplus"></div>
        </div>
      </>
    );
  };
  return (
    <>
      {classAdd ? null : <AddClass />}
      <div className="myclasses">
        <div id="Title">My Classes</div>
        <div id="classes">
          {classes.map((clas, id) => (
            <Class name={clas[0]} image={clas[1]} id={clas[2]} key={id} />
          ))}
          {props.educator ? <TeacherAdd /> : null}
        </div>
      </div>
    </>
  );
}
export default MyClasses;
