import React from "react";
import styled from "styled-components";
import Navbar from "../components/Header/Navbar";
import ProductData from "../components/Main/ProductData";

const HomeContainerStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 48px;
`;

function Home() {
  return (
    <HomeContainerStyled>
      <Navbar />
      <ProductData />
    </HomeContainerStyled>
  );
}

export default Home;
