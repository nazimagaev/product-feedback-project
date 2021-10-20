import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import RoadmapCard from "../../components/Roadmap/RoadmapCard";

const TaksStyled = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-bottom: 8px;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-bottom: 4px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    margin-bottom: 16px;
  }
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661e6;
    background: #f2f4ff;
    border-radius: 10px;
    padding: 5px 16px;
    display: inline;
  }
`;

function RoadmapTasksColumn({ taskHeading, taskDesc, feedbacks, id }) {
  return (
    <TaksStyled>
      {feedbacks.map((feedback, index) => {
        return <RoadmapCard key={feedback.id} index={index} {...feedback} />;
      })}
      {provided.placeholder}
    </TaksStyled>
  );
}

export default RoadmapTasksColumn;
