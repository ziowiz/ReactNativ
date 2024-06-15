import React, { useState, useContext } from "react";
import { TodoContext } from "./context/todo/TodoContext"; // Импортируем контекст TodoContext.
import {
	Keyboard,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

export const Input = ({ placeholder, label }) => {
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState("");
	const context = useContext(TodoContext);

	const FunctionAddTodo = () => {
		if (inputValue) {
			context.dispatch({ type: "ADD_TODO", payload: { todo: inputValue } }); // Обновление payload
			console.log(context.linkTodo);
			setError("");
			setInputValue("");
			Keyboard.dismiss();
		} else {
			setError("Введите задачу");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.container2}>
				<TextInput
					onChangeText={(text) => setInputValue(text)}
					style={styles.input}
					value={inputValue}
					placeholder={placeholder}
					placeholderTextColor="#5f5f5f"
					autoCorrect={false}
					cursorColor="#00ff00"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={FunctionAddTodo}
				>
					<Text style={styles.buttonText}>Добавить</Text>
				</TouchableOpacity>
			</View>
			{error ? <Text style={styles.error}>{error}</Text> : null}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 150,
		flexDirection: "column",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	error: {
		marginTop: 10,
		fontSize: 18,
		fontWeight: "bold",
		color: "#c4c700",
		marginVertical: 10,
	},
	button: {
		width: "23%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#013801",
		borderColor: "#113306",
		borderWidth: 1,
		borderRadius: 8,
		elevation: 2,
	},
	buttonText: {
		color: "#e0ffd6",
		fontSize: 15,
		fontWeight: "600",
		textShadowColor: "#3cb415",
		textShadowRadius: 1,
	},

	container2: {
		width: "100%",
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	label: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#e0ffd6",
		marginVertical: 10,
	},
	input: {
		fontSize: 16,
		padding: 20,
		paddingVertical: 5,
		borderWidth: 1,
		borderColor: "#013801",
		borderRadius: 5,
		width: "75%",
		height: 50,
		color: "#ffffff",
		textShadowColor: "#e0ffd6",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
});
