import React from "react";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
}