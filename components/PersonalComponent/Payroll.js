import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux';

const StyledContainer = styled.div`
  margin-top: 20px;
  padding: 5px;
`;
const StyledTable = styled.table`
  width: 100%;
  border: solid 1px #ddeeee;
  border-collapse: collapse;
  border-spacing: 0;
`;
const StyledTh = styled.th`
  background-color: #ff8533;
  border: solid 1px #f2f2f2;
  color: white;
  padding: 10px;
  text-align: left;
  border: none;
`;
const StyledTd = styled.td`
  border: solid 1px #f2f2f2;
  color: #333;
  padding: 10px;
  text-shadow: 1px 1px 1px #fff;
`;
const StyledReminder = styled.span`
  color: red;
  font-style: italic;
  font-size: 10px;
`;
class Payroll extends React.Component {
  render() {
    const userProfile = ({} = this.props.userProfile || {});
    const userSalaryDetails = ({} = this.props.userSalaryDetails || {});
    const userIncentives = ({} = this.props.userIncentives || {});
    const userHMOplan = ({} = this.props.userHMOplan || {});
    const userHMOdependents = ({} = this.props.userHMOdependent || {});
    const userLoans = ({} = this.props.userLoans || {});

    return (
      <StyledContainer>
        <StyledTable>
          <tr>
            <StyledTh>Bank Account Number</StyledTh>
            <StyledTh>{userProfile.bank_account_number}</StyledTh>
          </tr>
          <tr>
            <StyledReminder>
              All rates are monthly and will be processed every payroll unless
              specified
            </StyledReminder>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh colSpan="2">Compensation Details</StyledTh>
          </tr>
          <tr>
            <StyledTd>Gross Income</StyledTd>
            <StyledTd>{userSalaryDetails.monthly_gross}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Basic Pay</StyledTd>
            <StyledTd>{userSalaryDetails.basic}</StyledTd>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh>Incentives</StyledTh>
            <StyledTh>{userIncentives.amount}</StyledTh>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh colSpan="3">HMO Principal</StyledTh>
          </tr>
          <tr>
            <StyledTd>Granted HMO</StyledTd>
            <StyledTd>Selected HMO</StyledTd>
            <StyledTd>Monthly Payable</StyledTd>
          </tr>
          <tr>
            <StyledTd>{userHMOplan.hmo_plan}</StyledTd>
            <StyledTd>{userHMOplan.selected_hmo_plan}</StyledTd>
            <StyledTd>{userHMOplan.hmo_monthly}</StyledTd>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh colSpan="3">HMO Dependent</StyledTh>
          </tr>
          <tr>
            <StyledTd>Name</StyledTd>
            <StyledTd>Selected HMO</StyledTd>
            <StyledTd>Monthly Payable</StyledTd>
          </tr>
          { userHMOdependents.map(userHMOdependent => (
          <tr key={userHMOdependent.id}>
            <StyledTd>{userHMOdependent.last_name}, {userHMOdependent.first_name}</StyledTd>
            <StyledTd>{userHMOdependent.hmo_plan}</StyledTd>
            <StyledTd>{userHMOdependent.hmo_monthly}</StyledTd>
          </tr>
          ))}
            
          <tr>
            <StyledReminder>
              Loans are pre computed per cut off deduction amount already
            </StyledReminder>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh>Loans</StyledTh>
            <StyledTh></StyledTh>
          </tr>
          { userLoans.map(userLoan => (
          <tr key={userLoan.id}>
            <StyledTd>{userLoan.loan_type_name}</StyledTd>
            <StyledTd>{userLoan.amount_due}</StyledTd>
          </tr>
          ))}
        </StyledTable>
      </StyledContainer>
    )
  }
}
 
const mapStateToProps = state => {
  return {
    userProfile: state.user.userProfile,
    userSalaryDetails: state.user.userSalaryDetails,
    userIncentives: state.user.userIncentives,
    userHMOplan: state.user.userHMOplan,
    userHMOdependent: state.user.userHMOdependent,
    userLoans: state.user.userLoans
  }
}

export default connect(mapStateToProps)(Payroll);
