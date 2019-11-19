import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

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
class profile extends React.Component {

  render(){
    const userProfile = ({} = this.props.userProfile || {});
    const userPosition = ({} = this.props.userPosition || {});
    return (
      <StyledContainer>
        <StyledTable>
          <tr>
            <StyledTh colSpan="2">Personal Information</StyledTh>
          </tr>
          <tr>
            <StyledTd>Name</StyledTd>
            <StyledTd>{userProfile.full_name}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Gender</StyledTd>
            <StyledTd>{userProfile.gender}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Address</StyledTd>
            <StyledTd>{userProfile.registered_address}</StyledTd>
          </tr>
          <tr>
            <StyledTd> Blood Type</StyledTd>
            <StyledTd>{userProfile.blood_type}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Marital Status</StyledTd>
            <StyledTd>
              {userProfile.marital_status}
            </StyledTd>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh colSpan="2">Company Information</StyledTh>
          </tr>
          <tr>
            <StyledTd>OS EMAIL</StyledTd>
            <StyledTd>{userProfile.email}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Branch/Site</StyledTd>
            <StyledTd>{userProfile.branch}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Department</StyledTd>
            <StyledTd>{userProfile.department}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Team</StyledTd>
            <StyledTd>{userProfile.team_name}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Position</StyledTd>
            <StyledTd>{userPosition.position}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Status</StyledTd>
            <StyledTd>{userProfile.status}</StyledTd>
          </tr>
          <tr>
            <StyledTd>OSNet Account Type</StyledTd>
            <StyledTd>{userProfile.role_type}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Date Started</StyledTd>
            <StyledTd>{userProfile.date_started}</StyledTd>
          </tr>
        </StyledTable>
        <StyledTable>
          <tr>
            <StyledTh colSpan="2">Government ID Information</StyledTh>
          </tr>
          <tr>
            <StyledTd>HDMF</StyledTd>
            <StyledTd>{userProfile.pag_ibig}</StyledTd>
          </tr>
          <tr>
            <StyledTd>PHIC</StyledTd>
            <StyledTd>{userProfile.phic}</StyledTd>
          </tr>
          <tr>
            <StyledTd>SSS</StyledTd>
            <StyledTd>{userProfile.sss}</StyledTd>
          </tr>
          <tr>
            <StyledTd>TIN</StyledTd>
            <StyledTd>{userProfile.tin}</StyledTd>
          </tr>
        </StyledTable>
      </StyledContainer>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    userProfile: state.user.userProfile,
    userPosition: state.user.userPosition,
  }
}

export default connect(mapStateToProps)(profile);
