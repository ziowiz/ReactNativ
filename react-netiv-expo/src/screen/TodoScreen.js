import React from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ModalView } from "./Modal";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const TodoScreen = ({ back, id, select, fuDeleteTodo, fuRename2 }) => {
	const [modal, setModal] = useState(false);
	const handleRename = (idKey, newTodo) => {
		console.log(idKey + " idKey in TodoScreen");
		console.log(newTodo + " newTodo in TodoScreen");
		fuRename2(idKey, newTodo);
		setModal(false);
		setTimeout(() => {
			back();
		}, 0.5);
	};
	const deleteTodo = (id) => {
		console.log("Удаление произошло");
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
						fuDeleteTodo(id);
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
				select={select}
				idKey={id}
				fuRename={handleRename}
			>
				{" "}
			</ModalView>

			<Text style={styles.label}>{select}</Text>

			<View style={styles.container3}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => back()}
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
					onPress={() => deleteTodo(id)}
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