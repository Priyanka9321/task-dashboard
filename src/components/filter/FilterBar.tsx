import type { ChangeEvent } from 'react';
import SelectField from '../common/SelectField';

interface FilterBarProps {
  status: string;
  priority: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

function FilterBar({
  status,
  priority,
  onStatusChange,
  onPriorityChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <SelectField
        label="Filter by Status"
        name="statusFilter"
        value={status}
        options={[
          { label: 'All', value: '' },
          { label: 'Todo', value: 'Todo' },
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Done', value: 'Done' },
        ]}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onStatusChange(e.target.value)
        }
      />

      <SelectField
        label="Filter by Priority"
        name="priorityFilter"
        value={priority}
        options={[
          { label: 'All', value: '' },
          { label: 'Low', value: 'Low' },
          { label: 'Medium', value: 'Medium' },
          { label: 'High', value: 'High' },
        ]}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onPriorityChange(e.target.value)
        }
      />
    </div>
  );
}

export default FilterBar;
