class Calculator{

    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear(){
        

    }
    delete(){

    }
    appendNumber(){

    }
    compute(){

    }
    updateDisplay(){

    }
}

const numbersButton = document.querySelectorAll(['data-number']);
const operationssButton = document.querySelectorAll(['data-operation']);
const deleteButton = document.querySelector(['data-delete']);
const allClearButton = document.querySelector(['data-allclear']);
const equalsButton = document.querySelector(['data-equals']);
const previousOperandTextElement = document.querySelector(['data-previous-operand']);
const currentOperandTextElement = document.querySelector(['data-current-operand']);