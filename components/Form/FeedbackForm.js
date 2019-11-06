import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  background: red;
  width: 30%;
`;
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
const StyledHeader = styled.div`
  background: #ff8533;
  text-align: center;
  color: white;
  padding: 10px;
`;

class FeedbackForm extends React.Component {
  state = {
    subject: "",
    feature: "",
    feedback: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <StyledContainer>
        <StyledHeader>
          <span>Write a feedback</span>
        </StyledHeader>
        <form>
          <div>
            <StyledInput
              type="text"
              name="subject"
              placeholder="Enter a subject"
              required
              onChange={this.handleChange}
              textAlign="center"
            />
          </div>
          <div>
            <select name="feature">
              <option value="apply_leave">Apply Leave</option>
              <option value="feedback">Feedback</option>
              <option value="home">Home</option>
              <option value="my_infraction">My Infraction</option>
              <option value="my_payslip">My Payslip</option>
              <option value="my_profile">My Profile</option>
              <option value="my_team">My Team</option>
            </select>
          </div>
          <div>
            <textarea rows="5" cols="40" name="feedback">
              Type your feedback here
            </textarea>
          </div>
          <StyledButton type="submit">Submit Feedback</StyledButton>
        </form>
      </StyledContainer>
    );
  }
}

export default FeedbackForm;
