
import styled from "styled-components";

import Layout from "../components/Layout";
import NewsFeed from '../components/Index/newsFeeds';
import EventFeed from '../components/Event/eventFeeds';
import Calendar from '../components/Calendar'



const StyledBody = styled.body`
  background-color: #f2f2f2;
`

const StyledContainer = styled.div`
  background: #f2f2f2;
  display: inline-block;
  clear: left;
  width: 80%;
  margin-top: 47px;
  padding-left: 25px
  position: fixed;
  `;

const StyledContainerRight = styled.div`
  padding: 0px 20px 20px 0px;
  position: fixed;
  right: 0%;
  width: 30%;
  height: 100%;
  overflow-y: AUTO;
  z-index: 100;
`;

const StyledContainerNewsFeed = styled.div`
  width: 55%;
  float: left;
  position: relative;
  min-height: 1px;
  background-color: transparent;
`;

const StyledContainerEachNewsFeed = styled.div`
float: left;
clear: left;
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

const StyledContainerEvent = styled.div`
width: 50%;
margin: 20px auto 0;
`


class Index extends React.Component{
  
  render(){
    return (
      <StyledBody>
      <Layout title="Index" >
        <StyledContainer>
          <StyledContainerNewsFeed>
            <NewsFeed />
          </StyledContainerNewsFeed>
          <StyledContainerRight>
            <Calendar />
            <StyledContainerEvent>
            <EventFeed />
            </StyledContainerEvent>
            
            
          </StyledContainerRight>
        </StyledContainer>
      </Layout>
      </StyledBody>
    )
  }
}

export default (Index);

