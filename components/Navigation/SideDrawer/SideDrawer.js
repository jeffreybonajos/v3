import React from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const StyledNavMenu = styled.div`
  text-align: center;
  width: 70%;
  background-color: white;
`;
const StyledFooter = styled.div`
  text-align: center;
  width: 70%;
  background-color: gray;
  padding: 20px;
`;
const StyledSideNav = styled.div`
  width: 25%;
  position: fixed;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  top: 100px;
  height: 100vh;
  z-index: 90;
`;
const sidedrawer = props => (
  <StyledSideNav>
    <UserInfo full_name={props.full_name} position={props.position} />
    <StyledNavMenu>
      <span>Home</span>
      <br />
      <span>Personal</span>
      <br />
      <span>Handbook</span>
      <br />
      <span>Feedback</span>
    </StyledNavMenu>
    <StyledFooter>
      <footer>© 2019 copyright nigga</footer>
    </StyledFooter>
  </StyledSideNav>
);
export default sidedrawer;
