import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import Link from "next/link";

import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal';
import NewEvent from  '../../components/Event/newEvent'
import EditEvent from './editEvent'

class Event extends React.Component {

    render(){
        console.log('event',this.props)
        const eventLocation = this.props.eventLocation;
        const handleEditEvent = this.props.handleEditEvent;
        const event = this.props.event;
        return (
            <div>
                <span >
                    {event.start}
                </span>
                <Button clicked={() => handleEditEvent(event)}>
                    {event.title}
                </Button>
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {
      eventLocation: state.home.eventLocation,
    }
  }

export default connect(mapStateToProps)(Event);