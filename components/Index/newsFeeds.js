import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'

import Event from '../Index/newsFeed';
import * as actions from '../../store/actions/index';

const StyledContainerNewsFeed = styled.div`
  float: left;
  position: relative;
min-height: 1px;
`;

class EventFeed extends React.Component {
    state ={
        isDeleting: false
    }

    componentDidMount () {
        this.props.onEventFeed();
    }

    handleDeleteEvent = deletedEvent => {
        this.setState({isDeleting: true})
    }

    handleToggleLike = toggleLike => {
        const user_id = this.props.auth.user_id
        const  event_id  = toggleLike
        this.props.onEventLikes(event_id);
        const isEventLiked = this.props.eventLikes.includes(user_id)

        const sendRequest = isEventLiked ? this.props.onEventLike : this.props.onEventLike;

        // sendRequest(event_id, user_id);

    }

    render(){
        const auth = this.props.auth
        const events = this.props.events
        return(
            <StyledContainerNewsFeed>
            { events.map(event => (
                <Event 
                    key={event.id}
                    event={event}
                    auth={auth}
                    isDeleting={this.state.isDeleting}
                    handleDeleteEvent={this.handleDeleteEvent}
                    handleToggleLike = {this.handleToggleLike}
                />
            ))
            }
            
                
            </StyledContainerNewsFeed>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth.token,
      events: state.home.homeEvents,
      eventLikes: state.home.eventLikes
    }
  }

const mapDispatchToProps = dispatch => {
return {
    onEventFeed: () => { dispatch(actions.getHomeEvents())},
    onEventLikes: (event_id) => { dispatch(actions.getEventLikes(event_id))},
    onEventLike: (event_id, user_id) => { dispatch(actions.doEventLike(event_id, user_id))},
    // onEventUnlike: (event_id, user_id) => { dispatch(actions.eventUnlike(event_id, user_id))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);

