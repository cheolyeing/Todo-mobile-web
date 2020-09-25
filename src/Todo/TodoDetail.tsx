import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoManager from "./ManageTodos";

import {
  Title,
  TodoDeleteBtn,
  TodoContainer,
  TodoTitle,
  TodoDeleteBtnContainer,
  TodoDueDate,
  TodoInside,
  TodoCheckBox,
  TodoCheckBoxContainer,
} from "../Style";

function TodoDetail(props: any) {
  const DUE_DATE = "due date: ";
  const id: number = props.todo.id;
  const title: string = props.todo.title;
  const dueDate: string = props.todo.dueDate;
  const [done, setDone] = useState<boolean>(props.todo.done);
  const todoManager: TodoManager = new TodoManager();
  const e = props.todo;
  const theme = {
    done: done,
    dueDate: dueDate !== undefined && dueDate !== null && dueDate !== "",
  };

  const handleClickDone = () => {
    todoManager.loadTodos();
    todoManager.changeDoneById(id);
    setDone(!done);
    props.reload();
  };

  const handleClickDelete = () => {
    todoManager.loadTodos();
    todoManager.deleteById(id);
    props.reload();
  };

  const showDuedate = () => {
    if (dueDate !== undefined && dueDate !== null && dueDate !== "") {
      return (
        <TodoDueDate>
          {DUE_DATE}
          {dueDate}
        </TodoDueDate>
      );
    }
  };

  return (
    <TodoContainer>
      <TodoCheckBoxContainer theme={theme}>
        <TodoCheckBox
          type="checkbox"
          checked={done}
          onChange={handleClickDone}
        />
      </TodoCheckBoxContainer>

      <TodoInside>
        <Title
          to={{
            pathname: `/editTodo/${id}`,
            state: {
              e,
            },
          }}
        >
          {" "}
          <div>
            <TodoTitle theme={theme}>{title}</TodoTitle>
            {showDuedate()}
          </div>
        </Title>
      </TodoInside>

      <TodoDeleteBtnContainer theme={theme}>
        <TodoDeleteBtn onClick={handleClickDelete}>
          <span role="img" aria-label="x">
            ❌
          </span>
        </TodoDeleteBtn>
      </TodoDeleteBtnContainer>

      <hr />
    </TodoContainer>
  );
}

export default TodoDetail;
