import { Task } from "./types";
import { ToDoListMemory } from "./ToDoListMemory";

const anyTask = {
  title: "any_title",
  description: "any_description",
  targetDate: "01/01/2025",
  type: "any_type",
  priority: "1",
  subTasks: [],
};

describe("ToDoList", () => {
  describe("Testing add", () => {
    test("should add a new task to the list", () => {
      const todoInstance = new ToDoListMemory();
      todoInstance.add(anyTask);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([anyTask]);
    });
    test("should add a valid tasks", () => {
      const todoInstance = new ToDoListMemory();
      const invalidValue: unknown = {
        invalidField: "invalidValue",
      };
      todoInstance.add(invalidValue as Task);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([]);
    });
  });
});
