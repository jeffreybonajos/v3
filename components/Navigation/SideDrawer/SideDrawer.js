import React, { Component } from "react";
import { connect } from 'react-redux'

import UserInfo from "./UserInfo";
import styled from "styled-components";
import Button from "../../UI/Button";
import Link from "next/link";
import * as actions from '../../../store/actions/index';


const StyledNavMenu = styled.div`
  text-align: center;
  width: 50%;
`;
const StyledFooter = styled.div`
  text-align: center;
  width: 70%;
  background-color: gray;
  padding: 15px;
  margin-bottom: 120px;
`;
const StyledSideNav = styled.div`
  height: 100vh;
  font-family: "Raleway", sans-serif;
  margin-top: 56px;
  width: 20%;
  position: fixed;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  top: 0;
  bottom: 0;
  z-index: 90;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 100px;
  background: white;
`;
const StyledDropdownContent = styled.div`
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  width: 100px;
  right: 0;
  margin: auto;
`;
const StyledButton = styled.button`
  width: 100%;
  border: none;
  color: black;
  outline: none;
  cursor: pointer;
  padding: 10px;
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
const StyledOL = styled.ol`
  list-style: decimal;
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  padding: 0;
  width: 100%;
`;
const StyledA = styled.a`
height:100%;
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 2em;
  *padding: 0.4em;
  margin: 0.5em 0;
  background: #fc756f;
  color: #444;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  text-align: left;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
`;
const StyledNavA = styled.a`
height:100%;
position: relative;
display: block;
padding:12px;
background: white;
color: black;
font-size: 14px;
text-decoration: none;
transition: all 0.2s ease-in-out;
text-align: center;
-webkit-transition: all 0.3 ease;
transition: all 0.3 ease;
cursor: pointer;
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.1s;
&:hover,
&:active,
&:focus {
  transform: scale(1.1);
`;
class Sidedrawer extends Component {
  state = {
    open: false
  };

  render() {
    const handlerButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open
        };
      });
    };
    const userProfile = ({} = this.props.userProfile || {});
    return (
      <StyledSideNav>
        <UserInfo
          userProfile = {userProfile}
        />
        <StyledNavMenu>
          <StyledOL>
            <Link href="/">
              <StyledNavA>Home</StyledNavA>
            </Link>

            <StyledNavA onClick={handlerButtonClick}>Personal</StyledNavA>
            {this.state.open && (
              <StyledDropdownContent>
                <StyledOL>
                  <Link href="/home">
                    <StyledA>Profile</StyledA>
                  </Link>
                  <StyledA>Payslips</StyledA>
                  <Link href="/team">
                    <StyledA>Team</StyledA>
                  </Link>
                  <StyledA>Infractions</StyledA>
                  <StyledA>Leave Application</StyledA>
                  <StyledA>Coaching Logs</StyledA>
                  <StyledA>Evaluation</StyledA>
                  <StyledA>Partner Discount</StyledA>
                </StyledOL>
              </StyledDropdownContent>
            )}
            <StyledNavA>Handbook</StyledNavA>
            <StyledNavA>Feedback</StyledNavA>
          </StyledOL>
        </StyledNavMenu>
        <StyledFooter>
          <footer>
            AwesomeOS Ground Floor, Tavera Business Center, Tavera St., Davao
            City 8000 (082) 224-6209, (082) 224-6208 Copyright © 2014-2019
            OSnet. All rights reserved.
          </footer>
        </StyledFooter>
      </StyledSideNav>
    );
  }
}
const mapStateToProps = state => {
  return {
    userProfile: state.auth.userProfile
  }
  
}


export default connect(mapStateToProps)(Sidedrawer);