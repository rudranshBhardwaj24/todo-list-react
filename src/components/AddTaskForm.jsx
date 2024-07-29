import React, { useState } from "react";
import "./AddTaskForm.css";

function AddTaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (taskName.trim() === "") {
      alert("Please provide a task name.");
      return;
    }

    // Create a new task object
    const newTask = { taskName, isCompleted };

    // Call the onAdd function to add the task
    onAdd(newTask);

    // Clear form fields
    setTaskName("");
    setIsCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
