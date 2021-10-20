import { Switch, Route } from "react-router";
import React, { Component, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AddToCard from "./pages/AddToCard";
import Men from "./pages/Men";
import styled from "styled-components";

const AppStyled = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

function App() {
  return (
    <Switch>
      <Route eRact path="/addtocard">
        <AddToCard />
      </Route>
      <Route exact path="/men">
        <Men />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
