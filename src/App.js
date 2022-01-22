import logo from "./logo.svg";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app_video">
        <Video
          url="https://www.youtube.com/shorts/C5kIQ9zpjRI"
          username="Sanjiv Kumar"
          description="This is a small description"
          song="This is a song"
          likes={111}
          messages={222}
          share={333}
        />
        <Video
          url="https://www.youtube.com/shorts/C5kIQ9zpjRI"
          username="Sanjiv Kumar"
          description="This is a small description"
          song="This is a song"
          likes={444}
          messages={555}
          share={666}
        />
      </div>
    </div>
  );
}

export default App;
