import { connect } from "react-redux";

import Layout from "../components/Layout";
import Profile from "../components/PersonalComponent/Profile";
import TransactionHistory from "../components/PersonalComponent/TransactionHistory";
import Account from "../components/PersonalComponent/ChangePasswordForm";
import HealthTracker from "../components/PersonalComponent/HealthTracker";
import Payroll from "../components/PersonalComponent/Payroll";
import QrCode from "../components/PersonalComponent/QRCode";
import TimeLogs from "../components/PersonalComponent/TimeLogs";
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
  componentDidUpdate() {
    console.log(this.state.componentOpen);
  }
  render() {
    const userProfile = ({} = this.props.userProfile || {});
    const url = 'https://awesomev3.s3-ap-southeast-1.amazonaws.com/pp/';
    return (
      <Layout title="Home">
        <StyledWrapper>
          <StyledContainer>
            <StyledHeader>
              <StyledImg src={`https://awesomev3.s3-ap-southeast-1.amazonaws.com/pp/${userProfile.profile_picture}`} alt="Profile" />
              <StyledHeaderContent>
                <h2>
                  {userProfile.first_name} {userProfile.last_name}
                </h2>
                <h3>{userProfile.department}</h3>
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
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "transaction_history" });
                }}
              >
                Transaction History
              </StyledButton>
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "account" });
                }}
              >
                Account
              </StyledButton>
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "time_logs" });
                }}
              >
                Time Logs
              </StyledButton>
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "payroll" });
                }}
              >
                Payroll
              </StyledButton>
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "health_tracker" });
                }}
              >
                Health Tracker
              </StyledButton>
              <StyledButton
                onClick={() => {
                  this.setState({ componentOpen: "qr_code" });
                }}
              >
                My QR code
              </StyledButton>
              <StyledComponent>
                {this.state.componentOpen === "profile" ? (
                  <Profile/>
                  
                ) : this.state.componentOpen === "transaction_history" ? (
                  <TransactionHistory />
                ) : this.state.componentOpen === "account" ? (
                  <Account />
                ) : this.state.componentOpen === "time_logs" ? (
                  <TimeLogs />
                ) : this.state.componentOpen === "payroll" ? (
                  <Payroll />
                ) : this.state.componentOpen === "health_tracker" ? (
                  <HealthTracker />
                ) : this.state.componentOpen === "qr_code" ? (
                  <QrCode />
                ) : null}
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
    userProfile: state.user.userProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserData: () => { dispatch(actions.getUserData())}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);