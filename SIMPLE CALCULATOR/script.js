let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById("display").value = currentInput;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
