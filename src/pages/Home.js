import React from "react";
import styled from "styled-components";
import RightSide from "../components/DataSide/RightSide";
import FeedbackSide from "../components/FeedbackBoard/FeedbackSide";

const HomeContainerStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
`;

function Home({ filterItem, feedbacks, increaseUpvotes}) {
  return (
    <HomeContainerStyled>
      <FeedbackSide filterItem={filterItem} />
      <RightSide feedbacks={feedbacks} increaseUpvotes={increaseUpvotes} />
    </HomeContainerStyled>
  );
}

export default Home;
