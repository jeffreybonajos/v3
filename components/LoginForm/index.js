import Router from 'next/router'

import { loginUser } from '../../lib/Auth'

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        error: '',
        isLoading: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        const { username, password } = this.state

        event.preventDefault();
        this.setState({ error: '' , isLoading: true});
        loginUser( username,password).then(( ) => {
            Router.push('/');
        })
        .catch(this.showError);

    }

    showError = err => {
        console.error('error', err);
        const error = err.response && err.response.data || err.message;
        this.setState({error, isLoading: false});
    }


    render() {
        const { error, isLoading } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    />
                </div>
                <button disabled={isLoading} type="submit">
                 {isLoading ? "Logging in" : "Login"}
                </button>
                { error && <div>{ error }</div>}
            </form>
        )
    }
}

export default LoginForm