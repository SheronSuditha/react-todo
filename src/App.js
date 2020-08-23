import React, { useState, useRef } from 'react';
import './App.css';

let start = Math.floor(Math.random() * Math.floor(100));

function App() {
	const [ todos, settodos ] = useState([]);
	const entered_todo = useRef(null);
	const todoItem = useRef(null);
	const handle_todoAdd = (e) => {
		e.preventDefault();

		const todo = entered_todo.current.value;
		settodos([ ...todos, todo ]);
	};

	const handleAllDone = (e) => {
		e.preventDefault();
	};

	return (
		<div className="content">
			<div className="header">
				<h1>Got something in mind?</h1>
				<label>Enter your todo!</label>
				<div className="todo-input">
					<input type="text" placeholder="Your Todo" ref={entered_todo} /> <br />
					<button onClick={handle_todoAdd}>
						<strong>Drop it!</strong>
					</button>
				</div>
			</div>

			<div className="todo-content">
				{todos.map((t) => (
					<div className="todo" ref={todoItem}>
						<h1>{t}</h1>
						<div className="control">
							<button style={{ background: 'red' }} onClick={handleAllDone}>
								<strong>All done!</strong>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
