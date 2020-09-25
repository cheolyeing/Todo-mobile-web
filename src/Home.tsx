import React from "react";
import Title from "./Title";
import WeeklyWeeather from "./Weather/WeeklyWeather";
import TodoList from "./Todo/TodoList";

function Home() {
  return (
    <div>
      <Title />
      <WeeklyWeeather />
      <TodoList />
    </div>
  );
}

export default Home;
