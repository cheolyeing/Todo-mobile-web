import React, { useState } from "react";

import { Input, ContentArea, SaveLink, SaveDiv, Header3 } from "../Style";

import Todo from "./Todo";
import TodoManager from "./ManageTodos";

function WriteTodo(props: any) {
  const TODO: string = "To-Do";
  const TITLE: string = "제목";
  const CONTENT: string = "내용";
  const DUE_DATE: string = "Due Date (Option)";
  const SAVE_BUTTON: string = "저장 버튼";

  const todo = props.location.state.e;
  let id = todo.id;
  const [title, setTitle] = useState<string>(todo.title);
  const [content, setContent] = useState<string>(todo.content);
  const [dueDate, setDueDate] = useState<string>("");
  const done = todo.done;

  const onClickSaveBtn = () => {
    const todoManager: TodoManager = new TodoManager();
    todoManager.loadTodos();

    if (id < 0) {
      todoManager.addTodo(
        new Todo(todoManager.getNewId(), title, content, false, dueDate)
      );
    } else {
      todoManager.updateTodo(new Todo(id, title, content, done, dueDate));
    }
  };

  return (
    <div>
      <div>
        <h1>{TODO}</h1>
        <Header3>{TITLE}</Header3>
        <SaveDiv>
          <Input
            type="text"
            value={title}
            size={50}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="텍스트 입력"
          />
        </SaveDiv>
        <Header3>{CONTENT}</Header3>
        <SaveDiv>
          <ContentArea
            rows={10}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="텍스트 입력"
          />
        </SaveDiv>
        <Header3>{DUE_DATE}</Header3>
        <SaveDiv>
          <Input
            name="duedate"
            type="date"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </SaveDiv>
      </div>
      <SaveLink to="/">
        <SaveDiv onClick={onClickSaveBtn}>{SAVE_BUTTON}</SaveDiv>
        {/* <button onClick={onClickSaveBtn}>{SAVE_BUTTON}</button> */}
      </SaveLink>
    </div>
  );
}

export default WriteTodo;
