import { MainLayout } from "./src/MainLayout"; // Импортируем компонент MainLayout из указанного пути.
import { ScreenState } from "./src/context/screen/screenState";
import { TodoState } from "./src/context/todo/TodoState"; // Импортируем компонент TodoState из указанного пути.
import React from "react"; // Импортируем React для создания компонентов.

export default function App() {
	// Определяем главный компонент App, который будет рендерить наше приложение.
	return (
		<ScreenState>
			<TodoState>
				<MainLayout />
			</TodoState>
		</ScreenState>
	);
}
