import React, { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addTask = (newTask) => {
    fetch("http://localhost:8080/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((addedTask) => {
        setTodoList((prevList) => [...prevList, addedTask]);
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:8080/api/todo/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="card-view">
      <AddTaskForm onAdd={addTask} />
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TaskCard key={todo.id} todo={todo} onDelete={deleteTask} />
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}

export default App;
