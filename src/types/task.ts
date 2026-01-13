export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Todo' | 'In Progress' | 'Done';

export interface Task {
  id: number;
  title: string;
  priority: Priority;
  status: Status;
  dueDate: string;
  createdAt: number;
}
