export type Task = {
  title: string;
  description: string;
  targetDate: string;
  type?: string;
  priority?: string;
  subTasks?: Task[];
};

export type UpdateTask = {
  title?: string;
  description?: string;
  targetDate?: string;
  type?: string;
  priority?: string;
  subTasks?: Task[];
};

export class ToDoList {
  private tasks: Task[] = [];

  add(task: Task) {
    const missingProperties = ["title", "description", "targetDate"].filter(
      (prop) => !Object.keys(task).includes(prop)
    );

    // Se alguma propriedade estiver ausente, uma mensagem de erro é retornada
    try {
      if (missingProperties.length > 0) {
        return "Missing properties in task object";
      }
      // caso contrário, a tarefa é adicionada ao array
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
