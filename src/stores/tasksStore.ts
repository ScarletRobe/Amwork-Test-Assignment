import { makeAutoObservable } from "mobx";
import { TaskInterface } from "../types";
import { todoAPi } from "../services/todoApi";
import { adaptTasksResponse } from "../helpers";

class TasksStore {
  todos: TaskInterface[] = [];
  #page;

  constructor() {
    this.#page = 1;
    makeAutoObservable(this);
  }

  getTodos = async () => {
    try {
      const response = await todoAPi.get<TaskInterface[]>(
        `todos?_page=${this.#page}&_limit=5`
      );
      const adaptedResponse = adaptTasksResponse(response.data);
      this.todos = this.todos.concat(adaptedResponse);
      this.#page++;
    } catch (error) {
      alert("Ошибка при загрузке данных");
    }
  };

  changeIsCompleted = (id: number) => {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) return;
    todo.completed = !todo.completed;
  };
}

export default new TasksStore();
