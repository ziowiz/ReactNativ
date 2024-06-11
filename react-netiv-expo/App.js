import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
	SafeAreaProvider,
	SafeAreaView,
	View,
} from "react-native-safe-area-context";
import { MainScreen } from "./src/screen/MainScreen";
import { TodoScreen } from "./src/screen/TodoScreen";
import { Navbar } from "./src/Navbar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [todoId, setTodoId] = useState(null);
	const [select, setSelect] = useState(null);
	const [selectId, setSelectId] = useState(null);
	const [deleteTodo, setDeleteTodo] = useState(null);
	const [linkTodo, setLinkTodo] = useState(null);
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

	const fuRename = (idKey, newTodo) => {
		console.log(idKey, newTodo);
		setLinkTodo(
			linkTodo.map((todo) =>
				idKey === todo.id ? { ...todo, todo: newTodo } : todo
			)
		);
	};
	const receiveMessage = (id, todo) => {
		setTodoId(id);
		setSelectId(id);
		setSelect(todo);
	};
	const fuLinkTodo = (todo) => {
		setLinkTodo(todo);
	};
	const fuDeleteTodo = (e) => {
		setDeleteTodo(e);
		setTimeout(() => {
			setTodoId(null);
		}, 2);
	};
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle="dark-content" />
				{/* <View> */}
				<Navbar
					title="Список пидорасов"
					style={styles.navbar}
				/>
				{todoId ? (
					<TodoScreen
						style={styles.todoScreen}
						fuDeleteTodo={fuDeleteTodo}
						select={select}
						id={selectId}
						back={() => setTodoId(null)}
						fuRename2={fuRename}
					/>
				) : (
					<MainScreen
						style={styles.mainScreen}
						fuLinkTodo={fuLinkTodo}
						linkTodo={linkTodo}
						sendMessage={receiveMessage}
						deleteTodo={deleteTodo}
					/>
				)}
				{/* </View> */}
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
