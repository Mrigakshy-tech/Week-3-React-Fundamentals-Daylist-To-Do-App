export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? " completed" : ""}`}>
      <button
        className="task-check"
        type="button"
        aria-label={task.completed ? `Mark ${task.text} as active` : `Mark ${task.text} as completed`}
        aria-pressed={task.completed}
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? "✓" : ""}
      </button>
      <span className="task-text">{task.text}</span>
      <span className="task-meta">{task.completed ? "Completed" : "In progress"}</span>
      <button
        className="delete-button"
        type="button"
        aria-label={`Delete ${task.text}`}
        title="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ×
      </button>
    </li>
  );
}