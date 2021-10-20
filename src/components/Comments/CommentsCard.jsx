import React from "react";
import FeedbackCards, { FeedbackCardsStyled } from "../DataSide/FeedbackCards";

function CommentsCard(props) {
  return (
    <div>
      <FeedbackCardsStyled>
{props.children}
      </FeedbackCardsStyled>
    </div>
  );
}

export default CommentsCard;
