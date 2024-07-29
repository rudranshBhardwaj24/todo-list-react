import React from "react";
import "./TaskCard.css"; // Import card-specific styles if needed

function TaskCard({ todo, onDelete }) {
  return (
    <div className="card">
      <h3>{todo.taskName}</h3>
      <p>Status: {todo.isCompleted ? "Completed" : "Pending"}</p>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
