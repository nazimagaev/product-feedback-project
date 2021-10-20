import React from "react";
import styled from "styled-components";

import { AddToCardBtn } from "../UI/Button";

const ProductDescStyled = styled.div`
  margin-top: 62px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ff7e1b;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 48px;
    color: #1d2026;
    margin-top: 27px;
    margin-bottom: 32px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #69707d;
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    color: #1d2026;
    margin-bottom: 10px;
    margin-top: 32px;
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      color: #ff7e1b;
      background: #ffeee2;
      border-radius: 6px;
      padding: 4px;
      margin-left: 16px;
    }
  }
  h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    text-decoration-line: line-through;
    color: #b6bcc8;
  }
`;

const ProductDescBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const QuantityBtn = styled.div`
  background: #f6f8fd;
  border-radius: 10px;
  width: 157px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 21px;
  button {
    color: #ff7e1b;
    background-color: transparent;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height */

    text-align: center;
  }
`;

function ProductDesc() {
  return (
    <ProductDescStyled>
      <h2>Sneaker Company</h2>
      <h3>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <h4>
        $125.00<span>50%</span>
      </h4>
      <h5>$250.00</h5>
      <ProductDescBtn>
        <QuantityBtn>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </QuantityBtn>
        <AddToCardBtn>Add to cart</AddToCardBtn>
      </ProductDescBtn>
    </ProductDescStyled>
  );
}

export default ProductDesc;
