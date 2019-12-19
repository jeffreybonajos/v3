import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux'

import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/index';

const StyledInput = styled.input`
font-family: "Roboto",sans-serif;
outline: 0;
background: #f2f2f2;
width: auto;
border: 0;
margin: 0 0 5px 5px;
padding: 5px;
box-sizing: border-box;
font-size: 14px;
-webkit-transition-duration: 0.4s;
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
text-align: left;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;

const StyledLabel = styled.label`
    display: inline-block;
    padding: 0 10px 0 0;
`;

const StyledForm = styled.form`
  padding: 10px;
`;

const StyledInputContainer = styled.div`
  margin: 10px 0;
`;
const StyledCheckBoxContainer = styled.div`
width: -webkit-fill-available;
border-radius: 0px;
border-color: #d2d6de;
background-color: #fff;
border-style: solid;
border-width: 1px;
`;

const StyledDateContainer = styled.div`
  width: 100%;
`;

class EditEvent extends React.Component {
    state = {
        title: "",
        start: "",
        end: "",
        url: "",
        type: "",
        branches: [],
        duration_start: "",
        duration_end: "",
        editDatas: null,
        checkedBranch: [],
        isDeleting: false
    }

    componentDidMount () {
        let eventData = {};
      eventData = this.props.dataToEdit;
     console.log(eventData);
     this.setState({
         ...eventData
     })
     console.log(eventData);
    }

    handleChange = (event) => {
       
    }
    handleEditSubmit = () => {
       
    }
    handleDeleteEvent = deleteEvent => {
        console.log(deleteEvent.calendar_id)
        this.props.onDeleteEvent(deleteEvent.calendar_id);
        this.props.modalClosed;
    }

    checkItem = (item) => {

    }

    render(){
        const {title,start,end,url,type,duration_start,duration_end} = this.state;
        const isDeleting = this.state
        const editDatas = ({} = this.props.dataToEdit || {});
        const eventLocation = ([] = this.props.eventLocation || []);

        const branches = this.props.initBranches;
        const checkboxs = branches.map(branch => (
            <StyledCheckBoxContainer name={this.state.branches}>
                <input type='checkbox' name={branch.branch_id}  key={branch.branch_id}
                value={branch.branch_id} ref={branch.branch_id} onChange={this.handleChange}/>
                <label>{branch.branch}</label>
            </StyledCheckBoxContainer>
        ))
        
        return (
            <>
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledInputContainer>
                    <StyledLabel>Event Title: </StyledLabel>
                    <StyledInput
                        type="text"
                        name="title"
                        value={title}
                        required
                        onChange={this.handleChange}
                     />
                </StyledInputContainer>

                <StyledInputContainer>
                    <StyledDateContainer>
                    <StyledLabel>Event Date: </StyledLabel>
                    <StyledInput 
                        type="date"
                        name="start"
                        value={editDatas.start}
                        required
                        onChange={this.handleChange}
                        />
                    {/* <StyledLabel>Event Date End: </StyledLabel> */}
                    <StyledInput 
                        type="date" 
                        name="end"
                        value={editDatas.end}
                        required
                        onChange={this.handleChange}
                        />
                    </StyledDateContainer>
                </StyledInputContainer>
                
                
                <StyledInputContainer>
                    <StyledLabel>Event URL: </StyledLabel>
                    <StyledInput 
                        type="url"
                        name="url"
                        value={editDatas.url}
                        required
                        onChange={this.handleChange}
                        />
                </StyledInputContainer>

                <StyledInputContainer>
                    <StyledLabel>Event Type: 
                        <select name="type"  value={editDatas.type}onChange={this.handleChange}>
                            <option value="event">Event</option>
                            <option value="nid">NID</option>
                        </select>
                    </StyledLabel>
                </StyledInputContainer>

                <StyledInputContainer>
                    <StyledLabel>Locations</StyledLabel>
                    <StyledCheckBoxContainer>
                        {checkboxs}
                    </StyledCheckBoxContainer>
                </StyledInputContainer>

                <StyledInputContainer>
                    <label>Event Duration: </label>
                    <StyledInput 
                        type="time"
                        name="duration_start"
                        value={editDatas.duration_start}
                        onChange={this.handleChange}
                        />
                    <StyledInput 
                        type="time"
                        name="duration_end"
                        value={editDatas.duration_end}
                        onChange={this.handleChange}
                        />
                </StyledInputContainer>
                
                <Button>Save</Button>
                </StyledForm>
                <Button clicked={() => this.handleDeleteEvent(editDatas)}>Delete</Button>
                <Button clicked={this.props.modalClosed}>Close</Button>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      initBranches: state.home.initBranches,
      eventLocation: state.home.eventLocation
    }
}
const mapDispatchToProps = dispatch => {
return {
    onDeleteEvent: (calendar_id) => { dispatch(actions.deletePostEvent(calendar_id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);