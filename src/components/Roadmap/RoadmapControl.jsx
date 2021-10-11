import React from "react";
import styled from "styled-components";
import { AddFeedbackButtonStyled } from "../ui/Button";
import { GoBackStyled } from "../ui/Button";
import leftArrow from "../../assets/shared/icon-arrow-left.svg";

const RoadmapControlStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: #373f68;
  border-radius: 10px;
  padding: 27px 32px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #ffffff;
  }
  img {
    margin-right: 8px;
  }
`;

const RoadmapTextBox = styled.div``;

function RoadmapControl() {
  return (
    <RoadmapControlStyled>
      <RoadmapTextBox>
        <GoBackStyled>
          <img src={leftArrow} alt="leftArrow" /> Go back
        </GoBackStyled>
        <h2>Roadmap</h2>
      </RoadmapTextBox>
      <AddFeedbackButtonStyled>+ Add Feedback</AddFeedbackButtonStyled>
    </RoadmapControlStyled>
  );
}

export default RoadmapControl;
