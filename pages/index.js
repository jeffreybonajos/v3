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
export default function Index(props) {
  const user = ({} = props.auth.user || {});
  return (
    <Layout title="Index" {...props}>
      <StyledContainer>
        <h1>{user.name}</h1>
      </StyledContainer>
    </Layout>
  );
}

Index.getInitialProps = authInitialProps(true);
