import React from "react";
import styled from "styled-components";
import AddComments from "../components/Comments/AddComments";
import CommentsHeaderStyled from "../components/Comments/CommentsHeader";

const CommentsStyled = styled.div`
  max-width: 73rem;
  margin: 0 auto;
  margin-top: 90px;
`;

function Comments({ selected }) {
  return (
    <CommentsStyled>
      <CommentsHeaderStyled selected={selected} />
      <AddComments />
    </CommentsStyled>
  );
}

export default Comments;
