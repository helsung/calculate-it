import React, { useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

export default function App() {
  const [userInput, setUserInput] = useState("");

  const handleInput = (button) => {
    if (button === "AC") clearAll();
    else if (button === "DEL") backspace();
    else if (button === "=") {
      // validateInput(userInput)
      calculate(userInput);
    } else setUserInput(userInput + button);
  };

  const clearAll = () => {
    setUserInput("");
  };

  const backspace = () => {
    setUserInput(userInput.slice(0, -1));
  };

  const validateInput = () => {};

  const calculate = (input) => {
    let res = 0;
    let operator = "+";
    let currNum = 0;
    let stack = [];
    let arr = input.split(" ");

    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        currNum = Number(arr[i]);
      }

      if (isNaN(arr[i]) || i === arr.length - 1) {
        if (arr[i] === "-" && arr[i + 1] === "-") {
          operator = "+";
          arr[i + 1] = "+";
        }
        updateStack(stack, currNum, operator);
        operator = arr[i];
        currNum = 0;
      }
    }
    res = stack.reduce((accum, val) => accum + val);
    setUserInput(res);
  };

  const updateStack = (stack, currNum, operator) => {
    switch (operator) {
      case "+":
        stack.push(currNum);
        break;
      case "-":
        stack.push(-currNum);
        break;
      case "x":
        stack.push(stack.pop() * currNum);
        break;
      case "÷":
        stack.push(stack.pop() / currNum);
        break;
    }
  };

  return (
    <Wrapper>
      <CalculatorContainer>
        <Input userInput={userInput} />
        <Buttons handleInput={handleInput} />
      </CalculatorContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 550px;
  min-height: 590px;
  font-family: Sans-serif;
`;

const CalculatorContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #5c636e;
  width: 530px;
  height: 570px;
`;
