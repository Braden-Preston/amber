import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles'

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import AccountPage from './Account';
import SignOutButton from './SignOut';
import Zoom from '@material-ui/core/Zoom';
import Grow from '@material-ui/core/Grow';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    card: {
        boxSizing: "border-box",
        width: 300,
        // padding: 32,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },
});

class SplashScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            showLogin: false,
        }
    }

    // componentDidUpdate() {
    //     const { location } = this.props
    //     const pathname = location.pathname
    //     // const pathname = this.props.location.pathname
    //     // console.log("Updated")
    //     console.log(pathname)
    //     ['/login', '/signup', '/signin', '/forot'].pathnameincludes(pathname)
    //         ? this.setState({ showLogin: true })
    //         : this.setState({ showLogin: false })
    // }

    componentDidMount() {
        const { sessionStore } = this.props;
        console.log(sessionStore)
    }

    render() {
        console.log(this.props)
        const { classes, location } = this.props
        const dialogShow = ['/login', '/register', '/forgot'].includes(location.pathname)
        console.log(dialogShow)
        return (
            <div>
                {/* <Route  path={'/test'} component={SignUpPage} /> */}
                {dialogShow && (
                    <Card className={classes.card} visible={dialogShow}>
                        {/* <CardContent> */}
                            <Route exact path={'/login'} component={SignInPage} />
                            <Route path={'/register'} component={SignUpPage} />
                        {/* </CardContent> */}
                    </Card>
                )}
                {/* <Route  path={routes.FORGOT} component={PasswordForgetPage} /> */}
                <Route path={routes.DASHBOARD} component={LandingPage} />
            </div>
        )
    }
}

export default compose(
    inject('userStore'),
    withStyles(styles),
    observer,
)(SplashScreen);