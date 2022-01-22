import logo from "./logo.svg";
import "./App.css";
import Video from "./Video";
import axios from "./axios.js";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app_video">
        {videos.map((props) => (
          <Video
            url={props.url}
            username={props.username}
            description={props.description}
            song={props.song}
            likes={props.likes}
            messages={props.messages}
            share={props.share}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
