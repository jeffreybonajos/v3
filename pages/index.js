import { connect } from "react-redux";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import Event from  '../components/Event'


const StyledContainer = styled.div`
background: #f2f2f2;
display: inline-block;
clear: left;
width: 80%;
margin: 86px 15px 0 15px;
position: fixed;
`;

const StyledContainerButtonEvent = styled.div`
  padding: 0px 20px 20px 20px;
  position: fixed;
  right: 0%;
  width: 30%;
  height: 100%;
  overflow-y: AUTO;
`;

const StyledContainerNewsFeed = styled.div`
  width: 50%;
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

class Index extends React.Component {
  state = {
    addEvent: false
  }
  eventButtonHandler = () => {
    this.setState({addEvent: true});
  }

  eventModalClosed = () => {
    this.setState({addEvent: false});
  }

  eventModalbutton = () => {
    alert('added event');
  }

  render() {
    const userProfile = ({} = this.props.userProfile || {});
    const newsFeeds = ({} = this.props.newsFeeds || {});
    console.log(newsFeeds);
    return (
      <Layout title="Index">
        <StyledContainer>
            <StyledContainerButtonEvent>
              <Button clicked={this.eventButtonHandler} > ADD EVENT </Button>
            </StyledContainerButtonEvent>
            
            <StyledContainerNewsFeed>
              { newsFeeds.map(newsFeed => (
              

              <StyledContainerEachNewsFeed key={newsFeed.id}>
                <StyledStoryUnit>
                    {newsFeed.profile_picture}
                    {newsFeed.full_name}
                    {newsFeed.image_url}
                </StyledStoryUnit>
                <StyledLikeSection>
                  
                  </StyledLikeSection>
                  <StyledDescriptionSection>
                  {newsFeed.desc}
                    </StyledDescriptionSection> 
                    <StyledCommentSection>


                    </StyledCommentSection>
              </StyledContainerEachNewsFeed>
              ))}
          </StyledContainerNewsFeed>


          <Modal show={this.state.addEvent} modalClosed={this.eventModalClosed} addEventButton={this.eventModalbutton}
                cancelEventButton={this.eventModalClosed}>
              <Event 
              />
            </Modal>
        </StyledContainer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.auth.userData,
    newsFeeds: state.auth.newsFeeds
  }
}

export default connect(mapStateToProps)(Index);

