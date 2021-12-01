import React, { useState } from 'react'
import "./todoform.css";

const TodoForm = () => {
	const [ input, setInput ] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setInput('');
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input  type="text" 
							className="todo-input"
							placeholder="Add a todo!" 
							value={input}
							name='text'
							onChange={handleChange}
			/>
			<button className="todo-button">Add</button>
		</form>
	)
}

export default TodoForm;
