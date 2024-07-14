import "./comments.css";
import Send from "../images/red-send.png";
import profile from "../images/pfp.png";
function Comments() {
  return (
    <div className="entire">
      <div className="comment">
        <div className="description">
          <h1>Natural e^x derivatives</h1>
          <p>A deep dive into exponential derivatives</p>
        </div>
        <div className="studentCommentDiv">
          <div className="studentComments">
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={profile}></img>
              <h1>Joe Don</h1>
            </div>
            <p>A deep dive into exponential derivatives</p>
          </div>
        </div>
      </div>
      <div className="youcomment">
        <input type="text" placeholder="ask!"></input>
        <img src={Send}></img>
      </div>
    </div>
  );
}
export default Comments;
