import React, { useState } from 'react'
import "./todoform.css";

const TodoForm = () => {
	const [ input, setInput ] = useState('');
	return (
		<form className="todo-form">
			<input  type="text" 
							className="todo-input"
							placeholder="Add a todo!" 
							value={input}
							name='text'
			/>
			<button className="todo-button">Add</button>
		</form>
	)
}

export default TodoForm;
