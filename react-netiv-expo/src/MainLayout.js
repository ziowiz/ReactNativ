import React, { useContext } from "react"; // Импортируем необходимые хуки из React.
import { View, StyleSheet, StatusBar } from "react-native"; // Импортируем компоненты из React Native.
import { Navbar } from "./Navbar"; // Импортируем компонент Navbar.
import { MainScreen } from "./screen/MainScreen"; // Импортируем компонент MainScreen.
import { TodoScreen } from "./screen/TodoScreen"; // Импортируем компонент TodoScreen.
import { ScreenContext } from "./context/screen/screenContext"; // Импортируем контекст ScreenContext.
import { TodoContext } from "./context/todo/TodoContext"; // Импортируем контекст TodoContext.
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Импортируем компоненты для безопасной области.

export const MainLayout = () => {
	const context = useContext(TodoContext);
	const context_2 = useContext(ScreenContext);

	const nextWindow = (id, todo) => {
		context_2.dispatch({ type: "NEXT_WINDOW", payload: { id, todo } });
	};

	const backWindow = () => {
		console.log("back dispatch start");
		context_2.dispatch({ type: "BACK_WINDOW", payload: null });
	};

	// };

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<StatusBar barStyle="black-content" />
				<Navbar
					title="Список дел на сегодня:"
					style={styles.navbar}
				/>
				<View style={styles.container}>
					{context_2.state.id ? (
						<TodoScreen
							style={styles.todoScreen}
							todoNextWindow={context_2.state.todo}
							idNextWindow={context_2.state.id}
							back={backWindow}
						/>
					) : (
						<MainScreen
							style={styles.mainScreen}
							linkTodo={context.linkTodo}
							openNextWindow={nextWindow}
						/>
					)}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
const styles = StyleSheet.create({
	navbar: {
		flex: 1,
		backgroundColor: "#404040",
	},
	container: {
		flex: 1,
		backgroundColor: "#404040",
	},
	todoScreen: {
		flex: 1,
		backgroundColor: "#404040",
	},
	mainScreen: {
		flex: 1,
		backgroundColor: "#404040",
	},
	container: {
		flex: 1,
		backgroundColor: "#404040",
	},
	safeArea: {
		flex: 1,
		backgroundColor: "#000000",
		color: "#ffffff",
	},
});
