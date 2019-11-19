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
class TransactionHistory extends React.Component {
  render() {
    const userTransactions = ({} = this.props.userTransactions || {});
    return (
      <StyledContainer>
        <StyledTable>
          { userTransactions.map(userTransaction => (
          <tr key={userTransaction.id}>
            <StyledTd >We would like to inform you that an amount of {userTransaction.amount} has been credited to your account as tax refund.</StyledTd>
            <StyledTd >{userTransaction.date_read}</StyledTd>
            <StyledTd >{userTransaction.date_created}</StyledTd>
          </tr>
          ))}
        </StyledTable>
        
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    userTransactions: state.user.userTransactions
  }
}

export default connect(mapStateToProps)(TransactionHistory);
