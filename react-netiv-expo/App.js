import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { Input } from "./src/Input";
import { TodoList } from "./src/TodoList";
export default function App() {
	const [todo, setTodo] = useState([]);
	const addTodo = (text) => {
		const newTodo = {
			id: Date.now().toString(),
			todo: text,
			done: false,
		};
		setTodo([...todo, newTodo]);
	};
	const deleteTodo = (id) => {
		setTodo(todo.filter((todo) => todo.id !== id));
	};

	return (
		<View style={styles.container}>
			<Navbar title="план заданий" />
			<Input
				addTodo={addTodo}
				label="Добавить задачу в список:"
				placeholder="Добавьте задачу"
			/>
			<TodoList
				todo={todo}
				setTodo={setTodo}
				deleteTodo={deleteTodo}
			/>
		</View>
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
});
