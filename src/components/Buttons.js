import React from "react";
import styled from "styled-components";

export default function Buttons() {
  return (
    <ButtonContainer>
      <GrayButton name="(">(</GrayButton>
      <GrayButton name=")">)</GrayButton>
      <GrayButton name="AC">AC</GrayButton>
      <GrayButton name="DEL">←</GrayButton>

      <Button name="1">1</Button>
      <Button name="2">2</Button>
      <Button name="3">3</Button>
      <DarkOrangeButton name="÷">÷</DarkOrangeButton>

      <Button name="4">4</Button>
      <Button name="5">5</Button>
      <Button name="6">6</Button>
      <DarkOrangeButton name="*">*</DarkOrangeButton>

      <Button name="7">7</Button>
      <Button name="8">8</Button>
      <Button name="9">9</Button>
      <DarkOrangeButton name="-">-</DarkOrangeButton>

      <Button name=".">.</Button>
      <Button name="0">0</Button>
      <Button name="="> = </Button>
      <DarkOrangeButton name="+">+</DarkOrangeButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24.2%);
  border: 0;
  margin: 30px 20px;
  gap: 5px;
`;

const Button = styled.div`
  background: #faebcd;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
