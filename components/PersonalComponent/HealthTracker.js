import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'

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
class healthTracker extends React.Component {
  render() {
    const userHealthTrackers = ({} = this.props.userHealthTracker || {});
    const userResultDocuments = ({} = this.props.userResultDocument || {});
    const userNurseVisits = ({} = this.props.userNurseVisit || {});

    return (
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
      { userHealthTrackers.map(userHealthTracker => (
      <tr key={userHealthTracker.id}>
        <StyledTd >{userHealthTracker.name}</StyledTd>
        <StyledTd >{userHealthTracker.date_shot}</StyledTd>
        <StyledTd >{userHealthTracker.date_next_shot}</StyledTd>
        <StyledTd >{userHealthTracker.status_name}</StyledTd>
      </tr>
      ))}
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
      {userResultDocuments.map(userResultDocument => (
        <tr key={userResultDocument.id}>
          <StyledTd>{userResultDocument.result_date}</StyledTd>
          <StyledTd>{userResultDocument.type}</StyledTd>
          <StyledTd>{userResultDocument.description}</StyledTd>
        </tr>
      ))}
        
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
      {userNurseVisits.map(userNurseVisit => (
        <tr>
        <StyledTd>{userNurseVisit.date_created.toISOString()}</StyledTd>
        <StyledTd>{userNurseVisit.complain}</StyledTd>
        <StyledTd>{userNurseVisit.name}</StyledTd>
        <StyledTd>{userNurseVisit.intervention}</StyledTd>
        <StyledTd>{userNurseVisit.full_name}</StyledTd>
        <StyledTd>{userNurseVisit.action}</StyledTd>
        <StyledTd>{userNurseVisit.docs_note}</StyledTd>
      </tr>
      ))}
    </StyledTable>
  </StyledContainer>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    userHealthTracker: state.user.userHealthTracker,
    userResultDocument: state.user.userResultDocument,
    userNurseVisit: state.user.userNurseVisit,
  }
}


export default connect(mapStateToProps)(healthTracker);
