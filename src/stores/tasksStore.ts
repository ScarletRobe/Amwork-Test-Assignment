import { makeAutoObservable } from "mobx";
import { todoAPi } from "../services/todoApi";
import { adaptTasksResponse } from "../helpers";
import { ITask, ITaskResponse } from "../types";

class TasksStore {
  todos: ITask[] = [];
  #page;

  constructor() {
    this.#page = 1;
    makeAutoObservable(this);
  }

  getTodos = async () => {
    try {
      const response = await todoAPi.get<ITaskResponse[]>(
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
