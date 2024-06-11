import React, { useState, useEffect } from "react";
import { View, StyleSheet, Keyboard, Image } from "react-native";
import { Input } from "../Input";
import { TodoList } from "../TodoList";
export const MainScreen = (props) => {
	const [error, setError] = useState("");

	const [todo, setTodo] = useState(
		props.linkTodo
			? props.linkTodo
			: [
					{
						id: "1717711675878",
						todo: "Пидорасы везде",
						done: false,
					},
					{
						id: "1717711675879",
						todo: "Я воняю говной",
						done: true,
					},
					{
						id: "1717711675880",
						todo: "Хочу на море и пиво",
						done: false,
					},
					{
						id: "1717711675881",
						todo: "Вот бы соснуть хуй",
						done: false,
					},
			  ]
	);

	useEffect(() => {
		if (props.deleteTodo) {
			deleteTodo(props.deleteTodo);
		}
	}, [props.deleteTodo]);
	useEffect(() => {
		props.fuLinkTodo(todo);
	}, [todo]);
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
	const sendMessage = (id, todo) => {
		props.sendMessage(id, todo);
	};
	return (
		<View style={styles.container}>
			<Input
				style={styles.Input}
				addTodo={addTodo}
				label="Добавить новую задачу:"
				placeholder="Добавить..."
				error={error}
			/>
			<TodoList
				style={styles.Input}
				sendMessage={sendMessage}
				todo={todo}
				setTodo={setTodo}
				deleteTodo={deleteTodo}
				markDone={markDone}
			/>
		</View>
	);
};
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
	Input: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 10,
		paddingHorizontal: 10,
	},
});
