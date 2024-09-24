import { Task, UpdateTask } from "./types";

export interface ToDoListRepository {
  add(task: Task): string | unknown | undefined;
  getTasks(): Task[];
  updateTask(index: number, task: UpdateTask): void;
  removeTask(index: number): void;
}
