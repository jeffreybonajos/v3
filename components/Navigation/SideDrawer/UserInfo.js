import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';


import { logOutUser } from "../../../lib/Auth";
import * as actions from '../../../store/actions/index';
const StyledInfo = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #ff8533;
  color: #fff;
`;
const StyledDiv = styled.div`
  width: 100%;
`;

const ImgContainer = styled.div`
  background-color: #fff;
  min-height: 122px;
  width: 100%;
  text-align: center;
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
const url = 'https://awesomev3.s3-ap-southeast-1.amazonaws.com/pp/';

const userinfo = ({userProfile}) => (
  <StyledDiv>
      <ImgContainer>
        <StyledImg src={userProfile.profile_picture ? url + userProfile.profile_picture : url + 'default-profile.png'} 
        alt="Profile" />
      </ImgContainer>
    <StyledInfo>
      <span>{userProfile.full_name}</span>
      <br />
      <span>{userProfile.position}</span>
    <StyledLogout onClick={logOutUser}>
      <StyledLogoutIcon src="/static/logout.png" /> Logout
    </StyledLogout>
    </StyledInfo>
  </StyledDiv>
);


export default userinfo;
