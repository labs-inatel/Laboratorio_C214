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
