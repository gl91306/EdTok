import "./addClass.css";
function AddClass() {
  return (
    <>
      {console.log("reached here")}
      <div id="addClasspopup">
        <div id="inside">
          <h1>Add Class</h1>
          <div id="seperate">
            <div className="popupInput">
              <input
                className="popupInput"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div className="popupInput">
              <input
                type="text"
                placeholder="Students (comma seperated)"
              ></input>
            </div>
            <div id="upload">
              <button type="button">Upload File</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddClass;
