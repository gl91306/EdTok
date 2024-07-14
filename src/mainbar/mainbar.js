import "./mainbar.css";
import { useState } from "react";
import Hearts from "../images/heavy-black-heart.svg";
import comment from "../images/speech-balloon.svg";
import Sound from "../images/speaker-with-three-sound-waves.svg";
import Comments from "../comments/comments";
import VideoJS from "../videos/video";

function Mainbar() {
  const [comments, setcomments] = useState(true);
  const [sound, setsound] = useState(1);
  const handleComments = () => {
    setcomments(!comments);
  };

  const handleSound = () => {
    if (sound > 0) {
      setsound(0);
    } else {
      setsound(1);
    }
  };

  return (
    <div className="rightside">
      <div className="videos">
        <VideoJS sound={sound} />
      </div>
      {comments ? <Comments /> : null}
      <div className="videobuttons">
        <div className="background">
          <img src={Hearts}></img>
        </div>
        <div className="background" onClick={handleComments}>
          <img src={comment} />
        </div>
        <div className="background" onClick={handleSound}>
          <img src={Sound}></img>
        </div>
      </div>
    </div>
  );
}
export default Mainbar;
