import Layout from "../components/Layout";
import { authInitialProps } from "../lib/Auth";
import Link from "next/link";

export default function Index(props) {
  const user = ({} = props.auth.user || {});
  return (
    <Layout title="Index" {...props}>
      <h1>{user.name}</h1>
    </Layout>
  );
}

Index.getInitialProps = authInitialProps(true);
