import { connect } from "react-redux";

import Layout from "../components/Layout";
import SearchEmployee from "../components/PersonalComponent/SearchEmployee"
import Profile from "../components/PersonalComponent/Profile";

import styled from "styled-components";
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
const StyledImg = styled.img`
  margin-bottom: 10px;
  padding: 20px 20px;
  width: 200px;
  float: left;
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 250px;
`;
const StyledHeaderContent = styled.div`
  padding: 15px;
`;
const StyledButton = styled.button`
  color: white;
  border:none
  background: #FC9255
  font-size: 100%;
  padding: 13px;
  margin: 2px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  &:hover,
  &:active,
  &:focus {
    background: #FF8533;
  }
`;
const StyledContent = styled.div`
  clear: both;
  float: left;
  width: 68%;
  background: white;
  margin-bottom: 30px;
`;
const StyledCheat = styled.div`
  display: inline-block;
  width: 25%;
  clear: left;
`;
const StyledComponent = styled.div`
  padding-bottom: 20px;
`;
class Home extends React.Component {
  state = {
    componentOpen: "profile"
  };
  
  componentDidMount() {
    this.props.onFetchUserData();
  }
  // componentDidUpdate() {
  //   console.log(this.state.componentOpen);
  // }
  render() {
    const searchSpecificEmployee = ({} = this.props.searchSpecificEmployee|| {});
    return (
      <Layout title="Home">
        <StyledWrapper>
          <StyledContainer>
            <StyledHeader>
              <StyledImg src="/static/default-profile.png" alt="Profile" />
              <StyledHeaderContent>
                <h2>
                  {searchSpecificEmployee.first_name} {searchSpecificEmployee.last_name}
                </h2>
                <h3>{searchSpecificEmployee.department}</h3>
              </StyledHeaderContent>
            </StyledHeader>
            <StyledContent>
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "profile" });
                }}
              >
                Profile
              </StyledButton>
             
              <StyledComponent>
                {this.state.componentOpen === "profile" ? (
                  <SearchEmployee/>
                  
                )  : null}
              </StyledComponent>
            </StyledContent>
            <StyledCheat />
          </StyledContainer>
        </StyledWrapper>
      </Layout>
    );
  }
}


const mapStateToProps = state => {
  return {
    searchSpecificEmployee: state.auth.searchSpecificEmployee
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserData: () => { dispatch(actions.getUserData())}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);