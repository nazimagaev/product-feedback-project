import React from "react";
import styled from "styled-components";

const BoardStyled = styled.div`
  width: 255px;
  height: 137px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  border-radius: 10px;
  padding: 62px 77px 24px 24px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.25px;
    color: #ffffff;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
`;

function Board() {
  return (
    <BoardStyled>
      <h2>Frontend Mentor</h2>
      <h3>Feedback Board</h3>
    </BoardStyled>
  );
}

export default Board;
