import "./sidebar.css";
import MyClasses from "../MyClasses/MyClasses";

function Sidebar(props) {
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
        <h1>{props.educator ? "Preview" : "For You"}</h1>
      </div>
      <div className="classes">
        <h1 className="lineanimation">Math</h1>
        <h1 className="lineanimation">Reading</h1>
        <h1 className="lineanimation">Biology</h1>
        <h1 className="lineanimation">World History</h1>
      </div>
    </div>
  );
}

export default Sidebar;
