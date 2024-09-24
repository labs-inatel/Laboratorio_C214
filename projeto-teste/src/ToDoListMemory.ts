import { ToDoListRepository } from "./ToDoListRepository";
import { Task, UpdateTask } from "./types";

export class ToDoListMemory implements ToDoListRepository {
  private tasks: Task[] = [];

  add(task: Task) {
    const missingProperties = ["title", "description", "targetDate"].filter(
      (prop) => !Object.keys(task).includes(prop)
    );

    try {
      if (missingProperties.length > 0) {
        return "Missing properties in task object";
      }
      this.tasks.push(task);
    } catch (error) {
      return error;
    }
  }

  getTasks() {
    return this.tasks;
  }

  updateTask(index: number, task: UpdateTask) {
    this.tasks[index] = {
      ...this.tasks[index],
      ...task,
    };
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
