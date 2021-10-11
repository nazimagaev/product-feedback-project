import React, { useReducer } from "react";
import styled from "styled-components";
// const [state, dispatch] = useReducer(reducer, initialState)

const loginReducer = (state, action) => {
  if (action.type === "Name_Input") {
    return { value: action.payload };
  } 
};

const Login = () => {
  const nameHandler = (e) => {
    loginDispatch({ type: "Name_Input", payload: e.target.value });
  };
  const [loginState, loginDispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });
  console.log(loginState);

  return (
    <FormContainer>
      <h3>Login</h3>
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={nameHandler}
          type="text"
          placeholder="Enter username"
          value={loginState.email}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={loginState.password}
        />
      </div>
      <button type="submit">Login</button>
    </FormContainer>
  );
};

export default Login;

export const FormContainer = styled.form`
  max-width: 540px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 5.2rem 4rem;
  background: #ffffff;
  border-radius: 10px;
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #3a4374;
    margin-bottom: 5rem;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 1.3rem 2.4rem;
    background: #f7f8fd;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-bottom: 2rem;
  }
  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    margin-bottom: 0.9rem;
    color: #3a4374;
    display: inline-block;
  }
  button {
    background: #ad1fea;
    border-radius: 10px;
    width: 100%;
    padding: 1.2rem 1.7rem;
    border: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    color: #f2f4fe;
    margin-top: 2.9rem;
  }
`;

