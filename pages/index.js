
import styled from "styled-components";
import { connect } from 'react-redux'

import Layout from "../components/Layout";
import EventFeed from '../components/Index/newsFeeds';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import NewEvent from  '../components/Event/newEvent'
import Event from  '../components/Event/event'


const StyledContainer = styled.div`
  background: #f2f2f2;
  display: inline-block;
  clear: left;
  width: 80%;
  margin: 86px 15px 0 15px;
  position: fixed;
  `;

const StyledContainerButtonEvent = styled.div`
  padding: 0px 20px 20px 0px;
  position: fixed;
  right: 0%;
  width: 20%;
  height: 100%;
  overflow-y: AUTO;
`;

const StyledContainerNewsFeed = styled.div`
  width: 60%;
  float: left;
  position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`;

const StyledContainerEachNewsFeed = styled.div`
float: left;
clear: left;
position: relative;
z-index: 2;
padding: 0;
margin-bottom: 5px;
background: #fff;
box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, .08);

`;

const StyledStoryUnit = styled.div`
box-sizing: border-box;
display: block;
`;

const StyledLikeSection = styled.div`
margin: 0px 10px 5px 18px;
`;

const StyledDescriptionSection= styled.div`
word-wrap: break-word;
padding: 0 20px;
`;

const StyledCommentSection= styled.div`
position: relative;
    margin: 0px;
    width: auto;
    overflow: hidden;
    margin-bottom: 15px;
`;


const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return year + '-' + month + '-' + day;
}

class Index extends React.Component{
  state = {
    addEvent: false
  }
  eventButtonHandler = () => {
    this.setState({addEvent: true});
  }
  
  eventModalClosed = () => {
    this.setState({addEvent: false});
  }
  

  checkEvenNow = () => {
    const eventList = this.props.eventList;
  }

  render(){
    const eventLists = this.props.eventList;
    const newDate = new Date();
    const testDate = getFormattedDate(newDate);
    console.log('endex',testDate);
    eventLists.map(event => { 
        if(event.start === testDate) {
          console.log("here");
        }
      }
    )
    return (
      <Layout title="Index" >
        <StyledContainer>
          <StyledContainerNewsFeed>
            {/* <EventFeed>

            </EventFeed> */}
          </StyledContainerNewsFeed>
          <StyledContainerButtonEvent>
            <div>
              
            </div>
            <Event></Event>
            <Button clicked={this.eventButtonHandler}>Add Event</Button>
          </StyledContainerButtonEvent>
        </StyledContainer>
          <Modal show={this.state.addEvent} 
             modalClosed={this.eventModalClosed}>
          <NewEvent
             modalClosed={this.eventModalClosed}
            eventModalClosed={this.eventModalClosed}>

          </NewEvent>
        </Modal>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
    return {
      eventList: state.home.eventList,
    }
  }


export default connect(mapStateToProps)(Index);

