import React, { Component } from "react";
import { connect } from 'react-redux'

import UserInfo from "./UserInfo";
import styled from "styled-components";
import Button from "../../UI/Button";
import Link from "next/link";
import * as actions from '../../../store/actions/index';



const StyledFooter = styled.div`
    margin-top: 20px;
    background: white;
    padding: 15px 25px;
    font-size: 9pt;
    box-shadow: 2px 1px 15px -1px rgba(0, 0, 0, .08);
    color: darkgray;
`;
const StyledSideNav = styled.div`
  height: 100vh;
  font-family: "Raleway", sans-serif;
  margin-top: 75px;
  position: fixed;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  top: 0;
  bottom: 0;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 100px;
  background: #f2f2f2;
  width: 16%;
  margin-left: 45px;
`;
const StyledDropdownContent = styled.div`
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  right: 0;
  margin: auto;
`;
const StyledButton = styled.button`
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

const StyledNavMenu = styled.div`
  text-align: left;
  background-color: #fff;
  width: 100%;
`;

const MainNavList = styled.ol`
  list-style: decimal;
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SubNav = styled.ol`
  list-style: decimal;
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  padding: 0;
`;

const PersonalNav = styled.a`
height:100%;
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 2em;
  *padding: 0.4em;
  margin: 0.5em 0;
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
    color: red !important;
    margin-left: -3px;
`;
const MainNavLinks = styled.a`
height:100%;
position: relative;
display: block;
padding:12px;
background: white;
color: dimgrey;
font-size: 14px;
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
  border-left: 3px solid red;
    background: #f2f2f2;
    box-shadow: inset 2px 0px 10px -5px rgba(0, 0, 0, 0.8);
    color: red;
  }
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
          <MainNavList>
            <Link href="/">
              <MainNavLinks><i className="fa fa-home"></i>&emsp;Home</MainNavLinks>
            </Link>
            <MainNavLinks onClick={handlerButtonClick}><i className="fa fa-user"></i>&emsp;Personal</MainNavLinks>
            {this.state.open && (
              <StyledDropdownContent>
                <SubNav>
                  <Link href="/personal">
                    <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Profile</PersonalNav>
                  </Link>
                  <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Payslips</PersonalNav>
                  <Link href="/team">
                    <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Team</PersonalNav>
                  </Link>
                  <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Infractions</PersonalNav>
                  <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Leave Application</PersonalNav>
                  <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Coaching Logs</PersonalNav>
                  <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Evaluation</PersonalNav>
                  <PersonalNav><i className="fa fa-circle-o"></i>&nbsp;&nbsp;Partner Discount</PersonalNav>
                </SubNav>
              </StyledDropdownContent>
            )}
            <MainNavLinks><i className="fa fa-book"></i>&emsp;Handbook</MainNavLinks>
            <MainNavLinks><i className="fa fa-commenting"></i>&emsp;Feedback</MainNavLinks>
            <MainNavLinks><i className="fa fa-wrench"></i>&emsp;Troubleshooting</MainNavLinks>
          </MainNavList>
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