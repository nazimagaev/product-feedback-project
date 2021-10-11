import React from "react";
import styled from "styled-components";

const RoadmapStyle = styled.div`
  width: 255px;
  height: 178px;
  background: #ffffff;
  border-radius: 10px;
  padding: 22px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
  }
`;
const ViewButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #4661e6;
  border: none;
  background-color: transparent;
`;

const ConditionBox = styled.div`
  margin-top: 24px;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    text-align: right;

    color: #647196;
  }
`;

function RoadmapPage() {
  return (
    <RoadmapStyle>
      <TitleBox>
        <h2>Roadmap</h2>
        <ViewButton>View</ViewButton>
      </TitleBox>
      <ConditionBox>
        <ItemBox>
          <h2>Planned</h2>
          <p>2</p>
        </ItemBox>
        <ItemBox>
          <h2>In-progress</h2>
          <p>3</p>
        </ItemBox>
        <ItemBox>
          <h2>Live</h2>
          <p>1</p>
        </ItemBox>
      </ConditionBox>
    </RoadmapStyle>
  );
}

export default RoadmapPage;
