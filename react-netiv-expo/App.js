import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Keyboard,
	TouchableWithoutFeedback,
	StatusBar,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Navbar } from "./src/Navbar";
import { Input } from "./src/Input";
import { TodoList } from "./src/TodoList";
export default function App() {
	const [todo, setTodo] = useState([]);
	const [error, setError] = useState("");
	const addTodo = (text) => {
		if (text) {
			const newTodo = {
				id: Date.now().toString(),
				todo: text,
				done: false,
			};
			setTodo([...todo, newTodo]);
			setError("");
			Keyboard.dismiss();
		} else {
			setError("Введите задачу");
		}
	};
	const deleteTodo = (id) => {
		setTodo(todo.filter((todo) => todo.id !== id));
	};
	const markDone = (id) => {
		setTodo(
			todo.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle="dark-content" />
				<View style={styles.container}>
					<Navbar title="план заданий" />
					<Input
						addTodo={addTodo}
						label="Добавить задачу в список:"
						placeholder="Добавьте задачу"
						error={error}
					/>
					<TodoList
						todo={todo}
						setTodo={setTodo}
						deleteTodo={deleteTodo}
						markDone={markDone}
					/>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
const color = {
	black: "#000000",
	white: "#ffffff",
	red: "#ff0000",
	green: "#00ff00",
	blue: "#0000ff",
	yellow: "#ffff00",
	gray: "#808080",
	darkGray: "#404040",
	lightGray: "#c0c0c0",
	cyan: "#00ffff",
	magenta: "#ff00ff",
	orange: "#ffa500",
	purple: "#800080",
	brown: "#a52a2a",
	clear: "rgba(0,0,0,0)",
	transparent: "rgba(0,0,0,0)",
	darkGrey: "#121212",
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.darkGrey,
	},
	safeArea: {
		flex: 1,
		backgroundColor: "#F5FCFF",
	},
});
