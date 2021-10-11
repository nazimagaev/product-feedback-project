import React from "react";
import styled from "styled-components";
import Board from "./Board";
import FilterButton from "./FilterButton";
import RoadmapPage from "./RoadmapPage";

const FeedbackSideStyled = styled.div`
  margin-right: 30px;
`;

function FeedbackSide({filterItem}) {
  return (
    <FeedbackSideStyled>
      <Board />
      <FilterButton filterItem={filterItem}/>
      <RoadmapPage />
    </FeedbackSideStyled>
  );
}

export default FeedbackSide;
