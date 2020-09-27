import React from "react";
import ReactDOM from "react-dom";
import { render, renderer } from "@testing-library/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TodoDetail from "./TodoDetail";
import Todo from "./Todo";
import Home from "../Home";
import WriteTodo from "./WriteTodo";

describe("<TodoDetail />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <BrowserRouter>
        <TodoDetail
          todo={
            new Todo(
              123,
              "Todo Title",
              "What I have to do",
              false,
              "2020-09-01"
            )
          }
        />
      </BrowserRouter>
    );
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(
      <BrowserRouter>
        <TodoDetail
          todo={
            new Todo(
              123,
              "Todo Title",
              "What I have to do",
              false,
              "2020-09-01"
            )
          }
        />
      </BrowserRouter>
    );
    utils.getByText("Todo Title");
    utils.getByText("❌");
  });
});
