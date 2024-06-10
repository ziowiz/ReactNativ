import React from "react";
import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
export const Input = (props) => {
	const [inputValue, setInputValue] = useState("");

	const handleAddTodo = () => {
		props.addTodo(inputValue);
		setInputValue(""); // Очистка поля ввода после добавления
	};
	return (
		<View style={styles.container2}>
			<Text style={styles.label}>{props.label}</Text>
			<View style={styles.container3}>
				<TextInput
					onChangeText={(text) => setInputValue(text)}
					style={styles.input}
					value={inputValue}
					placeholder={props.placeholder}
					placeholderTextColor="#5f5f5f"
					autoCorrect={false}
					cursorColor="#00ff00"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleAddTodo}
				>
					<Text style={styles.buttonText}>Добавить</Text>
				</TouchableOpacity>
			</View>
			{props.error ? <text style={styles.error}>{props.error}</text> : null}
		</View>
	);
};
const styles = StyleSheet.create({
	error: {
		marginTop: 10,
		fontSize: 20,
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
		borderColor: "#e0ffd6",
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
		flexDirection: "colum",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	container3: {
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
