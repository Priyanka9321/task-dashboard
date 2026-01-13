import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Task, Priority, Status } from '../../types/task';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import Button from '../common/Button';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [status, setStatus] = useState<Status>('Todo');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !dueDate) {
      alert('Title and Due Date are required');
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      priority,
      status,
      dueDate,
      createdAt: Date.now(),
    };

    onAddTask(newTask);

    // Reset form
    setTitle('');
    setPriority('Medium');
    setStatus('Todo');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Title"
        name="title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        required
      />

      <SelectField
        label="Priority"
        name="priority"
        value={priority}
        options={[
          { label: 'Low', value: 'Low' },
          { label: 'Medium', value: 'Medium' },
          { label: 'High', value: 'High' },
        ]}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setPriority(e.target.value as Priority)
        }
      />

      <SelectField
        label="Status"
        name="status"
        value={status}
        options={[
          { label: 'Todo', value: 'Todo' },
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Done', value: 'Done' },
        ]}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setStatus(e.target.value as Status)
        }
      />

      <InputField
        label="Due Date"
        name="dueDate"
        type="date"
        value={dueDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDueDate(e.target.value)
        }
        required
      />

      <Button type="submit">Add Task</Button>
    </form>
  );
}

export default TaskForm;
