// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { firebase } from '../firebase';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './Forgot';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    render() {
        const { authUser } = this.state
        return (
            <div className="App">
                <Router>
                    <React.Fragment>
                        <Navigation authUser={authUser}/>
                        <Route exact path={routes.ROOT} component={LandingPage} />
                        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
                        <Route exact path={routes.SIGN_IN} component={SignInPage} />
                        <Route exact path={routes.FORGOT} component={PasswordForgetPage} />
                        <Route exact path={routes.DASHBOARD} component={HomePage} />
                        <Route exact path={routes.ACCOUNT} component={AccountPage} />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default App;

