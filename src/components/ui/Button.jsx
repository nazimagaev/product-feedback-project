import styled from "styled-components";

export const AddFeedbackButtonStyled = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  background: #ad1fea;
  border-radius: 10px;
  border: none;
  padding: 12.5px 25px;
  cursor: pointer;
`;

export const GoBackStyled = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: ${(props) => (props.selected ? "#647196" : "#fff")};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const EditFeedbackComment = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  background: #4661e6;
  border-radius: 10px;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
`;

export const PostComment = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  background: #ad1fea;
  border-radius: 10px;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
`;

export const ReplyButton = styled.button`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
