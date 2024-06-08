import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

export const TodoScreen = ({ back, id, select, fuDeleteTodo }) => {
	const deleteTodo = (id) => {
		console.log(id + " find");
		fuDeleteTodo(id);
	};
	return (
		<View style={styles.container}>
			<Text
				style={styles.label}
				key={id}
			>
				{select}
			</Text>

			<View style={styles.container3}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => back()}
				>
					<Text style={styles.buttonText}>Назад</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => deleteTodo(id)}
				>
					<Text style={styles.buttonText}>Удалить</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	error: {
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
		borderColor: "#072b07",
		borderWidth: 2,
		borderRadius: 8,
		elevation: 2,
	},
	buttonText: {
		color: "#e0ffd6",
		fontSize: 15,
		fontWeight: "600",
		textShadowColor: "#e0ffd6",
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
	container: {
		flex: 1,
		backgroundColor: "rgb(15, 15, 15)",
	},
});