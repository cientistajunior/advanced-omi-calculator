const resultScreen = document.querySelector(".result");
const buttons = document.querySelectorAll(".calculator-grid button");

let firstValue = "";
let secondValue = "";
let operator = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnText = btn.innerHTML;

        switch (btnText) {
            case '/':
            case '*':
            case '-':
            case '+':
                if (firstValue !== "") {
                    operator = btnText; 
                }
                break;
            case 'Clear':
                firstValue = "";
                secondValue = "";
                operator = "";
                resultScreen.innerText = "";
                break;
            case '=':
                if (firstValue !== "" && secondValue !== "") {
                    let num1 = parseFloat(firstValue);
                    let num2 = parseFloat(secondValue);
                    let resulCalc = 0;

                    switch (operator) {
                        case '+': resulCalc = num1 + num2; break;
                        case '-': resulCalc = num1 - num2; break;
                        case '*': resulCalc = num1 * num2; break;
                        case '/': resulCalc = num1 / num2; break;
                    }

                    resultScreen.innerText = resulCalc;

                    firstValue = resulCalc.toString();
                    secondValue = "";
                    operator = "";
                }
                break;
            default:
                if (operator === "") {
                    firstValue += btnText;
                    resultScreen.innerText = firstValue;
                } else {
                    secondValue += btnText;
                    resultScreen.innerText = secondValue;
                }
                break;
        }
    });
});