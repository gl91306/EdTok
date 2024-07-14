import "./mainbar.css";
import { useState } from "react";
import comment from "../images/message.png";
import sound from "../images/sound.png";
import Comments from "../comments/comments";
function Mainbar() {
  const [comments, setcomments] = useState(true);
  const handleComments = () => {
    setcomments(!comments);
  };

  return (
    <div className="rightside">
      <div className="video"></div>
      {comments ? <Comments /> : null}
      <div className="videobuttons">
        <div className="background">
          <div className="heart"></div>
        </div>
        <div className="background" onClick={handleComments}>
          <img src={comment} />
        </div>
        <div className="background">
          <img src={sound}></img>
        </div>
      </div>
      
    </div>
  );
}
export default Mainbar;
