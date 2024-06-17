import React, { useReducer } from "react";
import { ScreenContext } from "./screenContext"; // Убедись, что путь правильный
import { screenReducer } from "./screenReducer";

// Определяем компонент ScreenState, который принимает детей (children) в качестве пропсов.
export const ScreenState = ({ children }) => {
	const initial = { id: null, todo: null };
	const [state, dispatch] = useReducer(screenReducer, initial);

	// Функция для перехода на следующее окно

	return (
		<ScreenContext.Provider
			value={{
				state, // Передаем все состояние
				dispatch, // Передаем функцию dispatch для работы с состоянием
			}}
		>
			{children}
		</ScreenContext.Provider>
	);
};
