import Router from "next/router";
import { loginUser } from "../../lib/Auth";
import styled from "styled-components";

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

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
    isLoading: false
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

  showError = err => {
    console.error("error", err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: false });
  };

  render() {
    const { error, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <StyledInput
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            textAlign="center"
          />
        </div>
        <div>
          <StyledInput
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <StyledButton disabled={isLoading} type="submit">
          {isLoading ? "Logging in" : "Login"}
        </StyledButton>
        {error && <div>{error}</div>}
      </form>
    );
  }
}

export default LoginForm;
