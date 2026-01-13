import type { Task, Status } from '../../types/task';
import Button from '../common/Button';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: (task: Task) => void;
}

function TaskItem({ task, onDelete, onUpdate }: TaskItemProps) {
  const handleStatusChange = (value: Status) => {
    onUpdate({
      ...task,
      status: value,
    });
  };

  return (
    <li className="task-item">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>Priority: {task.priority}</p>
        <p>Due: {task.dueDate}</p>

        <label>
          Status:
          <select
            value={task.status}
            onChange={e =>
              handleStatusChange(e.target.value as Status)
            }
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </div>

      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </li>
  );
}

export default TaskItem;
