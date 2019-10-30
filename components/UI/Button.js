import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  border: none;
  color: black;
  outline: none;
  cursor: pointer;
  padding: 10px;
  align-items: center;
  margin: 4px 0px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;

  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  background: white;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
const button = props => <StyledButton>{props.children}</StyledButton>;

export default button;
