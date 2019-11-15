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

   
const healthTracker = ({vaccine, resultsDocuments, nurseVisitAction}) => {
console.log(resultsDocuments)
  //  const data = [props];
  //  const newdata = data.concat(data)
  //  console.log(newdata)

  // var holder = Object.keys(props).map(i => props[i]);
 
  // var keys = holder.shift();
  // holder = holder.map(function(row){
  //   return keys.reduce(function(obj, key, i){
  //     obj[key] = row[i];
  //     return obj;
  //   },{});
  // });

//   var keys = holder.shift();
//  holder = holder.map(function (row) {
//    return keys.reduce(function (obj, key, i){
//      obj[key] = row[i];
//      return obj;
//    }, {});
//  });
    
 
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
     
     
         {vaccine.map(uservaccine =>(
           <tr>
         <StyledTd>{uservaccine.name}</StyledTd>
         <StyledTd>{uservaccine.date_shot}</StyledTd>
         <StyledTd>{uservaccine.date_next_shot}</StyledTd>
         <StyledTd>{uservaccine.status_name}</StyledTd>
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
      {resultsDocuments.map(resultDocument => (
        <tr>
      <StyledTd>{resultDocument.result_date}</StyledTd>
      <StyledTd>{resultDocument.type}</StyledTd>
      <StyledTd>{resultDocument.description}</StyledTd>
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
      {nurseVisitAction.map(userNurseVisit => (
        <tr>
        <StyledTd>{userNurseVisit.date_created}</StyledTd>
        <StyledTd>{userNurseVisit.complain}</StyledTd>
      <StyledTd>{userNurseVisit.name}</StyledTd>
      <StyledTd>{userNurseVisit.intervention}</StyledTd>
      <StyledTd>{userNurseVisit.nurse_fullname}</StyledTd>
      <StyledTd>{userNurseVisit.action}</StyledTd>
      <StyledTd>{userNurseVisit.note}</StyledTd>
      </tr>
      ))}
      
    </StyledTable>
  </StyledContainer>
  );
};

export default healthTracker;