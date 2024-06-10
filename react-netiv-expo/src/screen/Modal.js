import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Modal,
	StyleSheet,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";

export const ModalView = ({ visible, onCancel, select, idKey, fuRename }) => {
	const [newTodo, setNewTodo] = useState(select);

	return (
		<Modal
			visible={visible}
			transparent={true}
			animationType="slide"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<TextInput
						multiline={true}
						style={styles.input}
						value={newTodo}
						onChangeText={(text) => {
							setNewTodo(text);
						}}
					></TextInput>

					<View style={styles.container2}>
						<TouchableOpacity
							style={styles.button}
							onPress={onCancel} // Исправлено: вызываем onCancel
						>
							<Text style={styles.buttonText}>Отмена</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => fuRename(idKey, newTodo)}
						>
							<Text style={styles.buttonText}>Сохранить</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};
const styles = StyleSheet.create({
	input: {
		width: "80%", // Задает ширину инпута 80% от ширины контейнера
		height: 250, // Высота инпута
		borderColor: "green", // Цвет границы
		borderWidth: 1, // Толщина границы
		padding: 10, // Внутренние отступы
		marginBottom: 20, // Отступ снизу
		fontSize: 18, // Размер шрифта
		borderRadius: 10, // Радиус скругления углов
		color: "#e0ffd6", // Цвет текста
		textAlignVertical: "top", // Выравнивание текста по верхнему краю
	},
	container2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%", // Обеспечивает, что контейнер займет всю ширину экрана
		marginTop: 30,
	},
	button: {
		width: "40%",
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
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "rgba(0, 0, 0, 0.7)",
		padding: 25,
	},
});
