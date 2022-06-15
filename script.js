let result = 0;
let buffer = 0;
let operation = "";

document
	.querySelector(".calculator-container")
	.addEventListener("click", function (event) {
		if (Number(event.target.innerText)) {
			handleNumbers(event.target.innerText);
		} else {
			determineOperation(event.target.innerText);
		}
	});

function handleNumbers(num) {
	if (num || result) {
		if (!result) {
			result = "";
		}
		result = result.toString();
		num = num.toString();
		result += num;
		displayResult();
	}
}

function handleFloatingPoint () {
    if (num || result) {

    }
}

function displayResult() {
	if (result != 0) {
		document.querySelector(".result").innerHTML = result;
	} else {
		document.querySelector(".result").innerHTML = 0;
	}
}

function determineOperation(operator) {
	switch (operator) {
		case "C":
			clearDisplay();
			break;
		case "←":
			backSpace();
			break;
		case "=":
			equal();
			break;
		case "0":
			handleNumbers(Number(operator));
			break;
		case ".":
			handleFloatingPoint();
		default:
			changeInput();
			operation = operator;
	}
}

function clearDisplay() {
	result = 0;
	displayResult();
}

function backSpace() {
	if (result != 0) {
		result = result.toString();
		result = result.substring(0, result.length - 1);
		displayResult();
	}
}

function changeInput() {
	if (buffer == 0) {
		buffer = result;
		result = 0;
		// displayResult();
	}
}

function equal() {
	switch (operation) {
		case "+":
			result = Number(result) + Number(buffer);
			break;
		case "-":
			result = Number(buffer) - Number(result);
			break;
		case "×":
			result = Number(result) * Number(buffer);
			break;
		case "÷":
			result = Number(buffer) / Number(result);
			break;
		default:
			return;
	}
	operation = "";
	buffer = 0;
	displayResult();
}
