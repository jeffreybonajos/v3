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
const healthTracker = props => (
  <StyledContainer>
    <StyledTable>
      <tr>
        <StyledTh colSpan="4">Vaccinations</StyledTh>
      </tr>
      <tr>
        <StyledTd>Vaccine Name</StyledTd>
        <StyledTd>Date of Shot</StyledTd>
        <StyledTd>Next Shot</StyledTd>
        <StyledTd>Status</StyledTd>
      </tr>
      <tr>
        <StyledTd>STATIC: Vaccine Name</StyledTd>
        <StyledTd>STATIC: Date of Shot</StyledTd>
        <StyledTd>STATIC: Next Shot</StyledTd>
        <StyledTd>STATIC: Status</StyledTd>
      </tr>
    </StyledTable>
    <StyledTable>
      <tr>
        <StyledTh colSpan="3">Result Documents</StyledTh>
      </tr>
      <tr>
        <StyledTd>Date of Result</StyledTd>
        <StyledTd>Type</StyledTd>
        <StyledTd>Description</StyledTd>
      </tr>
      <tr>
        <StyledTd>STATIC: Date of Result</StyledTd>
        <StyledTd>STATIC: Type</StyledTd>
        <StyledTd>STATIC: Description</StyledTd>
      </tr>
    </StyledTable>
    <StyledTable>
      <tr>
        <StyledTh colSpan="7">Nurse Station Visits</StyledTh>
      </tr>
      <tr>
        <StyledTd>Date</StyledTd>
        <StyledTd>Complaints</StyledTd>
        <StyledTd>Findings</StyledTd>
        <StyledTd>Intervention</StyledTd>
        <StyledTd>Nurse-In-Charge</StyledTd>
        <StyledTd>Action Taken</StyledTd>
        <StyledTd>Notes</StyledTd>
      </tr>
      <tr>
        <StyledTd>Static: Date</StyledTd>
        <StyledTd>Static: Complaints</StyledTd>
        <StyledTd>Static: Findings</StyledTd>
        <StyledTd>Static: Intervention</StyledTd>
        <StyledTd>Static: Nurse-In-Charge</StyledTd>
        <StyledTd>Static: Action Taken</StyledTd>
        <StyledTd>Static: Notes</StyledTd>
      </tr>
    </StyledTable>
  </StyledContainer>
);

export default healthTracker;
