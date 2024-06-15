import React, { useState, useEffect, useContext } from "react";
import {
	View,
	Text,
	TextInput,
	Modal,
	StyleSheet,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TodoContext } from "../context/todo/TodoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const ModalView = ({ visible, onCancel, select, idKey, back }) => {
	const [newTodo, setNewTodo] = useState(select);
	const context = useContext(TodoContext);
	const context_2 = useContext(ScreenContext);

	const [inputHeight, setInputHeight] = useState(250);
	const updateInputHeight = () => {
		const { width, height } = Dimensions.get("window");
		if (height > width) {
			setInputHeight(250); // Портретный режим
		} else {
			setInputHeight(130); // Ландшафтный режим
		}
	};

	useEffect(() => {
		updateInputHeight(); // Устанавливаем начальное состояние
		const subscription = Dimensions.addEventListener(
			"change",
			updateInputHeight
		);
		return () => subscription?.remove(); // Удаляем слушатель при размонтировании
	}, [Dimensions.get("window")]);
	const fuRename = () => {
		console.log(idKey, newTodo);
		context.dispatch({
			type: "RENAME_TODO",
			payload: { id: idKey, todo: newTodo },
		});
		console.log("back start");
		context_2.dispatch({ type: "BACK_WINDOW", payload: null });
	};

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
						style={[styles.input, { height: inputHeight }]}
						value={newTodo}
						onChangeText={(text) => {
							setNewTodo(text);
						}}
					></TextInput>

					<View style={styles.container2}>
						<TouchableOpacity
							style={styles.button}
							onPress={onCancel}
						>
							<MaterialCommunityIcons
								name="cancel"
								style={styles.buttonText}
							/>
							<Text style={styles.buttonText}>Отмена</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={fuRename}
						>
							<FontAwesome
								name="save"
								style={styles.buttonText}
							/>
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
		width: "80%",
		height: 250,
		borderColor: "green", // Цвет границы
		borderWidth: 1, // Толщина границы
		padding: 10, // Внутренние отступы
		marginBottom: 20, // Отступ снизу
		fontSize: 18, // Размер шрифта
		borderRadius: 10, // Радиус скругления углов
		color: "#e0ffd6", // Цвет текста
		backgroundColor: "rgba(15, 15, 15, 0.93)",
		textAlignVertical: "top",
	},

	container2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
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
		backgroundColor: "rgba(0, 0, 0, 0.84)",
		padding: 25,
		paddingBottom: 100,
	},
});
