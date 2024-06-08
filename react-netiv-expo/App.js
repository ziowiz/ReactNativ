import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MainScreen } from "./src/screen/MainScreen";
import { TodoScreen } from "./src/screen/TodoScreen";

import { Navbar } from "./src/Navbar";
export default function App() {
	const [todoId, setTodoId] = useState(null);
	const [select, setSelect] = useState(null);
	const [selectId, setSelectId] = useState(null);
	const [deleteTodo, setDeleteTodo] = useState(null);
	const receiveMessage = (id, todo) => {
		setTodoId(id);
		setSelectId(id);
		setSelect(todo);
	};
	const fuDeleteTodo = (e) => {
		console.log(e + " app");
		setDeleteTodo(e);
		setTimeout(() => {
			setTodoId(null);
		}, 2);
	};
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle="dark-content" />
				<Navbar title="Список пидорасов" />
				{todoId ? (
					<TodoScreen
						fuDeleteTodo={fuDeleteTodo}
						select={select}
						id={selectId}
						back={() => setTodoId(null)}
					/>
				) : (
					<MainScreen
						sendMessage={receiveMessage}
						deleteTodo={deleteTodo}
					/>
				)}
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#404040",
	},
	safeArea: {
		flex: 1,
		backgroundColor: "#F5FCFF",
	},
});
