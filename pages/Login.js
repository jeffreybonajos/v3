import Layout from "../components/Layout";
import LoginFrom from "../components/Form/LoginForm";

import styled from "styled-components";

const StyledWrapper = styled.div`
  background: linear-gradient(
    to bottom right,
    rgb(255, 249, 165) 0%,
    rgb(255, 97, 35) 100%
  );
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledLoginContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
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
