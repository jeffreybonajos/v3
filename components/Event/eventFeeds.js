import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import Link from "next/link";

import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal';
import Event from  './event'
import EditEvent from './editEvent'
import NewEvent from './NewEvent'


const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return year + '-' + month + '-' + day;
}

class EventFeed extends React.Component {
     state = {
    addEvent: false,
    editEvent: false,
    dataToEdit: null
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
      this.props.onEventLocation(data.calendar_id)
  }
  
  render(){
    const eventLists = this.props.eventList;
    const getDateNow = new Date();
    const dateNow = getFormattedDate(getDateNow);
    const dataToEdit = this.state.dataToEdit;
    
    const events = eventLists.filter(event => event.start ? event.start.includes(dateNow) : null);
    const eventLocation = this.props.eventLocation;
    const handleEditEvent = this.props.handleEditEvent;
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
                >
                
                </EditEvent>
        </Modal>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
    eventList: state.home.eventList,
      eventLocation: state.home.eventLocation
    }
  }
const mapDispatchToProps = dispatch => {
return {
    onEventLocation: (calendar_id) => { dispatch(actions.getEventLocation(calendar_id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);