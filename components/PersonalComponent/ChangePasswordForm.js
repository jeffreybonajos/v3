import styled from "styled-components";

const StyledInput = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 5px 0 15px 0;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f8f8f8;
  width: 35%;
  border: 0;
  padding: 10px;
  color: #6b6b6b;
  font-size: 12px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  float: right;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
const StyledTitle = styled.span`
font-size: 14px
font-family: "Raleway", sans-serif;
`;
const StyledDiv = styled.div`
  padding: 10px;
  float: left;
  margin: 20px 5px 0 5px;
  width: 50%;
  margin-bottom: 50px;
`;

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
    isLoading: false,
    invalidCredentials: false
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <StyledDiv>
        <h2>Change Password</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <StyledTitle>Current Password</StyledTitle>
            <br />
            <StyledInput
              type="password"
              name="current_password"
              placeholder="Type your current password"
              required
              onChange={this.handleChange}
              textAlign="center"
            />
          </div>
          <div>
            <StyledTitle>New Password</StyledTitle>
            <br />
            <StyledInput
              type="password"
              name="new_password"
              placeholder="New osnet password"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <StyledTitle>Confirm New Password</StyledTitle>
            <br />
            <StyledInput
              type="password"
              name="confirm_new_password"
              placeholder="Re-type your new osnet password"
              required
              onChange={this.handleChange}
            />
          </div>
          <StyledButton type="submit">Update Password</StyledButton>
        </form>
      </StyledDiv>
    );
  }
}

export default LoginForm;
