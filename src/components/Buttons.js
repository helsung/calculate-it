import React from "react";
import styled from "styled-components";

export default function Buttons(props) {
  const { handleInput } = props;

  return (
    <ButtonContainer>
      <GrayButton value=" ( " onClick={(evt) => handleInput(evt.target.value)}>
        (
      </GrayButton>
      <GrayButton value=" ) " onClick={(evt) => handleInput(evt.target.value)}>
        )
      </GrayButton>
      <GrayButton value="AC" onClick={(evt) => handleInput(evt.target.value)}>
        AC
      </GrayButton>
      <GrayButton value="DEL" onClick={(evt) => handleInput(evt.target.value)}>
        ←
      </GrayButton>

      <Button value="1" onClick={(evt) => handleInput(evt.target.value)}>
        1
      </Button>
      <Button value="2" onClick={(evt) => handleInput(evt.target.value)}>
        2
      </Button>
      <Button value="3" onClick={(evt) => handleInput(evt.target.value)}>
        3
      </Button>
      <DarkOrangeButton
        value=" ÷ "
        onClick={(evt) => handleInput(evt.target.value)}
      >
        ÷
      </DarkOrangeButton>

      <Button value="4" onClick={(evt) => handleInput(evt.target.value)}>
        4
      </Button>
      <Button value="5" onClick={(evt) => handleInput(evt.target.value)}>
        5
      </Button>
      <Button value="6" onClick={(evt) => handleInput(evt.target.value)}>
        6
      </Button>
      <DarkOrangeButton
        value=" x "
        onClick={(evt) => handleInput(evt.target.value)}
      >
        x
      </DarkOrangeButton>

      <Button value="7" onClick={(evt) => handleInput(evt.target.value)}>
        7
      </Button>
      <Button value="8" onClick={(evt) => handleInput(evt.target.value)}>
        8
      </Button>
      <Button value="9" onClick={(evt) => handleInput(evt.target.value)}>
        9
      </Button>
      <DarkOrangeButton
        value=" - "
        onClick={(evt) => handleInput(evt.target.value)}
      >
        -
      </DarkOrangeButton>

      <Button value="." onClick={(evt) => handleInput(evt.target.value)}>
        .
      </Button>
      <Button value="0" onClick={(evt) => handleInput(evt.target.value)}>
        0
      </Button>
      <Button value="=" onClick={(evt) => handleInput(evt.target.value)}>
        {" "}
        ={" "}
      </Button>
      <DarkOrangeButton
        value=" + "
        onClick={(evt) => handleInput(evt.target.value)}
      >
        +
      </DarkOrangeButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24.2%);
  border: 0;
  margin: 40px 20px;
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
