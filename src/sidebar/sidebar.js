import "./sidebar.css";

function Sidebar(props) {
  return (
    <div className="topics">
      <div className="title">
        <h1>EdTok</h1>
      </div>
      <div className="yours">
        <h1>
        For You
        </h1>
      </div>
      <div className="classes">
        <h1>
          Math
        </h1>
        <h1>
          Reading
        </h1>
        <h1>
          Biology
        </h1>
        <h1>
          World History
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
