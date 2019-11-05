import Layout from "../components/Layout";
import { getUserHome, authInitialProps } from "../lib/Auth";
import RelatedEmployees from "../components/PersonalComponent/RelatedEmployees";
import Profile from "../components/PersonalComponent/Profile";
import Account from "../components/PersonalComponent/ChangePasswordForm";
import HealthTracker from "../components/PersonalComponent/HealthTracker";
import Payroll from "../components/PersonalComponent/Payroll";
import QrCode from "../components/PersonalComponent/QRCode";
import styled from "styled-components";

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
  width: 75%;
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
export default class Home extends React.Component {
  state = {
    user: [],
    componentOpen: "profile"
  };

  componentDidMount() {
    getUserHome().then(user => this.setState(user));
  }
  componentDidUpdate() {
    console.log(this.state.componentOpen);
  }
  render() {
    const { user } = this.state;
    return (
      <Layout title="Home" {...this.props}>
        <StyledWrapper>
          <StyledContainer>
            <StyledHeader>
              <StyledImg src="/static/default-profile.png" alt="Profile" />
              <StyledHeaderContent>
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
                <h3>{user.department}</h3>
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
                    full_name={user.full_name}
                    gender={user.gender}
                    address={user.registered_address}
                    blood_type={user.blood_type}
                    marital_status={user.marital_status}
                    email={user.email}
                    branch_site={user.branch_site}
                    department={user.department}
                    position={user.position}
                    status={user.status}
                    date_started={user.date_started}
                    hdmf={user.hdmf}
                    phic={user.phic}
                    sss={user.sss}
                    tin={user.tin}
                  />
                ) : this.state.componentOpen === "account" ? (
                  <Account />
                ) : this.state.componentOpen === "payroll" ? (
                  <Payroll />
                ) : this.state.componentOpen === "health_tracker" ? (
                  <HealthTracker />
                ) : this.state.componentOpen === "qr_code" ? (
                  <QrCode />
                ) : null}
              </StyledComponent>
            </StyledContent>
            <RelatedEmployees />
            <StyledCheat />

            <h3>{/*user.registered_address*/}</h3>
          </StyledContainer>
        </StyledWrapper>
      </Layout>
    );
  }
}
Home.getInitialProps = authInitialProps(true);
