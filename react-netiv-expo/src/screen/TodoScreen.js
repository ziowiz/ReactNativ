import React from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import { ModalView } from "./Modal";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TodoContext } from "../context/todo/TodoContext";
import { ScreenContext } from "../context/screen/screenContext";
export const TodoScreen = ({ back, idNextWindow, todoNextWindow }) => {
	const context = useContext(TodoContext);
	const context_2 = useContext(ScreenContext);
	const [modal, setModal] = useState(false);
	const handleRename = (idKey, newTodo) => {
		context.dispatch({ type: "RENAME_TODO", payload: { idKey, newTodo } });
		setModal(false);
		back();
	};
	const fuDeleteTodo = (idNextWindow) => {
		Alert.alert(
			"Подтвердите удаление",
			"Вы уверены, что хотите удалить эту задачу?",
			[
				{
					text: "Отмена",
					style: "cancel",
				},
				{
					text: "OK",
					onPress: () => {
						context.dispatch({
							type: "DELETE_TODO",
							payload: { id: idNextWindow },
						});
						back();
					},
				},
			],
			{ cancelable: false }
		);
	};
	return (
		<View style={styles.container}>
			<ModalView
				visible={modal}
				onCancel={() => setModal(false)}
				select={todoNextWindow}
				idKey={idNextWindow}
				back={back}
			>
				{" "}
			</ModalView>

			<Text style={styles.label}>{todoNextWindow}</Text>

			<View style={styles.container3}>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						context_2.dispatch({ type: "BACK_WINDOW", payload: null })
					}
				>
					<Ionicons
						name="return-down-back"
						style={styles.buttonText}
					/>
					<Text style={styles.buttonText}>Назад</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => setModal(true)}
				>
					<FontAwesome5
						name="edit"
						style={styles.buttonText}
					/>
					<Text style={styles.buttonText}>Редактировать</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => fuDeleteTodo(idNextWindow)}
				>
					<MaterialCommunityIcons
						name="delete-alert-outline"
						style={styles.buttonText}
					/>
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
		minWidth: 100,
		height: 50,
		paddingHorizontal: 10,
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
		textAlign: "center",
	},

	container: {
		flex: 1,
		backgroundColor: "rgb(15, 15, 15)",
		padding: 15,
	},
});
