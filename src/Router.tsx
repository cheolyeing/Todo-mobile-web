import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import WriteTodo from "./Todo/WriteTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/Todo-mobile-web" component={Home} />
        <Route path="/Todo-mobile-web/newTodo/:id" component={WriteTodo} />
        <Route path="/Todo-mobile-web/editTodo/:id" component={WriteTodo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
