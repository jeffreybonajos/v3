import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 25%;
  background: white;
  float: right;
`;
const StyledHeader = styled.div`
  padding: 20px 0;
  background: #ff8533;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  color: white;
`;
const StyledContent = styled.div`
  background: #ff8533;
`;
const StyledImg = styled.img`
  padding: 5px;
  float:left
  width: 75px;
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
const relatedEmployees = () => (
  <StyledContainer>
    <StyledHeader>
      <span>Related Employees</span>
    </StyledHeader>
    <StyledContent>
      <StyledImg src="/static/default-profile.png" alt="Profile" />
      <StyledImg src="/static/default-profile.png" alt="Profile" />
      <StyledImg src="/static/default-profile.png" alt="Profile" />
      <StyledImg src="/static/default-profile.png" alt="Profile" />
      <StyledImg src="/static/default-profile.png" alt="Profile" />
      <StyledImg src="/static/default-profile.png" alt="Profile" />
    </StyledContent>
  </StyledContainer>
);
export default relatedEmployees;
