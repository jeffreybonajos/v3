import { connect } from "react-redux";

import Layout from "../components/Layout";
import { getUserHome, authInitialProps } from "../lib/Auth";
import RelatedEmployees from "../components/PersonalComponent/RelatedEmployees";
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
    const userPosition = ({} = this.props.userPosition || {});
    const userHealthTrackers = ({} = this.props.userHealthTracker || {});
    const userTransactions = ({} = this.props.userTransactions || {});
    const userResultDocuments = ({} = this.props.userResultDocument || {});
    const userNurseVisits = ({} = this.props.userNurseVisit || {});
    const userSchedule = ({} = this.props.userSchedule || {});
    const userSalaryDetails = ({} = this.props.userSalaryDetails || {});
    const userIncentives = ({} = this.props.userIncentives || {});
    const userHMOplan = ({} = this.props.userHMOplan || {});
    const userHMOdependents = ({} = this.props.userHMOdependent || {});
    const userLoans = ({} = this.props.userLoans || {});

    console.log('home', userPosition)
    return (
      <Layout title="Home">
        <StyledWrapper>
          <StyledContainer>
            <StyledHeader>
              <StyledImg src="/static/default-profile.png" alt="Profile" />
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
                  <Profile
                    full_name={userProfile.full_name}
                    gender={userProfile.gender_type}
                    address={userProfile.registered_address}
                    blood_type={userProfile.blood_type}
                    marital_status={userProfile.marital_status}
                    email={userProfile.email}
                    branch_site={userProfile.branch}
                    department={userProfile.department}
                    team_name={userProfile.team_name}
                    position={userPosition.position}
                    status={userProfile.status}
                    account_type={userProfile.role_type}
                    date_started={userProfile.date_started}
                    hdmf={userProfile.hdmf}
                    phic={userProfile.phic}
                    sss={userProfile.sss}
                    tin={userProfile.tin}
                  />
                  
                ) : this.state.componentOpen === "transaction_history" ? (
                  <TransactionHistory 
                  userTransactions={userTransactions}
                  />
                ) : this.state.componentOpen === "account" ? (
                  <Account />
                ) : this.state.componentOpen === "time_logs" ? (
                  <TimeLogs 
                  userSchedule = {userSchedule}
                  />
                ) : this.state.componentOpen === "payroll" ? (
                  <Payroll 
                  userSalaryDetails ={userSalaryDetails}
                  userIncentives = {userIncentives}
                  userHMOplan = {userHMOplan}
                  userHMOdependents = { userHMOdependents }
                  userLoans = { userLoans }
                  />
                ) : this.state.componentOpen === "health_tracker" ? (
                  <HealthTracker 
                  userHealthTrackers={userHealthTrackers}
                  userResultDocuments = {userResultDocuments}
                  userNurseVisits = {userNurseVisits}
                  />
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
    userPosition: state.user.userPosition,
    userHealthTracker: state.user.userHealthTracker,
    userTransactions: state.user.userTransactions,
    userResultDocument: state.user.userResultDocument,
    userNurseVisit: state.user.userNurseVisit,
    userSchedule: state.user.userSchedule,
    userSalaryDetails: state.user.userSalaryDetails,
    userIncentives: state.user.userIncentives,
    userHMOplan: state.user.userHMOplan,
    userHMOdependent: state.user.userHMOdependent,
    userLoans: state.user.userLoans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserData: () => { dispatch(actions.getUserData())}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);