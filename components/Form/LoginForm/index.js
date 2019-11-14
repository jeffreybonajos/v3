import Router from "next/router";
import { connect } from 'react-redux'


import { loginUser } from "../../../lib/Auth";
import Modal from "../../UI/Modal";
import styled from "styled-components";
import * as actions from '../../../store/actions/index';

const StyledInput = styled.input`
  font-family: 'Source Sans Pro', sans-serif;
  outline: 0;
  background: rgba(255,255,255,0.2);
  width: 92%;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.7);
  border-radius: 9px;
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
  &::placeholder,
  &::-webkit-input-placeholder {
    color: rgba(255,255,255,0.7);
  }
`;
const StyledButton = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  outline: 0;
  background: white;
  width: 92%;
  border: 0;
  border-radius: 9px;
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
  font-family: 'Source Sans Pro', sans-serif;
`;

const RedirectMsg = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  color: #FFFCCC;
  font-size: 11px;
`;

const CopyrightMsg = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 18px;
`;

const BestViewMsg = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  color: #676767;
  font-size: 13px;
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
        <RedirectMsg>After login you will be redirected to https://awesomeos.org/</RedirectMsg><br /><br /><br />
        <CopyrightMsg>© 2019 OSNet. All Rights Reserved.</CopyrightMsg><br />
        <BestViewMsg>This site is best viewed in Chrome, Firefox or Safari.<br />
          Make sure JavaScript is always enabled.</BestViewMsg>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.auth(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
