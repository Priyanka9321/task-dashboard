import type { Task } from '../../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onUpdateTask: (task: Task) => void;
}

function TaskList({
  tasks,
  onDeleteTask,
  onUpdateTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks added yet.</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onUpdate={onUpdateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
