import Layout from "../components/Layout";
import { authInitialProps } from "../lib/Auth";
import FeedbackForm from "../components/Form/FeedbackForm";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  margin: 20px 0;
  max-width: 100%;
  max-height: 100%;
  background: pink;
`;
const StyledContainer = styled.div`
  padding: 10px;
  background: gray;
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 250px;
`;
export default class Feedback extends React.Component {
  state = {};
  render() {
    return (
      <Layout title="Feedback">
        <StyledWrapper>
          <StyledHeader>Send Us A Feedback!</StyledHeader>
          <StyledContainer>
            <FeedbackForm />
          </StyledContainer>
        </StyledWrapper>
      </Layout>
    );
  }
}
Feedback.getInitialProps = authInitialProps(true);
