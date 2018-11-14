import React, { Component } from 'react';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'

import Icon from '../media/firebase_icon.png'
import { Paper, Zoom, Grow } from '@material-ui/core';

const styles = theme => ({
    root: {
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        zIndex: 100,
        height: '100%',
        width: '100%',
    },
    paper: {
        pointerEvents: 'auto',
        position: 'relative',
        width: 300,
        height: 375,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textField: {
        boxSizing: "border-box",
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    submitButton: {
        marginTop: theme.spacing.unit * 2,
        width: 200,
    },
    icon: {
        display: "block",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        height: 48,
        width: 48,
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 2,
        // padding: 
    },
    errorText: {
        color: "red",
    }
});

const SignInPage = ({ ...props }) =>
    <div>
        <h1>Login</h1>
        {/* <Card> */}
        <SignInForm history={props.history} {...props} />
        <SignUpLink className={props.classes.errorText} />
        {/* </Card> */}
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignInForm extends Component {
    state = {
        email: '',
        password: '',
        showPassword: false,
        error: null,
    };

    onSubmit = (event) => {
        const { email, password, } = this.state;
        const { history, } = this.props;
        event.preventDefault();
        auth.signIn(email, password)
            .then(() => {
                console.log("TEST")
                this.setState({ ...this.state });
                history.push(routes.DASHBOARD);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    closeLogin = () => {
        console.log("clicked")
    }

    render() {
        const { email, password, error, } = this.state;
        const { classes } = this.props
        return (
            <Grow in>
                <div id="SignIn" className={classes.root} onClick={this.closeLogin}>
                    <Paper className={classes.paper}>
                        <form onSubmit={this.onSubmit}>
                            <img className={classes.icon} src={Icon} />
                            <TextField
                                className={classes.textField}
                                // autoComplete="username"
                                fullWidth
                                label="Email"
                                type="email"
                                onChange={event => this.setState(byPropKey('email', event.target.value))}
                                value={email}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                className={classes.textField}
                                // autoComplete="password"
                                fullWidth
                                // id="outlined-adornment-password"
                                // className={classNames(classes.margin, classes.textField)}
                                variant="outlined"
                                type={this.state.showPassword ? 'text' : 'password'}
                                label="Password"
                                value={password}
                                // onChange={this.handleChange('password')}
                                onChange={event => this.setState(byPropKey('password', event.target.value))}
                            />
                            <Button
                                // fullWidth
                                className={classes.submitButton}
                                color="secondary"
                                variant="extendedFab"
                                type="submit"
                            >Sign In</Button>
                            {error && <p>{error.message}</p>}
                        </form>
                    </Paper>
                </div>
            </Grow>
        );
    }
}

// let routedSignInForm = withRouter(SignInForm');

export {
    SignInForm,
};

export default compose(
    // withTheme(),
    withStyles(styles),
    //  withRouter()
    // inject('userStore'),
    // observer,
)(SignInForm);