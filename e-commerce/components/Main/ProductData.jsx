import React from "react";
import ProductLook from "../Main/ProductLook";
import ProductDesc from "../Main/ProductDesc";
import styled from "styled-components";

const ProductDataStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
  padding-left: 50px;
  padding-right: 50px;
`;

function ProductData() {
  return (
    <ProductDataStyled>
      <ProductLook />
      <ProductDesc />
    </ProductDataStyled>
  );
}

export default ProductData;
