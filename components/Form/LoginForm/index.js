import Router from "next/router";
import { loginUser } from "../../../lib/Auth";
import Modal from "../../UI/Modal";
import { connect } from 'react-redux'


import { loginUser } from "../../lib/Auth";
import Modal from "../UI/Modal";
import styled from "styled-components";
import * as actions from '../../store/actions/index';

const StyledInput = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 50%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-align: center;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: white;
  width: 50%;
  border: 0;
  padding: 15px;
  color: #fd8949;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
const StyledImg = styled.img`
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
`;
const StyledErrorButton = styled.button`
  background: rgb(202, 60, 60);
  width: 100px;
  height: 50px;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
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
const StyledErrorMsg = styled.h1`
  font-family: "Roboto", sans-serif;
`;
class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
    isLoading: false,
    invalidCredentials: false
  };

  handleModalClose = () => {
    this.setState({ invalidCredentials: false });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { username, password } = this.state;

    event.preventDefault();
    this.setState({ error: "", isLoading: true });
    loginUser(username, password)
      .then(() => {
        Router.push("/");
      })
      .catch(this.showError);
  };

  showError = () => {
    this.setState({ isLoading: false, invalidCredentials: true });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.username, this.state.password);
  
  }

  render() {
    const { error, isLoading } = this.state;
    let invalidCredentialsError = null;
    invalidCredentialsError = (
      <div>
        <StyledImg src="/static/error.png" alt="Error" />
        <StyledErrorMsg>WRONG USERNAME OR PASSWORD</StyledErrorMsg>
        <br />
        <StyledErrorButton onClick={this.handleModalClose}>
          OK
        </StyledErrorButton>
      </div>
    );
    return (
      <>
        <Modal
          show={this.state.invalidCredentials}
          modalClosed={this.handleModalClose}
        >
          {invalidCredentialsError}
        </Modal>
        <form onSubmit={this.submitHandler}>
          <div>
            <StyledInput
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={this.handleChange}
              textAlign="center"
            />
          </div>
          <div>
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleChange}
            />
          </div>
          <StyledButton disabled={isLoading} type="submit">
            {isLoading ? "Logging in" : "Login"}
          </StyledButton>
          {error && <div>{error}</div>}
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.auth(username,password))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
