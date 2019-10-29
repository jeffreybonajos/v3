import Layout from "../components/Layout";
import { getUserHome, authInitialProps } from "../lib/Auth";

export default class Home extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    getUserHome().then(user => this.setState({ user }));
  }
  render() {
    return (
      <Layout title="Home">{JSON.stringify(this.state.user, null, 2)}</Layout>
    );
  }
}
Home.getInitialProps = authInitialProps(true);
