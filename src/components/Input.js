import React from "react";
import styled from "styled-components";

export default function Input(props) {
  const { userInput } = props;

  return <InputField className="input" value={userInput} />;
}

const InputField = styled.input`
  width: 490px;
  height: 70px;
  background: #f8f8f8;
  margin: 0px 20px;
  font-size: 36px;
`;
