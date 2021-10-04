import { useState, useEffect } from "react";
import axios from "axios";

export default function useTodos(baseTodos) {
	const [todos, setTodos] = useState(baseTodos || {});

	useEffect(() => {
		axios.get("/api/todos").then((res) => {
			setTodos(res.data);
		});
	}, []);

	const completeTodo = (id) => {
		const updatedTodos = { ...todos };
		const updatedTodoItem = { ...todos[id] };

		updatedTodoItem.isComplete = true;

		updatedTodos[id] = updatedTodoItem;

		axios.put(`/api/todos/${id}`).then((res) => {
			setTodos(updatedTodos);
		});
	};

	const deleteTodo = (id) => {
		const updatedTodos = { ...todos };

		delete updatedTodos[id];

		axios.delete(`/api/todos/${id}`).then((res) => {
			setTodos(updatedTodos);
		});
	};

	const createTodo = (formData) => {
		const newTodo = {
			id: Math.floor(Math.random() * 3030303),
			name: formData.name,
			description: formData.description,
			isComplete: false,
		};

		const updatedTodos = { ...todos };
		updatedTodos[newTodo.id] = newTodo;

		axios.post("/api/todos", { todo: newTodo }).then((res) => {
			setTodos(updatedTodos);
		});
	};

	return { todos, completeTodo, deleteTodo, createTodo };
}
