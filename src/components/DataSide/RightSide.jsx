import React from "react";
import FeedbackCards from "./FeedbackCards";
import FeedbackControl from "./FeedbackControl";
import NoFeedback from "./NoFeedback";


function RightSide({ feedbacks, increaseUpvotes }) {
  return (
    <div>
      <FeedbackControl />
      <FeedbackCards feedbacks={feedbacks} increaseUpvotes={increaseUpvotes} />
    </div>
  );
}

export default RightSide;
