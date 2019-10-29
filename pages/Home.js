import Layout from "../components/Layout";
import { getUserHome, authInitialProps } from "../lib/Auth";

export default class Home extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        getUserHome().then(user => this.setState(user));
    }
    render() {
        const {user} = this.state;
        return (
            <Layout title="Home" {...this.props}>
                <h1>{user.first_name} {user.last_name}</h1>
                <h2>{user.department}</h2>
                <h3>{user.registered_address}</h3>
            </Layout>
        )
    }
}
Home.getInitialProps = authInitialProps(true);
