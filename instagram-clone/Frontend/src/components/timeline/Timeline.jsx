import React from "react";
import Suggestion from "./Suggestion";

function Timeline() {
  return (
    <div className="flex flex-row">
      <div className="flex-[0.7]">Timeline</div>
      <div className="flex-[0.3]">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
