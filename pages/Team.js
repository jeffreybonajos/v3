import styled from "styled-components";
import {connect} from 'react-redux';

import Layout from "../components/Layout";
import TeamComponent from '../components/Team/Team'
import * as actions from '../store/actions/index';

const StyledWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  margin: 20px 0;
  max-width: 100%;
  max-height: 100%;
`;
const StyledContainer = styled.div`
  padding: 10px;
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 250px;
`;
const StyledContent = styled.div`
  background: #ff8533;
`;
const StyledImg = styled.img`
  margin: 0 auto;
  width: 100px;
  display: block
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;
const StyledSpan = styled.span`
    font-size: .9em;
    font-weight: 700;
`;


class Team extends React.Component {

    componentDidMount() {
        this.props.onFetchUserTeam();
    }
    
    render() {
      const teams = ({} = this.props.userTeamMembers || {});
      console.log('team',teams)
      return (
        <Layout title="Team">
            <StyledWrapper>
                <StyledContainer>
                    <TeamComponent teams={teams}/>
                </StyledContainer>
            </StyledWrapper>
        </Layout>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
        userTeamMembers: state.user.userTeamMembers
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onFetchUserTeam: () => { dispatch(actions.getUserTeam())}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
  