class Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  dueDate?: string;

  constructor(
    id: number,
    title: string,
    content: string,
    done: boolean,
    dueDate?: string
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.done = done;
    this.dueDate = dueDate;
  }

  setDone() {
    this.done = !this.done;
  }
}

export default Todo;
