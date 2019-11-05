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
const payroll = props => (
  <StyledContainer>
    <StyledTable>
      <tr>
        <StyledTh>Bank Account Number</StyledTh>
        <StyledTh>STATIC: 123456789</StyledTh>
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
        <StyledTd>STATIC: 100000</StyledTd>
      </tr>
      <tr>
        <StyledTd>Basic Pay</StyledTd>
        <StyledTd>STATIC: 100000</StyledTd>
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
        <StyledTd>STATIC: GRANTED HMO</StyledTd>
        <StyledTd>STATIC: SELECTED HMO</StyledTd>
        <StyledTd>STATIC: 0</StyledTd>
      </tr>
    </StyledTable>
    <StyledTable>
      <tr>
        <StyledTh colSpan="3">HMO Dependent</StyledTh>
      </tr>
      <tr>
        <StyledTd>Granted HMO</StyledTd>
        <StyledTd>Selected HMO</StyledTd>
        <StyledTd>Monthly Payable</StyledTd>
      </tr>
      <tr>
        <StyledTd>STATIC: GRANTED HMO</StyledTd>
        <StyledTd>STATIC: SELECTED HMO</StyledTd>
        <StyledTd>STATIC: 0</StyledTd>
      </tr>
      <tr>
        <StyledReminder>
          Loans are pre computed per cut off deduction amount already
        </StyledReminder>
      </tr>
    </StyledTable>
    <StyledTable>
      <tr>
        <StyledTh>Loans</StyledTh>
      </tr>
    </StyledTable>
  </StyledContainer>
);

export default payroll;
