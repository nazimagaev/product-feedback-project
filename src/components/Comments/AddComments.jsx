import React from "react";
import styled from "styled-components";
import { PostComment } from "../ui/Button";

const AddCommentsStyled = styled.div`
  margin-top: 24px;
  width: 730px;
  height: 246px;

  background: #ffffff;
  border-radius: 10px;
  padding: 32px 34px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
  }

  input {
    background: #f7f8fd;
    border-radius: 5px;
    border: none;
    width: 664px;
    height: 80px;

    margin-top: 24px;
    margin-bottom: 16px;
    /* padding-top: 16px;
    padding-left: 24px; */

    ::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #8c92b3;
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #647196;
      display: flex;
      align-items: center;
    }
  }
`;

function AddComments() {
  return (
    <AddCommentsStyled>
      <h2>Add Comment</h2>
      <input type="text" placeholder="Type your comment here" />
      <div>
        <h4>250 Characters left</h4>
        <PostComment>Post Comment</PostComment>
      </div>
    </AddCommentsStyled>
  );
}

export default AddComments;
