import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Botao from "./components/Botao";

export default function App() {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [sinal, setSinal] = useState("");
	const [calculo, setCalculo] = useState("");

	var numeros = ["-", "+", "C", "/", "%", "*"];

	for (let index = 1; index < 10; index++) {
		numeros.push(index);
	}
	numeros.push(0, ".", "=");

	const logicaCalculadora = (valor) => {
		if (sinal == "") {
			setFirstNumber(parseInt(firstNumber.toString() + valor.toString()));
			setCalculo(parseInt(firstNumber.toString() + valor.toString()));
		}

		if (
			(valor == "/" ||
				valor == "*" ||
				valor == "-" ||
				valor == "+" ||
				valor == "C" ||
				valor == "%") &&
			secondNumber == 0
		) {
			setCalculo(firstNumber.toString() + valor);
			setSinal(valor);
		}
		
		if(calculo == '' && (valor == "/" ||
				valor == "*" ||
				valor == "-" ||
				valor == "+" ||
				valor == "C" ||
				valor == "%")){
			setCalculo('');
		}

		if (sinal != "") {
			setSecondNumber(parseInt(secondNumber.toString() + valor.toString()));
			setCalculo(
				firstNumber +
					sinal +
					parseInt(secondNumber.toString() + valor.toString())
			);
		}

		if(valor == '='){
			let resultado = 0;
			if(sinal == '+'){
				resultado = firstNumber + secondNumber;
			}else if(sinal == '-'){
				resultado = firstNumber - secondNumber;
			}else if(sinal == '/'){
				resultado = firstNumber / secondNumber;
			}else if(sinal == '*'){
				resultado = firstNumber * secondNumber;
			}else if(sinal == '%'){
				resultado = firstNumber * (secondNumber/100);
			}

			setCalculo(resultado);
			setSinal('');
			setSecondNumber('0');
			setFirstNumber(resultado);
		}

		if(valor == 'C'){
			setCalculo('');
			setFirstNumber(0);
			setSinal("");
			setSecondNumber("0");
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.tela}>
				<Text style={styles.numbers}>{calculo}</Text>
			</View>

			<View style={styles.teclado}>
				{numeros.map((num) => {
					return <Botao numeros={num} calculadora={logicaCalculadora} />;
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tela: {
		height: "40%",
		backgroundColor: "#cccb",
		borderBottomColor: "black",
		borderWidth: 2,
		margin: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	numbers: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#0009",
		margin: 5,
	},
	teclado: {
		flexDirection: "row",
		flexWrap: "wrap",
		height: "55%",
		backgroundColor: "black",
		margin: 10,
		marginTop: 0,
		paddingTop: 10,
		justifyContent: "space-around",
	},
});
