import React, { useReducer, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";
// Определяем компонент TodoState, который принимает детей (children) в качестве пропсов.
export const TodoState = ({ children }) => {
	// Определяем начальное состояние (initialState) с массивом задач (todos).
	const initialState = {
		linkTodo: [],
	};

	const [state, dispatch] = useReducer(todoReducer, initialState);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			try {
				await SplashScreen.preventAutoHideAsync();

				const savedTodo = await AsyncStorage.getItem("linkTodo");
				if (savedTodo !== null) {
					const parsedTodos = JSON.parse(savedTodo);
					dispatch({ type: "LOAD_TODOS", payload: parsedTodos }); // Загружаем данные из локального хранилища
				}
			} catch (e) {
				console.warn(e);
			} finally {
				setIsReady(true);
				await SplashScreen.hideAsync();
			}
		};

		loadResourcesAndDataAsync();
	}, []);

	useEffect(() => {
		if (isReady) {
			const saveTodo = async () => {
				try {
					await AsyncStorage.setItem(
						"linkTodo",
						JSON.stringify(state.linkTodo)
					);
					console.log("В локал сохранено");
				} catch (error) {
					console.error("Ошибка сохранения в локале - ", error);
				}
			};

			saveTodo();
		}
	}, [state.linkTodo, isReady]);

	if (!isReady) {
		return null; // Пока данные не загружены, возвращаем null
	}
	return (
		<TodoContext.Provider
			value={{ linkTodo: state.linkTodo, dispatch: dispatch }}
		>
			{children}
		</TodoContext.Provider>
	);
};
