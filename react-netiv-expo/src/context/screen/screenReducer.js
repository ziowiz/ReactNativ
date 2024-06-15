export const screenReducer = (state, action) => {
	switch (action.type) {
		case "NEXT_WINDOW":
			return {
				...state,
				id: action.payload.id,
				todo: action.payload.todo,
			};
		case "BACK_WINDOW":
			return {
				...state,
				id: null,
				todo: null,
			};
		default:
			return state;
	}
};
