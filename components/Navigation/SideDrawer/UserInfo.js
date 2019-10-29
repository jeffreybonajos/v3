import React from "react";
import styled from "styled-components";

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
const userinfo = props => (
  <StyledDiv>
    <center>
      <StyledImg src="/static/default-profile.png" alt="Profile" />
    </center>
    <br />
    <StyledInfo>
      <span>{props.full_name}</span>
      <br />
      <span>{props.position}</span>
    </StyledInfo>
  </StyledDiv>
);

export default userinfo;
