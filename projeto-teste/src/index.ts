type task = {
  name: string;
  schedule: Date;
};

class ToDoListManager {
  private tasks: task[] = [];
  constructor() {}

  insertTask(task: any) {
    this.tasks.push(task);
  }
}

const tarefa: task = {
  name: "aula 03",
  schedule: new Date("2024-08-27"),
};

const taskManager = new ToDoListManager();
taskManager.insertTask(tarefa);
