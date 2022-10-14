import "./App.css";
import { useEffect, useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["+", "-", "*", "/"];
let inputNumber = "";
let stat = false,
  num1 = 0,
  num2 = 0,
  op;
let result = 0;

function App() {
  const [displayNumber, setNumber] = useState("");

  const numberClick = (number) => {
    if (num1 === 0 || num2 === 0) {
      inputNumber += number;
      setNumber(displayNumber + number);
    } else {
      inputNumber = number;
      setNumber(number);
      num1 = 0;
      num2 = 0;
    }
  };

  const operationClick = (operation) => {
    setNumber(displayNumber + " " + operation + " ");
    if (!stat) {
      num1 = Number(inputNumber);
      inputNumber = "";
      stat = true;
      op = operation;
    }
  };

  const resultDisplay = () => {
    num2 = Number(inputNumber);
    inputNumber = "";

    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        break;
    }

    stat = false;
    op = "";

    setNumber(displayNumber + " = " + result);
  };

  return (
    <div className="App">
      <div className="calculator">
      <div className="display">
        <h1>{displayNumber}</h1>
      </div>
      <div className = 'keypad'>
      <div className="result">
        <button
          className="btn"
          onClick={() => {
            resultDisplay();
          }}
        >
          =
        </button>
      </div>
      <div className="numbers">
        {numbers.map((number) => (
          <button
            className={`btn ${number === 0 ? "zero" : ""}`}
            onClick={() => {
              numberClick(number);
            }}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="operations">
        {operations.map((operation) => (
          <button
            className="btn"
            onClick={() => {
              operationClick(operation);
            }}
            key={operation}
          >
            {operation}
          </button>
        ))}
      </div>
      
      </div>
      
      </div>
    </div>
  );
}

export default App;
