import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { logOutUser } from "../../lib/Auth";
const StyleUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;
const StyledLI = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
  @media (min-width: 500px) {
      margin: 0;
      display: flex;
      height: 100%;
      width: auto;
      align-items: center;`;

const StyledA = styled.a`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  cursor: pointer;
  color: black;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  :hover,
  :active,
  :active {
    transform: scale(1.2);
  }

  color: black;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;

  :hover,
  :active,
  :active {
    transform: scale(1.1);
  }
`;

const navigationItems = props => (
  <nav>
    <StyleUL>
      <StyledLI>
        <Link href="/profile">
          <StyledA>Profile</StyledA>
        </Link>
      </StyledLI>
      <StyledLI>
        <StyledA onClick={logOutUser}>Logout</StyledA>
      </StyledLI>
    </StyleUL>
  </nav>
);

export default navigationItems;
