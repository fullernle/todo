import React from "react";
import "./todo.css";
import { TiDelete } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, i) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={i}>
      {todo.text}
      <BsCheckCircle
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className="complete-icon"
      />
      <TiDelete className="delete-icon" onClick={() => removeTodo(todo.id)} />
    </div>
  ));
};

export default Todo;
