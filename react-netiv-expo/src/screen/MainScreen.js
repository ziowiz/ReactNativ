import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../Input";
import { TodoList } from "../TodoList";
export const MainScreen = ({ openNextWindow }) => {
	return (
		<View style={styles.container}>
			<Input
				style={styles.Input}
				label="Добавить новую задачу:"
				placeholder="Добавить..."
			/>
			<TodoList
				style={styles.Input}
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
