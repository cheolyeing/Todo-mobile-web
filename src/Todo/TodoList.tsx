import React, { useEffect, useState } from "react";

import {
  TodoListContainer,
  AddButton,
  Header3,
  AddLink,
  TodoContainer,
} from "../Style";

import Todo from "./Todo";
import TodoManager from "./ManageTodos";
import TodoDetail from "./TodoDetail";

function TodoList() {
  const TITLE: string = "이번주 To-Do";
  const MAKE_TODO: string = "추가 버튼";
  const [todos, setTodos] = useState<Todo[]>([]);
  const e = new Todo(-1, "", "", false);

  const init = () => {
    const todoManager: TodoManager = new TodoManager();
    todoManager.loadTodos();
    setTodos(todoManager.todos);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div>
        <Header3>{TITLE}</Header3>
      </div>
      <div>
        <AddLink
          to={{
            pathname: `/newTodo/${e.id}`,
            state: {
              e,
            },
          }}
        >
          <AddButton>{MAKE_TODO}</AddButton>
        </AddLink>
      </div>
      <br />
      <TodoListContainer>
        <TodoContainer />
        {todos.map((e) => {
          return <TodoDetail key={e.id} todo={e} reload={init} />;
        })}
      </TodoListContainer>
    </div>
  );
}

export default TodoList;
