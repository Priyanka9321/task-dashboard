import { useEffect, useMemo, useState } from "react";

import TaskForm from "./components/task/TaskForm";
import TaskList from "./components/task/TaskList";
import FilterBar from "./components/filter/FilterBar";
import AnalyticsCard from "./components/analytics/AnalyticsCard";

import type { Task } from "./types/task";
import { loadTasks, saveTasks } from "./utils/storage";

import "./styles/form.css";
import "./styles/task.css";
import "./styles/layout.css";

function App() {
  // ----------------------
  // Core State
  // ----------------------
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  // ----------------------
  // Filter State
  // ----------------------
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  // ----------------------
  // Persistence
  // ----------------------
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // ----------------------
  // CRUD Handlers
  // ----------------------
  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // ----------------------
  // Filtering & Sorting
  // ----------------------
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    if (statusFilter) {
      result = result.filter((task) => task.status === statusFilter);
    }

    if (priorityFilter) {
      result = result.filter((task) => task.priority === priorityFilter);
    }

    result.sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );

    return result;
  }, [tasks, statusFilter, priorityFilter]);

  // ----------------------
  // Analytics
  // ----------------------
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.status === "Done").length;

  const overdueTasks = tasks.filter((task) => {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    return dueDate < today && task.status !== "Done";
  }).length;

  const completionPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const priorityCount: Record<string, number> = {};
  tasks.forEach((task) => {
    priorityCount[task.priority] = (priorityCount[task.priority] || 0) + 1;
  });

  const mostCommonPriority =
    Object.keys(priorityCount).length === 0
      ? "N/A"
      : Object.keys(priorityCount).reduce((a, b) =>
          priorityCount[a] > priorityCount[b] ? a : b
        );

  // ----------------------
  // Render
  // ----------------------
  return (
    <div className="app-container">
      <h1>Task & Insights Dashboard</h1>

      {/* Analytics */}
      <section className="analytics">
        <AnalyticsCard label="Total Tasks" value={totalTasks} />
        <AnalyticsCard label="Completed Tasks" value={completedTasks} />
        <AnalyticsCard label="Overdue Tasks" value={overdueTasks} />
        <AnalyticsCard
          label="Completion %"
          value={`${completionPercentage}%`}
        />
        <AnalyticsCard
          label="Most Common Priority"
          value={mostCommonPriority}
        />
      </section>

      {/* Task Form */}
      <TaskForm onAddTask={addTask} />

      {/* Filters */}
      <FilterBar
        status={statusFilter}
        priority={priorityFilter}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
      />

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </div>
  );
}

export default App;
