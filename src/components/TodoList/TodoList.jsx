import React, { useState } from "react";
import "./todolist.css";
import { TodoForm, Todo } from "../index";

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

  const completeTodo = (id) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    });

    setTodoList(updatedList);
  };

  const removeTodo = (id) => {
    const removedList = [...todoList].filter((todo) => todo.id !== id);

    setTodoList(removedList);
  };

  return (
    <div>
      <h1>Today's Todo List!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoList;
