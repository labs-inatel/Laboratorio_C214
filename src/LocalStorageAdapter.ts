import { ToDoListRepository } from "./ToDoListRepository";
import { Task } from "./types";

export class LocalStorageAdapter implements ToDoListRepository {
  add(task: Task): void {
    const tasks: Task[] = this.getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getTasks(): Task[] {
    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks;
  }
  updateTask(task: Task): void {
    const tasks: Task[] = this.getTasks();
    const index = tasks.findIndex((item) => item.id === task.id);
    tasks[index] = {
      ...task,
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  removeTask(id: string): void {
    const tasks: Task[] = this.getTasks();
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
