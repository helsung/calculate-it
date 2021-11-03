import React from "react";
import styled from "styled-components";

export default function Buttons(props) {
  const { handleInput } = props;

  const handleKeyDown = (key) => {
    let value = "";
    switch (key) {
      case "(":
        value = "(";
        break;
      case ")":
        value = ")";
        break;
      case "D":
        value = "AC";
        break;
      case "Backspace":
        value = "DEL";
        break;

      case "1":
        value = "1";
        break;
      case "2":
        value = "2";
        break;
      case "3":
        value = "3";
        break;
      case "/":
        value = "÷";
        break;

      case "4":
        value = "4";
        break;
      case "5":
        value = "5";
        break;
      case "6":
        value = "6";
        break;
      case "*":
        value = "x";
        break;

      case "7":
        value = "7";
        break;
      case "8":
        value = "8";
        break;
      case "9":
        value = "9";
        break;
      case "-":
        value = "-";
        break;

      case ".":
        value = ".";
        break;
      case "0":
        value = "0";
        break;
      case "=":
        value = "=";
        break;
      case "+":
        value = "+";
        break;
    }

    handleInput(value);
  };

  return (
    <ButtonContainer
      onKeyDown={(evt) => handleKeyDown(evt.key)}
      onClick={(evt) => handleInput(evt.target.value)}
    >
      <GrayButton value="(">(</GrayButton>
      <GrayButton value=")">)</GrayButton>
      <GrayButton value="AC">AC</GrayButton>
      <GrayButton value="DEL">←</GrayButton>

      <Button value="1">1</Button>
      <Button value="2">2</Button>
      <Button value="3">3</Button>
      <DarkOrangeButton value="÷">÷</DarkOrangeButton>

      <Button value="4">4</Button>
      <Button value="5">5</Button>
      <Button value="6">6</Button>
      <DarkOrangeButton value="x">x</DarkOrangeButton>

      <Button value="7">7</Button>
      <Button value="8">8</Button>
      <Button value="9">9</Button>
      <DarkOrangeButton value="-">-</DarkOrangeButton>

      <Button value=".">.</Button>
      <Button value="0">0</Button>
      <Button value="=">=</Button>
      <DarkOrangeButton value="+">+</DarkOrangeButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24.2%);
  border: 0;
  margin: 20px 20px;
  gap: 5px;
`;

const Button = styled.button`
  background: #faebcd;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const DarkOrangeButton = styled(Button)`
  background: #f8b500;
`;

const GrayButton = styled(Button)`
  background: #c4c4c4;
`;
