# Task & Insights Dashboard

## Task & Insights Dashboard
A Task Management Dashboard built with React + TypeScript, demonstrating component-based architecture, task CRUD, filtering, sorting, analytics, and localStorage persistence.
Completed as a frontend assignment for an interview.

---

## 🧰 Tech Stack

- **React** (functional components, hooks)  
- **TypeScript** (strong typing, interfaces)  
- **HTML & CSS** (flexbox, CSS grid, responsive design)  
- **LocalStorage** (data persistence)  

> ⚠️ No UI libraries (Material UI, Bootstrap, Tailwind, etc.) were used.

---

## Folder responsibilities:

- common/ – Reusable components (Button, InputField, SelectField)
- task/ – Task-related components (TaskForm, TaskList, TaskItem)
- filter/ – Task filtering component (FilterBar)
- analytics/ – Analytics components (AnalyticsCard)
- types/ – TypeScript interfaces
- utils/ – Storage helpers for localStorage
  
---

## ⚙ Features

### Task Management
- Add new tasks (Title, Priority, Status, Due Date)  
- Edit task status (Todo, In Progress, Done)  
- Delete tasks  

### Filtering & Sorting
- Filter by **Status** and **Priority**  
- Sort by **Due Date** ascending  

### Analytics Dashboard
- Total tasks  
- Completed tasks  
- Overdue tasks  
- Completion percentage  
- Most common priority  

### Persistence
- Tasks stored in **localStorage**  
- Handles page reloads gracefully  

---

## 🎨 UI & Design
- Clean, simple, professional UI  
- Responsive for **desktop and mobile**  
- Colors:
  - Blue (`#2563eb`) for buttons and highlights  
  - Green (`#16a34a`) for success/completed  
  - Red (`#dc2626`) for delete  
  - Neutral background (`#f5f7fb`)  

---

## 📦 Getting Started

### Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

---

## 🚀 Deployment

Live demo deployed on Netlify:
[Replace with your Netlify URL]

---

## 🧠 Code Highlights

- Component-based design with single responsibility components
- Controlled forms with reusable InputField & SelectField
- Derived state for filtered tasks and analytics (no redundant state)
- TypeScript interfaces for strong typing and maintainability
- useMemo for performance-friendly filtering and sorting

---

## 📚 Usage

- Add a task using the form
- Filter tasks using status/priority dropdowns
- Change task status inline (Todo → Done)
- Delete a task with the red Delete button
- Observe analytics update automatically
