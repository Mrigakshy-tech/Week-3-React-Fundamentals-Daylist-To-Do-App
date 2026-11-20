import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AddTaskForm from "./components/AddTaskForm.jsx";
import FilterTabs from "./components/FilterTabs.jsx";
import TaskList from "./components/TaskList.jsx";

const STORAGE_KEY = "daylist.tasks.v1";

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(
      (task) =>
        task &&
        typeof task.id === "string" &&
        typeof task.text === "string" &&
        typeof task.completed === "boolean"
    );
  } catch (error) {
    console.warn("Could not read saved tasks:", error);
    return [];
  }
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [storageWarning, setStorageWarning] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      setStorageWarning("");
    } catch (error) {
      console.error("Could not save tasks:", error);
      setStorageWarning("Browser storage is unavailable. Your changes may not persist.");
    }
  }, [tasks]);

  useEffect(() => {
    function handleStorage(event) {
      if (event.key === STORAGE_KEY) {
        setTasks(loadTasks());
      }
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;

  const counts = {
    all: tasks.length,
    active: activeCount,
    completed: completedCount,
  };

  const visibleTasks = useMemo(() => {
    if (currentFilter === "active") return tasks.filter((task) => !task.completed);
    if (currentFilter === "completed") return tasks.filter((task) => task.completed);
    return tasks;
  }, [tasks, currentFilter]);

  function addTask(text) {
    const newTask = {
      id: createId(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((previous) => [newTask, ...previous]);
    setCurrentFilter("all");
  }

  function toggleTask(id) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previous) => previous.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((previous) => previous.filter((task) => !task.completed));
  }

  return (
    <main className="app-shell" id="top">
      <Header />
      <Hero />

      <section className="workspace" aria-label="Task manager">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STAY ON TRACK</p>
            <h2>Your tasks</h2>
          </div>
          <div className="progress-pill">
            <span className="progress-dot" />
            <span>{activeCount} {activeCount === 1 ? "task" : "tasks"} left</span>
          </div>
        </div>

        <AddTaskForm onAdd={addTask} />

        <FilterTabs
          currentFilter={currentFilter}
          counts={counts}
          onChange={setCurrentFilter}
          onClearCompleted={clearCompleted}
          hasCompleted={completedCount > 0}
        />

        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <footer className="list-footer">
          <span><span className="save-indicator" /> Saved automatically on this device</span>
          <span>{tasks.length} {tasks.length === 1 ? "item" : "items"}</span>
        </footer>
        {storageWarning && <p className="storage-warning" role="status">{storageWarning}</p>}
      </section>

      <p className="page-note">Small steps. Steady progress. <span>✦</span></p>
    </main>
  );
}