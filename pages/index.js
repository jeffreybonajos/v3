import { connect } from "react-redux";

import Layout from "../components/Layout";
import { authInitialProps } from "../lib/Auth";
import Link from "next/link";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: white;
  margin: 100px auto;
  width: 1000px;
  height: 500px;
  text-align: center;
`;

class Index extends React.Component {
  
  render() {
    const userData = ({} = this.props.userData || {});
    return (
      <Layout title="Index">
        <StyledContainer>
          <h1>{userData.name}</h1>
        </StyledContainer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.auth.userData
  }
}

export default connect(mapStateToProps)(Index);

