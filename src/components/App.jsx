// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import { firebase, db } from '../firebase'

import PrivateRoute from './PrivateRoute'

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './Forgot';
import HomePage from './Account';
import AccountPage from './Account';
import SignOutButton from './SignOut';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import * as routes from '../constants/routes';
import SplashScreen from './SplashScreen';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff9100',
        },
        secondary: {
            main: '#2196f3',
        },
    },
});

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

    // addUser() {
    //     console.log(firebase.db)
    //     db.doCreateUser('idname', 'joe@gmail.com', 'Kittens17')
    // }

    render() {
        const { authUser } = this.state
        return (

            <div className="App">
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <React.Fragment>
                            <Link to={'/login'}>Log In | </Link>
                            <Link to={'/register'}>Register | </Link>
                            <Link to={'/dashboard'}>Dashboard | </Link>
                            <SignOutButton />

                            {/* <Navigation authUser={authUser}/> */}
                            <Switch>
                                <Route path={'/'} component={SplashScreen} />
                                {/* <Route path={'/signup'} component={SignUpPage} />
                            <Route path={'/signin'} component={SignInPage} />
                            <Route path={'/forgot'} component={PasswordForgetPage} />
                            <Route path={'/dashboard'} component={HomePage} /> */}
                                {/* <Route exact path={routes.ACCOUNT} component={AccountPage} /> */}
                                {/* <PrivateRoute path='/protected' component={AccountPage} authUser={authUser}/> */}
                            </Switch>
                        </React.Fragment>
                    </MuiThemeProvider>
                </Router >
            </div >

        );
    }
}

export default App;

