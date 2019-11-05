import { connect } from 'react-redux'

import Layout from "../components/Layout";
import styled from "styled-components";
import * as actions from '../store/actions/index';

const StyledContainer = styled.div`
  background: white;
  margin: 100px auto;
  max-width: 600px;
  height: 500px;
  text-align: center;
`;

class Profile extends React.Component {
    componentDidMount() {
      this.props.onFetchUserData(this.props.token);
    }

  render() {
    console.log(this.props.users)
    const users = this.props.users;
    return (
      <div>
        <Layout title="Home">

        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    users: state.user.userProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserData: (token) => { dispatch(actions.getUserData(token))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
