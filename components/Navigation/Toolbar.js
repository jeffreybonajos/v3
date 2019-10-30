import React from "react";
import NavigationItems from "./NavigationItems";
import Logo from "../Logo/Logo";
import styled from "styled-components";
const StyledToolbar = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 50px 100px;
  box-sizing: border-box;
  z-index: 90;
`;
const StyledLogo = styled.div`
  height: 80%;
`;
const StyledNav = styled.nav`
  height: 100%;
  @media (max-width: 499px) {
      display: none;
`;
const toolbar = props => (
  <header>
    <StyledToolbar>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledNav>
        <NavigationItems full_name={props.full_name} />
      </StyledNav>
    </StyledToolbar>
  </header>
);

export default toolbar;
