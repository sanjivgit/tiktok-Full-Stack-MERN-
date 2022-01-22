import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./VideoFooter.css";
import Ticker from "react-ticker";

function videoFooter(props) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{props.username}</h3>
        <p>{props.description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{props.song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default videoFooter;
