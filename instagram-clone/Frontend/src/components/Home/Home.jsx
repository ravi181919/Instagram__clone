import React from "react";
import Sidenav from "../navigation/Sidenav";
import Timeline from "../timeline/Timeline";

function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex-[0.2]">
        <Sidenav />
      </div>
      <div className="flex-[0.8]">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
