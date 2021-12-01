import React, { useState } from "react";
import "./todolist.css";
import { TodoForm } from "../index";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const isEmpty = (string) => {
		const substr = string.split("");
    return substr.length === 0 || substr.every((str) => str === " ");
  };

  const addTodo = (todo) => {
    if (!todo.text || isEmpty(todo.text)) {
      return;
    }

    const newTodoList = [todo, ...todoList];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>Today's Todo List!</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};

export default TodoList;
