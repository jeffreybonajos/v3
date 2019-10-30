import React, { Component } from "react";
import Link from "next/link";
import Button from "../UI/Button";
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
const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;
const StyledDropdownContent = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  position: absolute;
  width: 150px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

class NavigationItems extends Component {
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
      <nav>
        <StyleUL>
          <StyledLI>
            <StyledDropdown ref={this.container}>
              <StyledA onClick={handlerButtonClick}>
                {this.props.full_name}
              </StyledA>
              {this.state.open && (
                <StyledDropdownContent id="myDropdown">
                  <Link href="/home">
                    <StyledA>Personal</StyledA>
                  </Link>
                  <StyledA onClick={logOutUser}>Logout</StyledA>
                </StyledDropdownContent>
              )}
            </StyledDropdown>
          </StyledLI>
        </StyleUL>
      </nav>
    );
  }
}

export default NavigationItems;
