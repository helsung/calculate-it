import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <Wrapper>
      <CalculatorContainer>
        <Input />
        <Buttons />
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
