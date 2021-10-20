import { Switch, Route } from "react-router";
import React, { Component, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Comments from "./pages/Comments";
import Roadmap from "./pages/Roadmap";
import { data } from "./constants/contants";

function App({ selected }) {
  const [feedbacks, setFeedbacks] = useState(data.productRequests);
  const increaseUpvotes = (id) => {
    const selectedUpvotes = feedbacks.find((item) => {
      if (item.id === id) {
        return selectedUpvotes + 1;
      }
    });
  };

  function filterItem(title) {
    console.log(title);
    if (title === "All") {
      console.log(data.productRequests);
      return setFeedbacks(data.productRequests);
    }
    const filteredFeedbacks = data.productRequests.filter(
      (item) => item.category === title
    );
    return setFeedbacks(filteredFeedbacks);
  }

  return (
    <Switch>
      <Route eRact path="/roadmap">
        <Roadmap />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/Comments">
        <Comments selected={selected} />
      </Route>
      <Route exact path="/">
        <Home
          filterItem={filterItem}
          increaseUpvotes={increaseUpvotes}
          feedbacks={feedbacks}
        />
      </Route>
    </Switch>
  );
}

export default App;
