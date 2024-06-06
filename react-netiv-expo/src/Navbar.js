import React from "react";
import { StyleSheet, View, Text } from "react-native";
export const Navbar = (props) => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: "rgb(8, 8, 8)",
		height: 50,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: "#00ff00",
		borderBottomWidth: 1,
		marginTop: 40,
	},
	text: {
		color: "#ffffff",
		textAlign: "center",
		fontSize: 25,
		textShadowColor: "#00ff00",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 3,
	},
});
