import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux'

import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/index';
import Checkbox from '../UI/Checkbox';

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
        title: '',
        start: '',
        end: '',
        url: '',
        type: '',
        branches: [],
        duration_start: '',
        duration_end: '',
    }
    handleChange = (event) => {
        let inputValue = event.target.value;
        if(event.target.type === 'checkbox'){
            inputValue = event.target.value;
            this.state.branches.push({
                branch_id: inputValue
            })
        } else {
            inputValue = event.target.value
        }
        console.log(inputValue)
        this.setState({
            [event.target.name]: inputValue
        });
        console.log(this.state)
        }

    handleSubmit = (event) => {
        event.preventDefault();
        let eventDatas = this.props.eventToEdit.map(data => {
            this.setState({
                data
            })
        })
    console.log(eventDatas)
    }
    
    render(){
        console.log(this.props.eventToEdit)
        const { calendar_id, title,start,end,url,type,duration_start,duration_end, branches }  = ({} = this.props.eventToEdit || {});
        const {handleEditSubmit, handleDeleteEvent, modalClosed, handleEditBranchChange} = this.props;
        // const eventLocation = ([] = this.props.eventLocation || []);
        console.log(branches);
        const initBranches = this.props.initBranches;
        const checkboxs = initBranches.map(branch => (
            <StyledCheckBoxContainer>
                
                {/* <Checkbox label={branch.branch_id} clicked={handleEditBranchChange} /> */}
                <input type='checkbox' name={branch.branch}  key={branch.branch_id} 
                 value={branch.branch_id} onChange={this.handleChange} />
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
                            onChange={this.handleEditChange}
                        />
                    </StyledInputContainer>

                    <StyledInputContainer>
                        <StyledDateContainer>
                        <StyledLabel>Event Date: </StyledLabel>
                        <StyledInput 
                            type="date"
                            name="start"
                            value={start}
                            required
                            onChange={this.handleEditChange}
                            />
                        {/* <StyledLabel>Event Date End: </StyledLabel> */}
                        <StyledInput 
                            type="date" 
                            name="end"
                            value={end}
                            required
                            onChange={this.handleEditChange}
                            />
                        </StyledDateContainer>
                    </StyledInputContainer>
                    
                    
                    <StyledInputContainer>
                        <StyledLabel>Event URL: </StyledLabel>
                        <StyledInput 
                            type="url"
                            name="url"
                            value={url}
                            required
                            onChange={this.handleEditChange}
                            />
                    </StyledInputContainer>

                    <StyledInputContainer>
                        <StyledLabel>Event Type: 
                            <select name="type"  value={type} onChange={this.handleEditChange}>
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
                            value={duration_start}
                            onChange={this.handleEditChange}
                            />
                        <StyledInput 
                            type="time"
                            name="duration_end"
                            value={duration_end}
                            onChange={this.handleEditChange}
                            />
                </StyledInputContainer>
                
                <Button>Save</Button>
                </StyledForm>
                <Button clicked={() => handleDeleteEvent(calendar_id)}>Delete</Button>
                <Button clicked={modalClosed}>Close</Button>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      initBranches: state.home.initBranches,
      eventToEdit: state.home.eventToEdit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onEventToEdit: (calendar_id) => { dispatch(actions.getEventToEdit(calendar_id))}
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);