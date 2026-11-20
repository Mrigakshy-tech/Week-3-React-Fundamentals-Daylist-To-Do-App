import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [hint, setHint] = useState("Press Enter to quickly add a task.");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanText = text.trim();

    if (!cleanText) {
      setHint("Please enter a task before adding it.");
      return;
    }

    onAdd(cleanText);
    setText("");
    setHint("Press Enter to quickly add a task.");
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="taskInput">Enter a new task</label>
        <span className="input-plus" aria-hidden="true">＋</span>
        <input
          id="taskInput"
          type="text"
          maxLength={120}
          placeholder="What needs to get done?"
          autoComplete="off"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="add-button" type="submit">
          <span aria-hidden="true">＋</span> Add task
        </button>
      </form>
      <p className="input-hint" aria-live="polite">{hint}</p>
    </>
  );
}