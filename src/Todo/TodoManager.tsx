import Todo from "./Todo";

class TodoManager {
  public todos: Todo[];
  private TODO_LS: string = "todos";

  constructor() {
    this.todos = [];
  }

  loadTodos = () => {
    const loadedTodos = localStorage.getItem(this.TODO_LS);
    if (loadedTodos === null) {
    } else {
      const parsedTodos = JSON.parse(loadedTodos);
      this.todos = parsedTodos;
    }
  };

  saveTodos = (sort?: boolean) => {
    if (sort) this.sortById();
    localStorage.setItem(this.TODO_LS, JSON.stringify(this.todos));
  };

  addTodo = (newTodo: Todo) => {
    this.todos = [...this.todos, newTodo];
    this.saveTodos();
  };

  updateTodo = (updatedTodo: Todo) => {
    const idx = this.todos.findIndex((todo) => {
      return todo.id === updatedTodo.id;
    });
    if (idx > -1) {
      this.todos[idx].title = updatedTodo.title;
      this.todos[idx].content = updatedTodo.content;
      this.todos[idx].dueDate = updatedTodo.dueDate;
      this.todos[idx].done = updatedTodo.done;
    }
    this.saveTodos();
  };

  getNewId = () => {
    if (this.todos.length === 0) return 0;
    return this.todos[this.todos.length - 1].id + 1;
  };

  sortById = () => {
    this.todos.sort(function (a, b) {
      return a.id - b.id;
    });
  };

  deleteById = (id: number) => {
    const idx = this.todos.findIndex((todo) => {
      return todo.id === id;
    });
    if (idx > -1) this.todos.splice(idx, 1);
    this.saveTodos();
  };

  changeDoneById = (id: number) => {
    const idx = this.todos.findIndex((todos) => {
      return todos.id === id;
    });
    if (idx > -1) this.todos[idx].done = !this.todos[idx].done;
    this.saveTodos();
  };
}

export default TodoManager;
