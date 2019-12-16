import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.disabled ? 'red' : 'green'};
  cursor: ${props => props.disabled ? 'none' : 'pointer'};
  width: 100%;
  border: none;
  color: black;
  outline: none;
  padding: 10px;
  align-items: center;
  margin: 4px 0px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  background: ${props => props.disabled ? 'grey' : null};
  &:hover,
  &:active,
  &:focus {
    transform: ${props => props.disabled ? null : 'scale(1.1)'};
  }
  
`;
const button = props => <StyledButton onClick={props.clicked} disabled={props.disabled}>{props.children}</StyledButton>;

export default button;
