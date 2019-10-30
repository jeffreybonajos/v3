import React, { Component } from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components";
import Button from "../../UI/Button";
const StyledNavMenu = styled.div`
  text-align: center;
  width: 80%;
`;
const StyledFooter = styled.div`
  text-align: center;
  width: 70%;
  background-color: gray;
  padding: 15px;
`;
const StyledSideNav = styled.div`
  font-family: "Raleway", sans-serif;
  width: 20%;
  position: fixed;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  top: 100px;
  height: 100%;
  z-index: 90;
  overflow: scroll;
  padding-bottom: 100px;
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
class Sidedrawer extends Component {
  container = React.createRef();
  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };
  render() {
    const handlerButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open
        };
      });
    };
    return (
      <StyledSideNav>
        <UserInfo
          full_name={this.props.full_name}
          position={this.props.position}
        />
        <StyledNavMenu>
          <Button>Home</Button>
          <StyledButton onClick={handlerButtonClick}>Personal</StyledButton>
          {this.state.open && (
            <StyledDropdownContent>
              <StyledOL>
                <StyledA>Profile</StyledA>
                <StyledA>Payslips</StyledA>
                <StyledA>Team</StyledA>
                <StyledA>Infractions</StyledA>
                <StyledA>Leave Application</StyledA>
                <StyledA>Coaching Logs</StyledA>
                <StyledA>Evaluation</StyledA>
                <StyledA>Partner Discount</StyledA>
              </StyledOL>
            </StyledDropdownContent>
          )}
          <Button>Handbook</Button>
          <Button>Feedback</Button>
        </StyledNavMenu>
        <StyledFooter>
          <footer>© 2019 copyright nigga</footer>
        </StyledFooter>
      </StyledSideNav>
    );
  }
}
export default Sidedrawer;
