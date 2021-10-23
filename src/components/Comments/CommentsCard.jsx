import React from "react";
import FeedbackCards, { FeedbackCardsStyled } from "../DataSide/FeedbackCards";
import { data } from "../../constants/contants";


const feedback = data.productRequests[0];

function CommentsCard(props) {
  return <FeedbackCardsStyled>{props.children}</FeedbackCardsStyled>;
}

export default CommentsCard;
