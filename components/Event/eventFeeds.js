import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import Link from "next/link";

import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal';
import Event from  './event'
import EditEvent from './editEvent'
import NewEvent from './newEvent'


const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return year + '-' + month + '-' + day;
}

class EventFeed extends React.Component {
     state = {
        title: null,
        start: null,
        end: null,
        url: null,
        type: null,
        branches: [],
        duration_start: null,
        duration_end: null,
        events: [],
        addEvent: false,
        editEvent: false,
        dataToEdit: null,
        branchesToEdit: null
  }

  eventButtonHandler = () => {
    this.setState({addEvent: true});
  }
  
  eventModalClosed = () => {
    this.setState({addEvent: false});
    this.setState({editEvent: false});
  }

  handleEditEvent = data => {
    this.setState({editEvent: true});
    this.setState({dataToEdit: data})
    this.props.onEventToEdit(data.calendar_id);
    // const branches = this.props.onEventLocation(data.calendar_id);
    // this.setState({branchesToEdit: branches})
  }

  handleDeleteEvent = data => {
      this.props.onDeleteEvent(data);
      this.setState({editEvent: false});
  }

  handleEditChange = (event) => {
    let inputValue;
    if(event.target.type === 'checkbox'){
      inputValue = event.target.value;
      this.state.branches.push({
        branch_id: inputValue
      })
    }else {
      inputValue = event.target.value;
    }
    this.setState({[event.target.name]: inputValue})
    console.log(this.state)
    
  }

  handleEditBranchChange = () => {
        
    console.log(this.state)
  }
  handleEditSubmit = () => {

  }
  
  render(){
    const eventLists = this.props.eventList;
    const getDateNow = new Date();
    const dateNow = getFormattedDate(getDateNow);
    const dataToEdit = this.state.dataToEdit;
    
    const events = eventLists.filter(event => event.start ? event.start.includes(dateNow) : null);
    const eventLocation = this.props.eventLocation;
    return (
        <div>
          { events.map(event => (
              <Event 
                  key={event.id}
                  event={event}
                  handleEditEvent={this.handleEditEvent}
              />
      
          ))
          }
        
        <Button clicked={this.eventButtonHandler}>Add Event</Button>

        <Modal show={this.state.addEvent} 
                modalClosed={this.eventModalClosed}>
            <NewEvent
                modalClosed={this.eventModalClosed}
                eventModalClosed={this.eventModalClosed}>
            </NewEvent>
            </Modal>
            <Modal show={this.state.editEvent} 
                modalClosed={this.eventModalClosed}>
                <EditEvent
                modalClosed={this.eventModalClosed}
                eventModalClosed={this.eventModalClosed}
                dataToEdit={dataToEdit}
                handleDeleteEvent={this.handleDeleteEvent}
                handleEditSubmit={this.handleEditSubmit}
                handleEditChange = {this.handleEditChange}
                eventLocation={eventLocation}
                handleEditBranchChange={this.handleEditBranchChange}
                >
                
                </EditEvent>
        </Modal>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
    eventList: state.home.eventList
    }
  }
const mapDispatchToProps = dispatch => {
return {
    onEventToEdit: (calendar_id) => { dispatch(actions.getEventToEdit(calendar_id))},
    onDeleteEvent: (calendar_id) => { dispatch(actions.deletePostEvent(calendar_id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);