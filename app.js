const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
console.log(buttons);

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
    const value = button.innerText;
    if (value === "Clear") {
        calculation = [];
        screenDisplay.innerText = "";
    }  
    else if (value === "=") {
        screenDisplay.innerText = eval(accumulativeCalculation);
    }
    else {
        calculation.push(value);
        accumulativeCalculation = calculation.join('');
        screenDisplay.innerText = accumulativeCalculation;
    }
    
}

buttons.forEach(button => {
    button.addEventListener('click', () => calculate(button));
});
