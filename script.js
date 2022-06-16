let result = 0;
let buffer = 0;
let operation = "";

const calculator = document.querySelector(".calculator-container");

calculator.addEventListener("click", function (event) {
	if (Number(event.target.innerText)) {
		handleNumbers(event.target.innerText);
	} else {
		determineOperation(event.target.innerText);
	}
	displayResult();
});

document.body.addEventListener("keydown", function (event) {
	console.log(event.key);
	event.preventDefault();
	if (Number(event.key)) {
		handleNumbers(event.key);
	} else {
		determineOperation(event.key);
	}
	displayResult();
});

function handleNumbers(num) {
	if (num || result) {
		if (!result) {
			result = "";
		}
		result = result.toString();
		num = num.toString();
		result += num;
	}
}

function handleFloatingPoint() {
	if (result.toString().match(/\./)) return;

	if (!result) {
		result = "0.";
	} else {
		result += ".";
	}
	return;
}

function displayResult() {
	const resultContainer = document.querySelector(".result");

	if (result != 0) {
		resultContainer.textContent = result;
	} else if (result === "0.") {
		resultContainer.textContent = result;
	} else {
		resultContainer.textContent = 0;
	}
}

function displayHistory(number1, number2, operation) {
	const historyContainer = document.querySelector(".history");
	historyContainer.textContent = `${number1} ${operation} ${number2} = ${result}`;
}

function determineOperation(operator) {
	switch (operator) {
		case "C":
			clearDisplay();
			break;
		case "c":
			clearDisplay();
			break;
		case "Delete":
			clearDisplay();
			break;
		case "←":
			backSpace();
			break;
		case "Backspace":
			backSpace();
			break;
		case "=" || "Enter":
			equal();
			break;
		case "Enter":
			equal();
			break;
		case "0":
			handleNumbers(Number(operator));
			break;
		case ".":
			handleFloatingPoint();
			break;
		default:
			if (!!operator.toString().match(/[\/\*\-\+\×\÷]/)) {
				changeInput();
				operation = operator;
			}
			break;
	}
}

function clearDisplay() {
	result = 0;
    document.querySelector('.history').textContent = ''
}

function clearHistory() {
}

function backSpace() {
	if (result != 0) {
		result = result.toString();
		result = result.substring(0, result.length - 1) || 0;
	}
	if (result === "0.") {
		result = 0;
	}
	if (result === "-") {
		result = 0;
	}
}

function changeInput() {
	if (buffer == 0) {
		buffer = result;
		result = 0;
	}
}

function equal() {
	const number1 = Number(result);
	const number2 = Number(buffer);
	switch (operation) {
		case "+":
			result = number1 + number2;
			break;
		case "-":
			result = number2 - number1;
			break;
		case "×":
			result = number1 * number2;
			break;
		case "÷":
			result = number2 / number1;
			break;
		case "*":
			result = number1 * number2;
			break;
		case "/":
			result = number2 / number1;
			break;
		default:
			return;
	}
	displayHistory(number2, number1, operation);
	operation = "";
	buffer = 0;
}
