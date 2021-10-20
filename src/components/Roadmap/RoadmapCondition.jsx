import React from "react";
import InProgress from "./RoadmapCondition/InProgress";
import Live from "./RoadmapCondition/Live";
import Planned from "./RoadmapCondition/Planned";

function RoadmapCondition() {
  return (
    <div>
      <Planned />
      <InProgress />
      <Live />
    </div>
  );
}

export default RoadmapCondition;
