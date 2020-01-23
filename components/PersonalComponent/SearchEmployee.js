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
class searchemployee extends React.Component {
   state = {
     genderHolder: '',
     branchHolder: ''
   }
  render(){
   
    const searchSpecificEmployee = ({} = this.props.searchSpecificEmployee|| {});
    // console.log('data', data)
    
    if(searchSpecificEmployee.gender == 1){
      this.state.genderHolder = "Male";
    }
    if(searchSpecificEmployee.gender == 2){
      this.state.genderHolder = "Female"
    }
    if(searchSpecificEmployee.gender == 3){
      this.state.genderHolder = "Widow"
    }

    if(searchSpecificEmployee.branch_site == 1) {
      this.state.branchHolder = "Araullo"
    }
    if(searchSpecificEmployee.branch_site == 2) {
      this.state.branchHolder = "Landco"
    }
    if(searchSpecificEmployee.branch_site == 3) {
      this.state.branchHolder = "Hai"
    }
    if(searchSpecificEmployee.branch_site == 4) {
      this.state.branchHolder = "Tavera"
    }
    if(searchSpecificEmployee.branch_site == 5) {
      this.state.branchHolder = "Homebased/Offsite"
    }
    if(searchSpecificEmployee.branch_site == 6) {
      this.state.branchHolder = "MTS"
    }
    if(searchSpecificEmployee.branch_site == 7) {
      this.state.branchHolder = "Regus"
    }
    return (
     
      <StyledContainer>
        <StyledTable>
            <tbody>
             
          <tr>
            <StyledTh colSpan="2">Personal Information</StyledTh>
          </tr>
          <tr>
            <StyledTd>Name:</StyledTd>
            <StyledTd>{searchSpecificEmployee.full_name}</StyledTd>
          </tr>

          <tr>
            <StyledTd>Gender:</StyledTd>
            <StyledTd>{this.state.genderHolder}</StyledTd>
          </tr>
            {/* <tr>
              <StyledTd>Address:</StyledTd>
              <StyledTd>{searchSpecificEmployee.registered_address}</StyledTd>
            </tr>
            <tr>
              <StyledTd> Blood Type:</StyledTd>
              <StyledTd>{searchSpecificEmployee.blood_type}</StyledTd>
            </tr>
            <tr>
              <StyledTd>Marital Status:</StyledTd>
              <StyledTd>
                {searchSpecificEmployee.marital_status}
              </StyledTd>
            </tr> */}
          </tbody>
        </StyledTable>
        <StyledTable>
            <tbody>
          <tr>
            <StyledTh colSpan="2">Company Information</StyledTh>
          </tr>
          <tr>
            <StyledTd>OS EMAIL:</StyledTd>
            <StyledTd>{searchSpecificEmployee.email}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Branch/Site:</StyledTd>
            <StyledTd>{this.state.branchHolder}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Department:</StyledTd>
            <StyledTd>{searchSpecificEmployee.department}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Team:</StyledTd>
            <StyledTd>{searchSpecificEmployee.team_name}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Position:</StyledTd>
            <StyledTd>{searchSpecificEmployee.position}</StyledTd>
          </tr>
          {/* <tr>
            <StyledTd>Status:</StyledTd>
            <StyledTd>{searchSpecificEmployee.status}</StyledTd>
          </tr>
          <tr>
            <StyledTd>OSNet Account Type:</StyledTd>
            <StyledTd>{searchSpecificEmployee.role_type}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Date Started:</StyledTd>
            <StyledTd>{searchSpecificEmployee.date_started}</StyledTd>
          </tr> */}
          </tbody>
        </StyledTable>
        {/* <StyledTable>
            <tbody>
          <tr>
            <StyledTh colSpan="2">In Case of Emergency</StyledTh>
          </tr>
          <tr>
            <StyledTd>Please Contact:</StyledTd>
            <StyledTd>{searchSpecificEmployee.emergency_contact_name}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Relationship:</StyledTd>
            <StyledTd>{searchSpecificEmployee.emergency_contact_relationship}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Address:</StyledTd>
            <StyledTd>{searchSpecificEmployee.emergency_contact_address}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Contact#:</StyledTd>
            <StyledTd>{searchSpecificEmployee.emergency_contact_number}</StyledTd>
          </tr>
          </tbody>
        </StyledTable> */}
        
      </StyledContainer>
    )
  }
}
  
const mapStateToProps = state => {
  return {
   
    searchSpecificEmployee: state.auth.searchSpecificEmployee
  }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         SearchEmployee: () => dispatch(actions.auth(username,password))
//     };
//   };
  

export default connect(mapStateToProps)(searchemployee);
