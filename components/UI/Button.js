import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: Yellow;
  border: none;
  color: black;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
`;
const button = props => (
  <StyledButton onClick={props.clicked}>{props.children}</StyledButton>
);

export default button;
