//сделать компонент отображения списка задач  в реакт нетив

import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const TodoList = (props) => {
	const handleDone = (id) => {
		// Логика для отметки задачи как выполненной
		props.markDone(id);
	};

	const handleDelete = (id) => {
		props.deleteTodo(id);
	};
	return (
		<View style={styles.listContainer}>
			{props.todo.map((item) => (
				<View
					key={item.id}
					style={styles.listContainer2}
				>
					<Text style={styles.text}>
						{item.todo} {item.done ? ": Done" : ""}
					</Text>
					<View style={styles.listContainer3}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => handleDone(item.id)}
						>
							<Text style={styles.buttonText}>Done</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => handleDelete(item.id)}
						>
							<Text style={styles.buttonText2}>Delete</Text>
						</TouchableOpacity>
					</View>
				</View>
			))}
		</View>
	);
};
const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		width: "100%",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		borderBottomColor: "#00ff00",
		borderBottomWidth: 1,
		marginTop: 40,
	},
	listContainer2: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%", // Обеспечивает использование всей ширины контейнера
	},
	listContainer3: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end", // Кнопки будут располагаться справа
	},
	text: {
		color: "#ffffff",
		fontSize: 15,
		padding: 10,
		width: "60%",
		textShadowColor: "#00ff00",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	button: {
		width: "auto", // Чтобы кнопки имели размер по содержимому
		height: 30,
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#013801",
		borderColor: "#072b27",
		borderWidth: 1,
		borderRadius: 4,
		elevation: 2,
		paddingHorizontal: 10, // Добавим горизонтальный паддинг для кнопок
	},
	buttonText: {
		color: "#e0ffd1",
		fontSize: 13,
		fontWeight: "600",
		textShadowColor: "#e0ffd6",
		textShadowRadius: 1,
	},
	buttonText2: {
		color: "#e0f446",
		fontSize: 13,
		fontWeight: "600",
		textShadowColor: "#e2ffd6",
		textShadowRadius: 1,
	},
});
