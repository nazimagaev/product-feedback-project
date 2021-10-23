import React, { useState } from "react";
import styled from "styled-components";
import upArrow from "../../assets/shared/icon-arrow-up.svg";
import commentIcon from "../../assets/shared/icon-comments.svg";
import { data } from "../../constants/contants";
import { buttonData } from "../../constants/contants";

export const FeedbackCardsStyled = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  height: 151px;
  margin-top: 24px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

export const UpvotesContainer = styled.div`
  background: #f2f4fe;
  border-radius: 10px;
  width: 40px;
  height: 53px;
  padding: 9px;
  cursor: pointer;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3a4374;
  }
  img {
    margin-left: 6px;
    margin-bottom: 3px;
  }
`;

const TextContainer = styled.div`
  width: 476px;
  height: 95px;
  margin-left: -150px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
  }

  h3 {
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

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    margin-top: 4px;
    margin-bottom: 12px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  width: 44px;
  height: 23px;
  margin-top: 36px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
    margin-left: 8px;
  }
  img {
    width: 18px;
    height: 16px;
    margin: auto 0;
  }
`;

function FeedbackCards({ feedbacks, increaseUpvotes }) {
  // const [count, setCount] = useState(0);

  return (
    <>
      {feedbacks.map((item) => {
        return (
          <FeedbackCardsStyled key={item.id}>
            <UpvotesContainer onClick={() => increaseUpvotes(item.id)}>
              <img src={upArrow} alt="arrow" />
              <h2>{item.upvotes}</h2>
            </UpvotesContainer>
            <TextContainer>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3>{item.category}</h3>
            </TextContainer>
            <CommentContainer>
              <img src={commentIcon} alt="commentIcon" />
              <h2>{item.comments?.length}</h2>
            </CommentContainer>
          </FeedbackCardsStyled>
        );
      })}
    </>
  );
}

export default FeedbackCards;

{
  /*     <FeedbackCardsStyled>
      <UpvotesContainer>
        <img src={upArrow} alt="arrow" />
        <h2>112</h2>
      </UpvotesContainer>
      <TextContainer>
        <h2>Add tags for solutions</h2>
        <p>Easier to search for solutions based on a specific stack.</p>
        <h3>Enhancement</h3>
      </TextContainer>
      <CommentContainer>
        <img src={commentIcon} alt="commentIcon" />
        <h2>2</h2>
      </CommentContainer>
    </FeedbackCardsStyled> */
}
