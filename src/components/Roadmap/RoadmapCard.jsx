import React from "react";
import styled from "styled-components";
import { CommentContainer, UpvotesContainer } from "../DataSide/FeedbackCards";
import commentIcon from "../../assets/shared/icon-comments.svg";
import upArrow from "../../assets/shared/icon-arrow-up.svg";
import { returnCardBorderColor, returnLabelOfStatus } from "../utils/utils";
const CardStyled = styled.div`
  width: 350px;
  height: 272px;
  padding: 32px;
  background: #ffffff;
  border-radius: 5px;
  border-top: 6px solid ${returnCardBorderColor};
  margin-bottom: 24px;
  h2 {
    text-transform: capitalize;
  }
`;

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
`;

function RoadmapCard({ status, title, id, index }) {
  return (

        <CardStyled
          status={status}
        >
          <h2>{returnLabelOfStatus(status)}</h2>
          <h3>{title}</h3>
          <p>
            It would be great to see a more detailed breakdown of solutions.
          </p>
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
        </CardStyled>
      
      );
  }
export default RoadmapCard;
