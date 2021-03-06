import React, { useRef, useState } from "react";
import video1 from "./videos/tiktok.mp4";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import ReactPlayer from "react-player";

function Video(props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <ReactPlayer
        onClick={handleClick}
        className="video_player"
        loop
        ref={videoRef}
        url={props.url}
        height="650px"
      ></ReactPlayer>
      <VideoFooter
        username={props.username}
        description={props.description}
        song={props.song}
      />
      <VideoSidebar
        likes={props.likes}
        messages={props.messages}
        share={props.share}
      />
    </div>
  );
}

export default Video;
