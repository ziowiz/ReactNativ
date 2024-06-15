import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Image,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TodoContext } from "./context/todo/TodoContext"; // Импортируем контекст TodoContext.
import React, { useContext } from "react";

export const TodoList = ({ openNextWindow }) => {
	const context = useContext(TodoContext);

	const renderList = ({ item }) => {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View
					key={item.id}
					style={styles.todo}
				>
					<View style={styles.list}>
						<TouchableOpacity
							onPress={() => openNextWindow(item.id, item.todo)}
						>
							<Text style={item.done ? styles.textDone : styles.text}>
								{item.todo}
							</Text>
						</TouchableOpacity>

						<View style={styles.vievButton}>
							<TouchableOpacity
								style={styles.button}
								onPress={() =>
									context.dispatch({
										type: "MARK_TODO",
										payload: { id: item.id },
									})
								}
							>
								{!item.done ? (
									<MaterialIcons
										name="done-all"
										size={24}
										style={styles.buttonText}
									/>
								) : (
									<MaterialIcons
										name="remove-done"
										style={styles.buttonText}
									/>
								)}
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={() =>
									context.dispatch({
										type: "DELETE_TODO",
										payload: { id: item.id },
									})
								}
							>
								<AntDesign
									name="delete"
									style={styles.buttonText}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.listContainer}>
				{context.linkTodo && context.linkTodo.length > 0 ? (
					<FlatList
						data={context.linkTodo}
						renderItem={renderList}
						keyExtractor={(item) => item.id.toString()}
					/>
				) : (
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={{ flex: 1 }}
					>
						<View style={styles.emptyContainer}>
							<Text style={styles.text2}>Котику грустно. Добавьте задачу.</Text>
							<Image
								source={require("./img/cat.png")}
								style={styles.image}
							/>
						</View>
					</KeyboardAvoidingView>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	list: {
		flexDirection: "row",
		width: "100%",
	},
	text: {
		color: "#ffffff",
		fontSize: 18,
		paddingLeft: 10,
		paddingBottom: 10,
		width: 220,
		textShadowColor: "#00ff00",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	textDone: {
		color: "#504f4f",
		fontStyle: "italic",
		fontSize: 16,
		paddingLeft: 15,
		textDecorationLine: "line-through",
		paddingBottom: 10,
		textShadowColor: "#153515",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
	vievButton: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: "auto",
	},
	button: {
		width: 75,
		height: 30,
		marginRight: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#013801",
		borderColor: "#022407",
		borderWidth: 1,
		borderRadius: 4,
		elevation: 2,
	},

	buttonText: {
		color: "#e0ffd1",
		fontSize: 20,
		fontWeight: "400",
		textShadowColor: "#297a0e",
		textShadowRadius: 1,
	},
	buttonText2: {
		color: "#ddbc04",
		fontSize: 13,
		fontWeight: "400",
		textShadowColor: "#e2ffd6",
		textShadowRadius: 1,
	},

	listContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#00ff00",
		borderBottomWidth: 1,
		marginTop: 10,
	},

	emptyContainer: {
		marginTop: 80,
		height: 400,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "star",
	},

	image: {
		width: 300,
		height: 400,
		resizeMode: "contain",
	},

	text2: {
		color: "#ffffff",
		fontSize: 16,
		textAlign: "center",
		width: "100%",
		textShadowColor: "#00ff00",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
		textAlign: "center",
	},
});
