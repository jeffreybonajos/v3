import Layout from "../components/Layout";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import Error from "next/error";

const StyledContainer = styled.div`
  background: white;
  margin: 100px auto;
  max-width: 600px;
  height: 500px;
  text-align: center;
`;

class Profile extends React.Component {
  static async getInitialProps(ctx) {
    let user;
    try {
      const res = await fetch("/api/auth/user", {
        method: "GET",
        credentials: "same-origin"
      });
      user = await res.json();
    } catch (err) {
      console.log(err);
      user = [];
    }
    console.log(user);
    return { user };
  }

  render() {
    const { user } = this.props;

    if (user.lenght === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <div>
        <Layout title="Home">
          {user.map(user => (
            <StyledContainer>
              <h2 key={user_id}>{user.full_name}</h2>
            </StyledContainer>
          ))}
        </Layout>

        {/*<Layout>
          <StyledContainer>
            <h1>This is profile page</h1>
            <h2>Personal Information</h2>
            <span>Name: {user.full_name}</span>
            <br />
            <span>Gender:{user.gender}</span>
            <br />
            <span>Address:{user.registered_address}</span>
            <br />
            <span>Blood Type:{user.bloodtype}</span>
            <br />
            <span>Marital Status:{user.marital_status}</span>
            <br />
            <br />
            <h2>Government ID Information</h2>
            <span>HDMF:{user.hdmf}</span>
            <br />
            <span>PHIC:{user.phic}</span>
            <br />
            <span>SSS:{user.sss}</span>
            <br />
            <span>TIN:{user.tin}</span>
            <br />
          </StyledContainer>
        </Layout>*/}
      </div>
    );
  }
}

export default Profile;
