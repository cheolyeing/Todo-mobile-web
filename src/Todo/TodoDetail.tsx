import React, { useEffect, useState } from "react";

import TodoManager from "./TodoManager";

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
  const [dateOver, setDateOver] = useState<boolean>(false);
  const todoManager: TodoManager = new TodoManager();
  const e = props.todo;
  const theme = {
    done: done,
    dueDate: dueDate !== undefined && dueDate !== null && dueDate !== "",
    dateOver: dateOver,
  };

  const checkDateOver = () => {
    let checkdDateOver: boolean = false;

    if (dueDate === undefined || dueDate === null || dueDate === "") {
    } else {
      let today: Date = new Date();
      let split: string[] = dueDate.split("-");
      if (+split[0] < today.getFullYear()) checkdDateOver = true;
      if (+split[1] < today.getMonth() + 1) checkdDateOver = true;
      if (+split[2] <= today.getDate()) checkdDateOver = true;
    }
    setDateOver(checkdDateOver);
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
        <TodoDueDate theme={theme}>
          {DUE_DATE}
          {dueDate}
        </TodoDueDate>
      );
    }
  };
  useEffect(() => {
    checkDateOver();
  }, []);
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
            pathname: `/Todo-mobile-web/editTodo/${id}`,
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
