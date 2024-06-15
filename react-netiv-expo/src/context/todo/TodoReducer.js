// Экспортируем функцию-редюсер, которая принимает два аргумента: текущее состояние (state) и действие (action).
export const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const newTodo = {
				id: Date.now().toString(),
				todo: action.payload.todo,
				done: false,
			};
			return {
				...state,
				linkTodo: [...state.linkTodo, newTodo],
			};

		case "DELETE_TODO":
			return {
				...state,
				linkTodo: state.linkTodo.filter(
					(todo) => todo.id !== action.payload.id
				),
			};
		case "RENAME_TODO":
			return {
				...state,
				linkTodo: state.linkTodo.map((todo) =>
					action.payload.id === todo.id
						? { ...todo, todo: action.payload.todo }
						: todo
				),
			};
		case "MARK_TODO":
			return {
				...state,
				linkTodo: state.linkTodo.map((todo) =>
					todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
				),
			};
		default:
			return state;
	}
};
