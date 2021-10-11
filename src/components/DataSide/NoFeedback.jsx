import React from "react";
import styled from "styled-components";
import { AddFeedbackButtonStyled } from "../ui/Button";
import FeedbackControl from "./FeedbackControl";

const NoFeedbackStyled = styled.div``;

function NoFeedback() {
  return (
    <NoFeedbackStyled>
      <h2>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <AddFeedbackButtonStyled></AddFeedbackButtonStyled>
    </NoFeedbackStyled>
  );
}

export default NoFeedback;
