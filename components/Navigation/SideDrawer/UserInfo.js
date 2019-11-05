import React from "react";
import styled from "styled-components";
import { logOutUser } from "../../../lib/Auth";
const StyledInfo = styled.div`
  text-align: center;
  padding: 10px;
`;
const StyledDiv = styled.div`
  width: 80%;

  background-color: #ff8533;
`;
const StyledImg = styled.img`
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
`;
const StyledLogout = styled.div`
  padding: 10px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
const StyledLogoutIcon = styled.img`
  width: 7%;
`;
const userinfo = props => (
  <StyledDiv>
    <center>
      <StyledImg src="/static/default-profile.png" alt="Profile" />
    </center>
    <StyledInfo>
      <span>{props.full_name}</span>
      <br />
      <span>{props.position}</span>
    </StyledInfo>
    <StyledLogout onClick={logOutUser}>
      <StyledLogoutIcon src="/static/logout.png" alt="Logout" /> Logout
    </StyledLogout>
  </StyledDiv>
);

export default userinfo;
