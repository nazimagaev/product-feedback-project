import React, { useState } from "react";
import styled from "styled-components";
import { buttonData } from "../../constants/contants";

const FilterButtonStyled = styled.div`
  width: 255px;
  height: 166px;
  background: #fff;
  border-radius: 10px;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 24px;
`;

const ButtonsStyled = styled.button`
  background: #f2f4ff;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #4661e6;

  border: none;
  margin-right: 8px;
  margin-bottom: 14px;
  padding: 5px 16px;
  cursor: pointer;

  ${({ selected }) => (selected ? `background: #4661E6; color: #FFF;` : "")}
`;

function FilterButton({ filterItem }) {
  const [selectedTag, setSelectedTag] = useState(false);

  const changeBgc = (e) => {
    setSelectedTag((buttonData.isSelected = true));
    console.log(e);
  };

  return (
    <FilterButtonStyled>
      {buttonData.map((item) => (
        <ButtonsStyled
          onClick={() => filterItem(item.title)}
          key={item.title}
          selectedTag={item.isSelected}
        >
          {item.title}
        </ButtonsStyled>
      ))}
    </FilterButtonStyled>
  );
}

export default FilterButton;
