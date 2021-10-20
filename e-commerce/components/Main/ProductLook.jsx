import React from "react";
import styled from "styled-components";
import mainPhoto from "../../images/image-product-1.jpg";
import asisPhoto1 from "../../images/image-product-2.jpg";
import asisPhoto2 from "../../images/image-product-3.jpg";
import asisPhoto3 from "../../images/image-product-4.jpg";

const ProductLookStyled = styled.div`
  margin-right: 80px;
  margin-bottom: 130px;
  .main-photo {
    width: 445px;
    height: 445px;
    border-radius: 15px;
  }
`;

const Thumbnails = styled.div`
  margin-top: 32px;
  display: flex;
  .asis-photo {
    width: 88px;
    height: 88px;
    border-radius: 10px;
    margin-right: 31px;
  }
`;

function ProductLook() {
  return (
    <ProductLookStyled>
      <img src={mainPhoto} alt="" className="main-photo" />
      <Thumbnails>
        <img src={mainPhoto} className="asis-photo" alt="" />
        <img src={asisPhoto1} className="asis-photo" alt="" />
        <img src={asisPhoto2} className="asis-photo" alt="" />
        <img src={asisPhoto3} className="asis-photo" alt="" />
      </Thumbnails>
    </ProductLookStyled>
  );
}

export default ProductLook;
