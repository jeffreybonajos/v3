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

class NewEvent extends React.Component {
    state = {
        title: null,
        start: null,
        end: null,
        url: null,
        type: null,
        branches: [],
        duration_start: null,
        duration_end: null,
    }

    componentDidMount () {
        this.props.onInitBranches();
      }

    handleChange = (event) => {
        if(event.target.type === 'checkbox'){
            const value = event.target.name;
            this.state.branches.push({
                value
            })
        } else {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            this.setState({
            [name]: value
        });
        }
      };

    handleSubmit = () => {
        event.preventDefault();
        let eventData = {};
        eventData = this.state;


        console.log(eventData);
        this.props.onSubmitEvent(eventData);
        this.props.modalClosed;
        
    }

    render(){
        const branches = this.props.initBranches;
        const checkboxs = branches.map(branch => (
            <StyledCheckBoxContainer name={this.state.branches}>
                <input type='checkbox' name={branch.branch} key={branch.branch_id}
                value={branch.branch} ref={branch.branch} onChange={this.handleChange}/>
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
                        required
                        onChange={this.handleChange}
                        />
                    {/* <StyledLabel>Event Date End: </StyledLabel> */}
                    <StyledInput 
                        type="date" 
                        name="end"
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
                        required
                        onChange={this.handleChange}
                        />
                </StyledInputContainer>

                <StyledInputContainer>
                    <StyledLabel>Event Type: 
                        <select name="type"  value={this.state.type} onChange={this.handleChange}>
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
                        required
                        onChange={this.handleChange}
                        />
                    <StyledInput 
                        type="time"
                        name="duration_end"
                        required
                        onChange={this.handleChange}
                        />
                </StyledInputContainer>
                
                <Button>Save</Button>
                
                </StyledForm>
                
                <Button clicked={this.props.modalClosed}>Close</Button>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      initBranches: state.home.initBranches,
    }
  }

const mapDispatchToProps = dispatch => {
return {
    onInitBranches: () => { dispatch(actions.getInitBranches())},
    onSubmitEvent: (eventData) => { dispatch(actions.postEvent(eventData))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);