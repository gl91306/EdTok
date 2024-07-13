import "./sidebar.css";

function Sidebar(props) {
  return (
    <div className="topics">
      <div className="title">
        <h1>
          EdTok
        </h1>
      </div>
      <div className="yours ">
        <h1 >For You</h1>
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
