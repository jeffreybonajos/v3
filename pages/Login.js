import Layout from "../components/Layout";
import LoginFrom from "../components/Form/LoginForm";

import styled from "styled-components";
// import bgLogin from "../static/bg-login.png";

const StyledWrapper = styled.div`
  background-image: url("../static/bg-login.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledLoginContainer = styled.div`
  max-width: 600px;
  height: 400px;
  text-align: center;
  position: absolute;
  right: 250px;
  top: 24%;
`;
const MainTitle = styled.h1`
  font-size: 50px;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  font-family: sans-serif;
  color: #ff6123;
`;
export default function Login() {
  return (
    <StyledWrapper>
      <StyledLoginContainer>
        <MainTitle>AWESOME OS</MainTitle>
        <Layout title="Login">
          <LoginFrom />
        </Layout>
      </StyledLoginContainer>
    </StyledWrapper>
  );
}
