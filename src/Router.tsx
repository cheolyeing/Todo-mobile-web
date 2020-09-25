import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import WriteTodo from "./Todo/WriteTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/newTodo/:id" component={WriteTodo} />
        <Route path="/editTodo/:id" component={WriteTodo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
