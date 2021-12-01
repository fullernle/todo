import React, { useState }  from 'react'
import "./todolist.css";
import { TodoForm } from "../index";

const TodoList = () => {
	const [todoList, setTodoList] = useState([]);

	return (
		<div>
			<h1>Today's Todo List!</h1>
			<TodoForm /> 
		</div>
	)
}

export default TodoList
