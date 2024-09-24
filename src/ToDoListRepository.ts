import { Task } from "./types";
export interface ToDoListRepository {
  add(task: Task): void;
  getTasks(): Task[];
  updateTask(task: Task): void;
  removeTask(index: string): void;
}
