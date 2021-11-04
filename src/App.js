import React, { useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

export default function App() {
  const [userInput, setUserInput] = useState("");

  /**
   * Handle various functionalities depending on the button clicked
   * @param {string} button
   */
  const handleInput = (button) => {
    //edge case if user clicks in button container div that is not a button
    if (button === undefined) return;

    if (button === "AC") setUserInput("");
    else if (button === "DEL") backspace();
    else if (button === "=") {
      validateInput(userInput) ? calculate(convertToArr(userInput)) : null;
    } else if (userInput.length > 20)
      alert("Please limit input to 20 characters");
    else setUserInput(userInput + button);
  };

  /**
   * Handle backspace by converting to array first to remove an element at a time vs a character
   * i.e. "33" is one element anad two characters
   */
  const backspace = () => {
    let inputArr = convertToArr(userInput);
    setUserInput(inputArr.slice(0, -1).join(""));
  };

  /**
   * Add spaces in-between non-numerical characters for easy string splitting into array. This supports multi-digit numbers and decimals
   * @param {string} input
   * @return {string[]}
   */
  const convertToArr = (input) => {
    let spacedInput = "";
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (isNaN(char) && char !== ".") {
        spacedInput += ` ${char} `;
      } else {
        spacedInput += char;
      }
    }
    return spacedInput.split(" ").filter((el) => el);
  };

  /**
   * Validate user input for accurate parenthesis and consecutive operators
   * @param {string} input
   * @return {Boolean}
   */
  const validateInput = (input) => {
    let operators = ["+", "-", "x", "/"];
    let errorMsg = "Please enter a valid expression!";
    let arr = convertToArr(input);
    let balancedBrackets = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") balancedBrackets++;
      if (arr[i] === ")") balancedBrackets--;

      //if balancedBrackers go below 0, it means a closed bracket came before its paired open bracket
      if (balancedBrackets < 0) {
        alert(errorMsg);
        return;
      }

      //check if there are consecutive operators; only (--) is valid
      if (operators.includes(arr[i]) && operators.includes(arr[i + 1])) {
        if (arr[i + 1] !== "-") {
          alert(errorMsg);
          return;
        }
      }
    }

    //balanced brackets will even out to zero
    return balancedBrackets === 0 ? true : alert(errorMsg);
  };

  /**
   * Calculate user input and set numerical result to state. Utilize stack to evaluate correct order of operations and recursion to support multiple parenthetical nesting
   * @param {string[]} inputArr
   * @param {number} i
   */
  const calculate = (inputArr, i = 0) => {
    let res = 0;
    let operator = "+";
    let currNum = 0;
    let stack = [];
    while (i <= inputArr.length) {
      if (inputArr[i] === "(") {
        i++;
        //track indices of inner parenthetical expression to continue iterating once out of recursive call
        let [res, idx] = calculate(inputArr, i);
        updateStack(stack, res, operator);
        i = idx++;
        operator = inputArr[i++];
        continue;
      } else if (inputArr[i] === ")") {
        updateStack(stack, currNum, operator);
        res = stack.reduce((accum, val) => accum + val);
        return [res, i];
      } else {
        if (!isNaN(inputArr[i])) {
          currNum = +inputArr[i];
        }

        //detect an operator or if we are at last element to update stack
        if (isNaN(inputArr[i]) || i === inputArr.length - 1) {
          if (inputArr[i] === "-" && inputArr[i + 1] === "-") {
            operator, (inputArr[i + 1] = "+");
          }
          updateStack(stack, currNum, operator);
          operator = inputArr[i];
          currNum = 0;
        }
      }
      i++;
    }

    //ultimately add all elements left in the stack
    res = stack.reduce((accum, val) => accum + val);

    //support decimals in base 10 from binary computation
    setUserInput(parseFloat(res.toFixed(20)));
  };

  /**
   * Helper function to update stack and prioritze multiplication and division
   * @param {number[]} stack
   * @param {number} currNum
   * @param {string} operator
   */
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
