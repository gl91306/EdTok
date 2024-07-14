import VideoMp4 from "../images/Download.mp4";
import { useState } from "react";
import "./video.css";
import ReactPlayer from "react-player";
function Video(props) {
  const [play, setPlay] = useState(true);

  const handlePlaying = () => {
    setPlay(!play);
  };

  return (
    <>
      <div className="vid" onClick={handlePlaying}>
        <ReactPlayer
          url={VideoMp4}
          width="450px"
          height="800px"
          volume={1}
          muted={props.sound}
          playing={play}
        />
      </div>
    </>
  );
}

export default Video;
