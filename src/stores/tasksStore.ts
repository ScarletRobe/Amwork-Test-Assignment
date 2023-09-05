import { makeAutoObservable } from "mobx";
import { TaskInterface } from "../types";
import { todoAPi } from "../services/todoApi";

class TasksStore {
  todos: TaskInterface[] = [];
  #page;

  constructor() {
    this.#page = 0;
    makeAutoObservable(this);
  }

  setTodos = (newTodos: TaskInterface[]) => {
    this.todos = newTodos;
  };

  getTodos = async () => {
    const response = await todoAPi.get(`todos?_page=${this.#page}&_limit=5`);
    this.todos.concat(response.data);
    this.#page++;
  };

  changeIsCompleted = (id: number) => {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) return;
    todo.completed = !todo.completed;
  };
}

export default new TasksStore();
