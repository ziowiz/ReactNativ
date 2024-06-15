import React, { useState, useEffect, useContext } from "react"; // Импортируем необходимые хуки из React.
import { View, StyleSheet, StatusBar, Keyboard } from "react-native"; // Импортируем компоненты из React Native.
import { Navbar } from "./Navbar"; // Импортируем компонент Navbar.
import { MainScreen } from "./screen/MainScreen"; // Импортируем компонент MainScreen.
import { TodoScreen } from "./screen/TodoScreen"; // Импортируем компонент TodoScreen.
import { ScreenContext } from "./context/screen/screenContext"; // Импортируем контекст ScreenContext.
import { TodoContext } from "./context/todo/TodoContext"; // Импортируем контекст TodoContext.
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Импортируем компоненты для безопасной области.
import * as Font from "expo-font"; // Импортируем библиотеку для работы со шрифтами.

import * as SplashScreen from "expo-splash-screen"; // Импортируем библиотеку для работы со splash screen.
import AsyncStorage from "@react-native-async-storage/async-storage"; // Импортируем библиотеку для работы с асинхронным хранилищем.

export const MainLayout = () => {
	// Определяем состояние isReady для отслеживания готовности приложения.
	const [isReady, setIsReady] = useState(false);
	const [error, setError] = useState("");
	const [idNextWindow, setIdNextWindow] = useState(null);
	const [todoNextWindow, setTodoNextWindow] = useState(null);
	const context = useContext(TodoContext);
	const context_2 = useContext(ScreenContext);
	// useEffect(() => {
	// 	const loadResourcesAndDataAsync = async () => {
	// 		try {
	// 			await SplashScreen.preventAutoHideAsync();

	// 			await Font.loadAsync({
	// 				"Roboto-Bold": require("./assets/font/Roboto-Bold.ttf"),
	// 				"Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
	// 				"Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
	// 			});

	// 			const savedTodo = await AsyncStorage.getItem("linkTodo");
	// 			if (savedTodo !== null) {
	// 				setLinkTodo(JSON.parse(savedTodo));
	// 			}
	// 		} catch (e) {
	// 			console.warn(e);
	// 		} finally {
	// 			setIsReady(true);
	// 			await SplashScreen.hideAsync();
	// 		}
	// 	};

	// 	loadResourcesAndDataAsync();
	// }, []);

	// // Сохранение данных в AsyncStorage при изменении linkTodo
	// useEffect(() => {
	// 	if (isReady) {
	// 		const saveTodo = async () => {
	// 			try {
	// 				await AsyncStorage.setItem("linkTodo", JSON.stringify(linkTodo));
	// 				console.log("В локал сохранено");
	// 			} catch (error) {
	// 				console.error("Ошибка сохранения в локале - ", error);
	// 			}
	// 		};

	// 		saveTodo();
	// 	}
	// }, [linkTodo, isReady]);
	const nextWindow = (id, todo) => {
		context_2.dispatch({ type: "NEXT_WINDOW", payload: { id, todo } });
	};

	const backWindow = () => {
		context_2.dispatch({ type: "BACK_WINDOW", payload: null });
	};
	const FunctionAddTodo = (text) => {
		if (text) {
			context.dispatch({ type: "ADD_TODO", payload: { text } });
			setError("");
			Keyboard.dismiss();
		} else {
			setError("Введите задачу");
		}
	};

	const fuRename = (idKey, newTodo) => {
		context.dispatch({ type: "RENAME_TODO", payload: { idKey, newTodo } });
	};

	const fuMarkDone = (id) => {
		context.dispatch({ type: "MARK_TODO", payload: { id } });
	};

	const fuDeleteTodo = (id) => {
		context.dispatch({ type: "DELETE_TODO", payload: { id } });
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle="white-content" />
				<Navbar
					title="Список дел на сегодня:"
					style={styles.navbar}
				/>
				<View style={styles.container}>
					{context_2.state.id ? (
						<TodoScreen
							style={styles.todoScreen}
							deleteTodo={fuDeleteTodo}
							todoNextWindow={context_2.state.todo}
							idNextWindow={context_2.state.id}
							back={backWindow}
							fuRename2={fuRename}
						/>
					) : (
						<MainScreen
							style={styles.mainScreen}
							addNewTodo={FunctionAddTodo}
							linkTodo={context.linkTodo}
							markDone={fuMarkDone}
							deleteTodo={fuDeleteTodo}
							error={error}
							openNextWindow={nextWindow}
						/>
					)}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
const styles = StyleSheet.create({
	navbar: {
		flex: 1,
		backgroundColor: "#404040",
	},
	container: {
		flex: 1,
		backgroundColor: "#404040",
	},
	todoScreen: {
		flex: 1,
		backgroundColor: "#404040",
	},
	mainScreen: {
		flex: 1,
		backgroundColor: "#404040",
	},
	container: {
		flex: 1,
		backgroundColor: "#404040",
	},
	safeArea: {
		flex: 1,
		backgroundColor: "#000000",
		color: "#ffffff",
	},
});
