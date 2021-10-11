import React from "react";
import styled from "styled-components";
import RoadmapCondition from "../components/Roadmap/RoadmapCondition";
import RoadmapControl from "../components/Roadmap/RoadmapControl";

const RoadmapContainerStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 90px;
`;

function Roadmap() {
  return (
    <RoadmapContainerStyled>
      <RoadmapControl />
      <RoadmapCondition />
    </RoadmapContainerStyled>
  );
}

export default Roadmap;
