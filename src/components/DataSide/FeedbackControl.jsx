import React from "react";
import styled from "styled-components";
import iconSuggestion from "../../assets/suggestions/icon-suggestions.svg";
import { AddFeedbackButtonStyled } from "../ui/Button";

const FeedbackControlStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 825px;
  height: 72px;
  background: #373f68;
  border-radius: 10px;
  padding: 14px 16px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #ffffff;
    margin: auto 0;
    margin-left: -460px;
  }
`;

const SuggestionImg = styled.div`
  margin: auto 0;
  img {
    width: 24px;
    height: 24px;
  }
`;



function FeedbackControl() {
  return (
    <FeedbackControlStyled>
      <SuggestionImg>
        <img src={iconSuggestion} alt="" />
      </SuggestionImg>
      <h2>6 Suggestions</h2>
      <AddFeedbackButtonStyled>+ Add Feedback</AddFeedbackButtonStyled>
    </FeedbackControlStyled>
  );
}

export default FeedbackControl;
