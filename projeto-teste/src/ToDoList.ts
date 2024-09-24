import { ToDoListRepository } from "./ToDoListRepository";
import { Task, UpdateTask } from "./types";
export class ToDoList {
  toDoListRepository: ToDoListRepository;
  constructor(toDoListRepository: ToDoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  add(task: Task) {
    return this.toDoListRepository.add(task);
  }

  getTasks() {
    return this.toDoListRepository.getTasks();
  }

  updateTask(index: number, task: UpdateTask) {
    return this.toDoListRepository.updateTask(index, task);
  }

  removeTask(index: number) {
    return this.toDoListRepository.removeTask(index);
  }
}
