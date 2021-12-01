import React, { useState } from "react";
import "./todo.css";
import { TodoForm } from "../index";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <>
      {todos.map((todo, i) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={i}
        >
          {todo.text}
          <BsCheckCircle
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className="complete-icon"
          />
          <FiEdit
            className="edit-icon"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
          <TiDelete
            className="delete-icon"
            onClick={() => removeTodo(todo.id)}
          />
        </div>
      ))}
    </>
  );
};

export default Todo;
