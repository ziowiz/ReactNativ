import React, { useReducer } from "react"; // Импортируем React и хук useReducer из библиотеки React.
import { TodoContext } from "./TodoContext"; // Импортируем контекст TodoContext.
import { todoReducer } from "./TodoReducer"; // Импортируем редюсер todoReducer.

// Определяем компонент TodoState, который принимает детей (children) в качестве пропсов.
export const TodoState = ({ children }) => {
	// Определяем начальное состояние (initialState) с массивом задач (todos).
	const initialState = {
		linkTodo: [{ id: 111, todo: "state => initialState ", done: false }],
	};

	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<TodoContext.Provider
			value={{ linkTodo: state.linkTodo, dispatch: dispatch }}
		>
			{children}
		</TodoContext.Provider>
	);
};
