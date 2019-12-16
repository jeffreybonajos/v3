import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux'

import Button from '../../components/UI/Button'
import * as actions from '../../store/actions/index';

class Event extends React.Component {
    render(){
        return (
            <>
            <Button >Event</Button>
            </>
        )
    }
}

export default Event;