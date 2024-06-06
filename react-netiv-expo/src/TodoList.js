//сделать компонент отображения списка задач  в реакт нетив

import React, { Component, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
} from "react-native";

export const TodoList = (props) => {
	const handleDone = (id) => {
		// Логика для отметки задачи как выполненной
		props.markDone(id);
	};

	const handleDelete = (id) => {
		props.deleteTodo(id);
	};
	return (
		<ScrollView style={styles.listContainer}>
			{props.todo.map((item) => (
				<View
					key={item.id}
					style={styles.listContainer2}
				>
					<Text style={item.done ? styles.textDone : styles.text}>
						{item.todo}
					</Text>
					<View style={styles.listContainer3}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => handleDone(item.id)}
						>
							<Text style={styles.buttonText}>
								{!item.done ? "Готово" : "Вернуть"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={() => handleDelete(item.id)}
						>
							<Text style={styles.buttonText2}>Удалить</Text>
						</TouchableOpacity>
					</View>
				</View>
			))}
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		flexDirection: "column",
		width: "100%",

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
		fontSize: 18,
		paddingLeft: 15,
		paddingBottom: 10,
		width: "60%",
		textShadowColor: "#00ff00",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	textDone: {
		color: "#504f4f",
		fontStyle: "italic",
		fontSize: 18,
		paddingLeft: 25,
		textDecorationLine: "line-through",
		paddingBottom: 10,
		width: "60%",
		textShadowColor: "#153515",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	button: {
		width: 75, // Чтобы кнопки имели размер по содержимому
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
		color: "#ddbc04",
		fontSize: 13,
		fontWeight: "600",
		textShadowColor: "#e2ffd6",
		textShadowRadius: 1,
	},
});
