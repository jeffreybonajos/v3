import React from "react";
import styled from "styled-components";

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

const TransactionOwner = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

const DateReadContainer = styled.div`
  display: inline-block;
  width: 50%;
`;

const DateCreatedContainer = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
`;

const TransactionHistory = ({ userTransactions, userProfile }) => {
  const dateCreated = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(userTransactions.date_created);
  let dateRead = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(userTransactions.date_read);

  return (
    <StyledContainer>
      <StyledTable>
        {userTransactions.map(userTransaction => (
          <tr key={userTransaction.id}>
            <StyledTd >
              <TransactionOwner>Luy, Christine Therese F.</TransactionOwner><br />
              We would like to inform you that an amount of {userTransaction.amount} has been credited to your account as tax refund.
              <br /><br /><br />
              <DateReadContainer>{dateRead}</DateReadContainer><DateCreatedContainer>{dateCreated}</DateCreatedContainer>
            </StyledTd>
          </tr>
        ))}
      </StyledTable>

    </StyledContainer>
  )
}

  ;

export default TransactionHistory;
