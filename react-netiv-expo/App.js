import React, { useState } from "react";
import { StyleSheet, StatusBar, Keyboard } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MainScreen } from "./src/screen/MainScreen";
import { TodoScreen } from "./src/screen/TodoScreen";
import { Navbar } from "./src/Navbar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [linkTodo, setLinkTodo] = useState([]);
	const [error, setError] = useState("");
	const [idNextWindow, setIdNextWindow] = useState(null);
	const [todoNextWindow, setTodoNextWindow] = useState(null);

	const loadFonts = async () => {
		await Font.loadAsync({
			"Roboto-Bold": require("./assets/font/Roboto-Bold.ttf"),
			"Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
			"Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
		});
	};

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setIsReady(true)}
				onError={(error) => console.log("error", error)}
			/>
		);
	}
	const FunctionAddTodo = (text) => {
		if (text) {
			const newTodo = {
				id: Date.now().toString(),
				todo: text,
				done: false,
			};
			setLinkTodo([...linkTodo, newTodo]);
			setError("");
			Keyboard.dismiss();
		} else {
			setError("Введите задачу");
		}
	};

	const openNextWindow = (id, todo) => {
		setIdNextWindow(id);
		setTodoNextWindow(todo);
	};

	const fuRename = (idKey, newTodo) => {
		setLinkTodo(
			linkTodo.map((linkTodo) =>
				idKey === linkTodo.id ? { ...linkTodo, todo: newTodo } : linkTodo
			)
		);
	};

	const fuMarkDone = (id) => {
		setLinkTodo(
			linkTodo.map((linkTodo) =>
				linkTodo.id === id ? { ...linkTodo, done: !linkTodo.done } : linkTodo
			)
		);
	};
	const sendMessage = (id, todo) => {
		props.sendMessage(id, todo);
	};
	const fuDeleteTodo = (id) => {
		setLinkTodo(linkTodo.filter((linkTodo) => linkTodo.id !== id));
	};
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle="white-content" />

				<Navbar
					title="Список дел на сегодня:"
					style={styles.navbar}
				/>
				{idNextWindow ? (
					<TodoScreen
						style={styles.todoScreen}
						deleteTodo={fuDeleteTodo}
						todoNextWindow={todoNextWindow}
						idNextWindow={idNextWindow}
						back={() => setIdNextWindow(null)}
						fuRename2={fuRename}
					/>
				) : (
					<MainScreen
						style={styles.mainScreen}
						addNewTodo={FunctionAddTodo}
						linkTodo={linkTodo}
						markDone={fuMarkDone}
						deleteTodo={fuDeleteTodo}
						error={error}
						openNextWindow={openNextWindow}
					/>
				)}
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	navbar: {
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
