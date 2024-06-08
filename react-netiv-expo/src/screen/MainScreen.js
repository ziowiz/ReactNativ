import React, { useState, useEffect } from "react";
import { View, StyleSheet, Keyboard } from "react-native";

import { Input } from "../Input";
import { TodoList } from "../TodoList";
export const MainScreen = (props) => {
	const [error, setError] = useState("");
	const [todo, setTodo] = useState([
		{
			id: "1717711675878",
			todo: "Тест задач: 01",
			done: false,
		},
		{
			id: "1717711675879",
			todo: "Тест задач: 02",
			done: true,
		},
		{
			id: "1717711675880",
			todo: "Тест задач: 03",
			done: false,
		},
		{
			id: "1717711675881",
			todo: "Тест задач: 04",
			done: false,
		},
		{
			id: "1717711675882",
			todo: "Тест задач: 05",
			done: true,
		},
		{
			id: "1717711675883",
			todo: "Тест задач: 06",
			done: false,
		},
		{
			id: "1717711675884",
			todo: "Тест задач: 07",
			done: true,
		},
		{
			id: "1717711675885",
			todo: "Тест задач: 08",
			done: true,
		},
		{
			id: "1717711675886",
			todo: "Тест задач: 09",
			done: false,
		},
		{
			id: "1717711675887",
			todo: "Тест задач: 10",
			done: false,
		},
		{
			id: "1717711675888",
			todo: "Тест задач: 11",
			done: true,
		},
		{
			id: "1717711675889",
			todo: "Тест задач: 12",
			done: false,
		},

		{
			id: "2717711675878",
			todo: "Тест задач: 13",
			done: false,
		},
		{
			id: "2717711675879",
			todo: "Тест задач: 14",
			done: true,
		},
		{
			id: "2717711675880",
			todo: "Тест задач: 15",
			done: true,
		},
		{
			id: "2717711675881",
			todo: "Тест задач: 16",
			done: false,
		},
		{
			id: "2717711675882",
			todo: "Тест задач: 17",
			done: false,
		},
		{
			id: "2717711675883",
			todo: "Тест задач: 18",
			done: true,
		},
		{
			id: "2717711675884",
			todo: "Тест задач: 19",
			done: false,
		},
		{
			id: "2717711675885",
			todo: "Тест задач: 20",
			done: true,
		},
		{
			id: "2717711675886",
			todo: "Тест задач: 21",
			done: true,
		},
		{
			id: "2717711675887",
			todo: "Тест задач: 22",
			done: true,
		},
		{
			id: "2717711675888",
			todo: "Тест задач: 23",
			done: false,
		},
		{
			id: "2717711675889",
			todo: "Тест задач: 24",
			done: true,
		},
	]);
	useEffect(() => {
		if (props.deleteTodo) {
			console.log(props.deleteTodo + "useEffect");
			deleteTodo(props.deleteTodo);
		}
	}, [props.deleteTodo]);
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
				addTodo={addTodo}
				label="Добавьте пидораса в список:"
				placeholder="Добавьте пидора"
				error={error}
			/>
			<TodoList
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
	safeArea: {
		flex: 1,
		backgroundColor: "#F5FCFF",
	},
});
