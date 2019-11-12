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
`;
const StyledTd = styled.td`
  border: solid 1px #f2f2f2;
  color: #333;
  padding: 10px;
  text-shadow: 1px 1px 1px #fff;
`;
const profile = props => (
  <StyledContainer>
    <StyledTable>
      <tr>
        <StyledTh colSpan="2">Personal Information</StyledTh>
      </tr>
      <tr>
        <StyledTd>Name</StyledTd>
        <StyledTd>{props.full_name}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Gender</StyledTd>
        <StyledTd>{props.gender}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Address</StyledTd>
        <StyledTd>{props.address}</StyledTd>
      </tr>
      <tr>
        <StyledTd> Blood Type</StyledTd>
        <StyledTd>{props.blood_type}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Marital Status</StyledTd>
        <StyledTd>
          {props.marital_status}
        </StyledTd>
      </tr>
    </StyledTable>
    <StyledTable>
      <tr>
        <StyledTh colSpan="2">Company Information</StyledTh>
      </tr>
      <tr>
        <StyledTd>OS EMAIL</StyledTd>
        <StyledTd>{props.email}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Branch/Site</StyledTd>
        <StyledTd>{props.branch_site}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Department</StyledTd>
        <StyledTd>{props.department}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Team</StyledTd>
        <StyledTd>{props.team_name}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Position</StyledTd>
        <StyledTd>{props.position}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Status</StyledTd>
        <StyledTd>{props.status}</StyledTd>
      </tr>
      <tr>
        <StyledTd>OSNet Account Type</StyledTd>
        <StyledTd>{props.account_type}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Date Started</StyledTd>
        <StyledTd>{props.date_started}</StyledTd>
      </tr>
    </StyledTable>
    <StyledTable>
      <tr>
        <StyledTh colSpan="2">Government ID Information</StyledTh>
      </tr>
      <tr>
        <StyledTd>HDMF</StyledTd>
        <StyledTd>{props.hdmf}</StyledTd>
      </tr>
      <tr>
        <StyledTd>PHIC</StyledTd>
        <StyledTd>{props.phic}</StyledTd>
      </tr>
      <tr>
        <StyledTd>SSS</StyledTd>
        <StyledTd>{props.sss}</StyledTd>
      </tr>
      <tr>
        <StyledTd>TIN</StyledTd>
        <StyledTd>{props.tin}</StyledTd>
      </tr>
    </StyledTable>
  </StyledContainer>
);

export default profile;
