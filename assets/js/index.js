const AddA = document.querySelector("#add-a");
const AddB = document.querySelector("#add-b");
const AddSolve = document.querySelector("#add-solve");
const AddResult = document.querySelector("#add-result");

const SubtractA = document.querySelector("#subtract-a");
const SubtractB = document.querySelector("#subtract-b");
const SubtractSolve = document.querySelector("#subtract-solve");
const SubtractResult = document.querySelector("#subtract-result");

const MultiplyA = document.querySelector("#multiply-a");
const MultiplyB = document.querySelector("#multiply-b");
const MultiplySolve = document.querySelector("#multiply-solve");
const MultiplyResult = document.querySelector("#multiply-result");

const DivideA = document.querySelector("#divide-a");
const DivideB = document.querySelector("#divide-b");
const DivideSolve = document.querySelector("#divide-solve");
const DivideResult = document.querySelector("#divide-result");

function add() {
    AddResult.value = AddA.valueAsNumber + AddB.valueAsNumber;
}

function subtract() {
    SubtractResult.value = SubtractA.valueAsNumber - SubtractB.valueAsNumber;
}

function multiply() {
    MultiplyResult.value = MultiplyA.valueAsNumber * MultiplyB.valueAsNumber;
}

function divide() {
    DivideResult.value = DivideA.valueAsNumber / DivideB.valueAsNumber;
}

AddSolve.addEventListener("click", add);
SubtractSolve.addEventListener("click", subtract);
MultiplySolve.addEventListener("click", multiply);
DivideSolve.addEventListener("click", divide);
