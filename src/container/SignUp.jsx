// @flow
import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE,
        };

    }

    onSubmit = (event) => {
        const { username, email, passwordOne, } = this.state;

        const {
            history,
        } = this.props;

        console.log(this.props)
        
        auth.createUser(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                // history.push(routes.DASHBOARD);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit">
                    Sign Up
        </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={'/register'}>Sign Up</Link>
    </p>


const SignUpPage = ({ ...props }) =>
    <div>
        <h1>Register</h1>
        <SignUpForm {...props}/>
    </div>
export default withRouter(SignUpPage)

export {
    SignUpForm,
    SignUpLink,
};