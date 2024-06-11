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
	Modal,
	TextInput,
	Alert,
	ScrollView,
} from "react-native";

export const TodoList = (props) => {
	const handleDone = (id) => {
		props.markDone(id);
	};

	const handleDelete = (id) => {
		props.deleteTodo(id);
	};

	const renderList = ({ item }) => {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View
					key={item.id}
					style={styles.todo}
				>
					<View style={styles.list}>
						<TouchableOpacity
							onPress={() => props.sendMessage(item.id, item.todo)}
						>
							<Text style={item.done ? styles.textDone : styles.text}>
								{item.todo}
							</Text>
						</TouchableOpacity>

						<View style={styles.vievButton}>
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
				</View>
			</TouchableWithoutFeedback>
		);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.listContainer}>
				{props.todo && props.todo.length > 0 ? (
					<FlatList
						data={props.todo}
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
		fontSize: 13,
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
