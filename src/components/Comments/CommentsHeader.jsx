import React from "react";
import styled from "styled-components";
import { EditFeedbackComment, GoBackStyled } from "../ui/Button";

const CommentsHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CommentsHeader() {
  return (
    <CommentsHeaderStyled>
      <GoBackStyled selected={true}>Go Back</GoBackStyled>
      <EditFeedbackComment>Edit Feedback</EditFeedbackComment>
    </CommentsHeaderStyled>
  );
}

export default CommentsHeader;
