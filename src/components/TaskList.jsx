import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✧</div>
        <h3>Nothing on your list yet</h3>
        <p>Add a task above and take the first step.</p>
      </div>
    );
  }

  return (
    <ul className="task-list" aria-live="polite">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}