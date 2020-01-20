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
    this.props.onFetchUserData();
  }
  render() {
    const user = this.props
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
    userProfile: state.user.userProfile,
    userPosition: state.user.userPosition
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserData: () => { dispatch(actions.getUserData())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
