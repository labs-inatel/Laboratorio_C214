export type Task = {
  id: string;
  title: string;
  description: string;
  targetDate: string;
  type?: string;
  priority?: string;
  subTasks?: Task[];
};
