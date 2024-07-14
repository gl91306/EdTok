import "./mainbar.css";
import { useState } from "react";
import comment from "../images/message.png";
import sound from "../images/sound.png";
function Mainbar() {
  const [comments, setcomments] = useState(false);
  const handleComments = () =>{
    
  }

  return (
    <div className="rightside">
      <div className="video"></div>
      <div className="videobuttons">
        <div className="background">
          <div className="heart"></div>
        </div>
        <div className="background">
          <img src={comment} />
        </div>
        <div className="background" onClick={handleComments}>
          <img src={sound}></img>
        </div>
      </div>
    </div>
  );
}
export default Mainbar;
