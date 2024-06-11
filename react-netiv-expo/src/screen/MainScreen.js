import React, { useState, useEffect } from "react";
import { View, StyleSheet, Keyboard, Image } from "react-native";
import { Input } from "../Input";
import { TodoList } from "../TodoList";
export const MainScreen = ({
	addNewTodo,
	error,
	linkTodo,
	deleteTodo,
	markDone,
	openNextWindow,
}) => {
	return (
		<View style={styles.container}>
			<Input
				style={styles.Input}
				addNewTodo={addNewTodo}
				label="Добавить новую задачу:"
				placeholder="Добавить..."
				error={error}
			/>
			<TodoList
				style={styles.Input}
				linkTodo={linkTodo}
				deleteTodo={deleteTodo}
				markDone={markDone}
				openNextWindow={openNextWindow}
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
