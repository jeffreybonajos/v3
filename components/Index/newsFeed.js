import React from 'react';
import styled from 'styled-components';


const StyledContainerEachNewsFeed = styled.div`
float: left;
clear: left;
position: relative;
z-index: 2;
padding: 10px 0px;
margin-bottom: 5px;
background: #fff;
box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, .08);
width: 100%;

`;

const StyledStoryUnit = styled.div`
box-sizing: border-box;
display: block;
width: 100%;
position: relative;
`;

const StyledLikeSection = styled.div`
padding: 10px 10px 0px 10px;
`;

const StyledDescriptionSection= styled.div`
word-wrap: break-word;
padding: 0 20px;
`;

const StyledDescriptionText = styled.p`
text-align: justify;
    padding-left: 10px;
    color: #464646;
    `;

const StyledCommentSection= styled.div`
    position: relative;
    margin: 0px;
    width: auto;
    overflow: hidden;
    margin-bottom: 15px;
    word-wrap: break-work;
    padding: 0 20px;
`;

const StyledEventHeader = styled.div`
    padding: 10px 10px 0px 10px;
    font-size: 12px;
    display: inline-block
    width: 100%;
    position: relative;
    `;
const StyledEventHeaderImage = styled.img`
    border-radius: 50%;
    width: 35px;
`;

const StyledEventHeaderName = styled.div`
position: relative;
display: inline-block;
`;

const StyledEventHeaderDate = styled.div`
position: absolute;
    right: 12%;
    bottom: 0;
`;

const StyledEventHeaderAction = styled.div`
position: absolute;
    right: 5%;
    bottom: 0;
`;

const StyledEventImage = styled.div`
    position: relative;
    display: block;
`;
const StyledButton = styled.button`

`;


class Event extends React.Component {


    
    render(){
        const event = this.props.event;
        const auth = this.props.auth;
        const {isDeleting, handleDeleteEvent, handleToggleLike} = this.props;

        const isEventCreator = event.user_id === event.user_id

        return(
            <StyledContainerEachNewsFeed>

            <StyledStoryUnit>
                <StyledEventHeader>
                    <StyledEventHeaderImage src={event.profile_picture}>
                    </StyledEventHeaderImage>
                    <StyledEventHeaderName>{event.full_name}</StyledEventHeaderName>
                    <StyledEventHeaderDate>{event.date_posted}</StyledEventHeaderDate>
                    { isEventCreator ? <StyledEventHeaderAction>
                        <StyledButton  disable={isDeleting} onClick={() => handleDeleteEvent(event)}><i className="fa fa-commenting"></i></StyledButton>
                        </StyledEventHeaderAction> : null

                    }
                    
                </StyledEventHeader>
            </StyledStoryUnit>

            <StyledEventImage>
                <img src={event.image_url}></img>
            </StyledEventImage>
            
            <StyledLikeSection>
               <StyledButton onClick={() => handleToggleLike(event.pid)}> <i className="fa fa-heart"></i></StyledButton>
                <span>0</span>
            </StyledLikeSection>


            <StyledDescriptionSection>
                <StyledDescriptionText>{event.desc}
                    </StyledDescriptionText>
            </StyledDescriptionSection> 


            <StyledCommentSection>

            </StyledCommentSection>


            </StyledContainerEachNewsFeed>
        )
    }
}

export default Event;

