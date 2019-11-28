import React from 'react';
import styled from 'styled-components';


import Input from '../UI/Input';
import Button from '../UI/Button'

const StyledDiv = styled.div`
  margin: 0px
  width: 100%;
`;

class AddEvent extends React.Component {
    state = {
        eventForm: {
            eventTitle: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Event Title'
                },
                value: ''
            },
            eventDateFrom: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'Event Date From'
                },
                value: ''
            },
            eventDateTo: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'Event Date To'
                },
                value: ''
            },
            eventUrl: {
                elementType: 'input',
                elementConfig: {
                    type: 'url',
                    placeholder: 'Event Url'
                },
                value: ''
            },
            eventType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'event', displayValue: 'Event'},
                        {value: 'nid', displayValue: 'NID'}
                    ]
                },
                value: ''
            },
            eventLocation: {
                elementType: 'checkbox',
                elementConfig: {
                    options: [
                        {value: 'hai', displayValue: 'Hai'},
                        {value: 'landco', displayValue: 'Landco'},
                        {value: 'taver', displayValue: 'Tavera'},
                    ]
                },
                value: ''
            },
            eventDurationTimeIn: {
                elementType: 'input',
                elementConfig: {
                    type: 'time',
                    placeholder: 'Event Duration In'
                },
                value: ''
            },
            eventDurationTimeOut: {
                elementType: 'input',
                elementConfig: {
                    type: 'time',
                    placeholder: 'Event Duration Out'
                },
                value: ''
            }
        }
    }
    eventSubmit = () => {
        event.preventDefault();
        const eventData = {};
        for(let formElementIndentifier in this.state.eventForm) {
            eventData[formElementIndentifier] = this.state.eventForm[formElementIndentifier].value;
        }
        console.log(eventData);
    }
    

    inputChangedHandler = (event, inputIdentifier) => {
        console.log(event.target.value);
        const updatedEventForm = {
            ...this.state.eventForm
        };
        const updatedFormElement = {
            ...updatedEventForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedEventForm[inputIdentifier] = updatedFormElement;
        this.setState({eventForm: updatedEventForm});
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.eventForm) {
            formElementsArray.push({
                id: key,
                config: this.state.eventForm[key]
            });
        }
        let form = (
            <form onSubmit={this.eventSubmit}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        label={formElement.config.elementConfig.placeholder}
                    />
                ))}
                <Button>Add Event</Button>
            </form>
        )
        return (
            <StyledDiv>
                <h3> Add Event</h3>
                {form}
            </StyledDiv>
        );
    }
   
};

export default AddEvent