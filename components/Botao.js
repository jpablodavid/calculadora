import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Botao = ({ numeros, calculadora }) => {
	return (
		<TouchableOpacity onPress={() => calculadora(numeros)} style={styles.botao}>
			<Text style={styles.num}>{numeros}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	botao: {
		width: "30%",
		backgroundColor: "#999",
		textAlign: "center",
		paddingTop: 15,
        marginBottom: 10,
	},
	num: {
		color: "black",
		fontSize: 25,
	},
});

export default Botao;
