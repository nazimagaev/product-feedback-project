import React from "react";
import styled from "styled-components";
import {
  CommentContainer,
  UpvotesContainer,
} from "../../DataSide/FeedbackCards";
import commentIcon from "../../../assets/shared/icon-comments.svg";
import upArrow from "../../../assets/shared/icon-arrow-up.svg";

const PlannedStyled = styled.div`
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

const PlannedCardStyled = styled.div`
  width: 350px;
  height: 272px;
  padding: 32px;
  background: #ffffff;
  border-radius: 5px;
  border-top: 6px solid #ad1fea;
`;

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
`;

function Planned() {
  return (
    <PlannedStyled>
      <h2>In-Progress</h2>
      <p>Currently being developed</p>
      <PlannedCardStyled>
        <h2>Planned</h2>
        <h3>More comprehensive reports</h3>
        <p>It would be great to see a more detailed breakdown of solutions.</p>
        <h4>Feature</h4>
        <StatContainer>
          <UpvotesContainer>
            <img src={upArrow} alt="arrow" />
            <h2>12</h2>
          </UpvotesContainer>
          <CommentContainer>
            <img src={commentIcon} alt="commentIcon" />
            <h2>2</h2>
          </CommentContainer>
        </StatContainer>
      </PlannedCardStyled>
    </PlannedStyled>
  );
}

export default Planned;
