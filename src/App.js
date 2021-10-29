import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <div>
      <CalculatorContainer>hello rld it's helen</CalculatorContainer>
    </div>
  );
}

const CalculatorContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #5c636e;
  width: 530px;
  height: 570px;
`;
