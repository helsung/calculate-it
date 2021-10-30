import React from "react";
import styled from "styled-components";

export default function Input(props) {
  const { userInput } = props;

  return (
    <InputField className="input">
      <p>{userInput}</p>
    </InputField>
  );
}

const InputField = styled.div`
  width: 490px;
  height: 70px;
  background: #f8f8f8;
  margin-left: 20px;
`;
