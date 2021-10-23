import React from "react";
import styled from "styled-components";
import { ReplyButton } from "../ui/Button";
import userImages from "../../assets/user-images/image-james.jpg";
import userImages2 from "../../assets/user-images/image-anne.jpg";
import { data } from "../../constants/contants";

const CommentsBoardStyled = styled.div`
  margin-top: 24px;
  width: 730px;

  background: #ffffff;
  border-radius: 10px;
  padding: 32px 34px;
`;

const CommentsUserContainer = styled.div`
  display: flex;
  margin-top: 28px;
  padding-bottom: 32px;
  /* border-bottom: 1px solid rgba(140, 146, 179, 0.25); */
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 32px;
  }
`;

const CommentsUserText = styled.div`
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    margin-top: 17px;
  }
`;
const CommentsUserInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;

    color: #3a4374;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #647196;
  }
`;

const CommentUserReply = styled.div`
  display: flex;
  margin-top: 28px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  padding-left: 44px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 32px;
  }
`;

function CommentsBoard() {
  return (
    <CommentsBoardStyled>
      {data.productRequests[0].comments.map((comment) => {
        return (
          <CommentsUserContainer key={comment.id}>
            <img src={userImages} alt="" />
            <CommentsUserText>
              <CommentsUserInfo>
                <div>
                  <h2>Elijah Moss</h2>
                  <h3>@hexagon.bestagon</h3>
                </div>
                <ReplyButton>Reply</ReplyButton>
              </CommentsUserInfo>
              <p>
                Second this! I do a lot of late night coding and reading. Adding
                a dark theme can be great for preventing eye strain and the
                headaches that result. It’s also quite a trend with modern apps
                and apparently saves battery life.
              </p>
            </CommentsUserText>
          </CommentsUserContainer>
        );
      })}
    </CommentsBoardStyled>
  );
}

export default CommentsBoard;

{
  /* <h2>4 Comments</h2>
      <CommentsUserContainer>
        <img src={userImages} alt="" />
        <CommentsUserText>
          <CommentsUserInfo>
            <div>
              <h2>Elijah Moss</h2>
              <h3>@hexagon.bestagon</h3>
            </div>
            <ReplyButton>Reply</ReplyButton>
          </CommentsUserInfo>
          <p>
            Second this! I do a lot of late night coding and reading. Adding a
            dark theme can be great for preventing eye strain and the headaches
            that result. It’s also quite a trend with modern apps and apparently
            saves battery life.
          </p>
        </CommentsUserText>
      </CommentsUserContainer>
      <CommentUserReply>
        <img src={userImages2} alt="" />
        <CommentsUserText>
          <CommentsUserInfo>
            <div>
              <h2>Anne Valentine</h2>
              <h3>@hexagon.bestagon</h3>
            </div>
            <ReplyButton>Reply</ReplyButton>
          </CommentsUserInfo>
          <p>
            <span style={{ color: "#AD1FEA", fontWeight: "bold" }}>
              @hummingbird1
            </span>{" "}
            While waiting for dark mode, there are browser extensions that will
            also do the job. Search for "dark theme” followed by your browser.
            There might be a need to turn off the extension for sites with
            naturally black backgrounds though.
          </p>
        </CommentsUserText>
      </CommentUserReply>
      <CommentUserReply>
        <img src={userImages2} alt="" />
        <CommentsUserText>
          <CommentsUserInfo>
            <div>
              <h2>Anne Valentine</h2>
              <h3>@hexagon.bestagon</h3>
            </div>
            <ReplyButton>Reply</ReplyButton>
          </CommentsUserInfo>
          <p>
            <span style={{ color: "#AD1FEA", fontWeight: "bold" }}>
              @hummingbird1
            </span>{" "}
            While waiting for dark mode, there are browser extensions that will
            also do the job. Search for "dark theme” followed by your browser.
            There might be a need to turn off the extension for sites with
            naturally black backgrounds though.
          </p>
        </CommentsUserText>
      </CommentUserReply> */
}
