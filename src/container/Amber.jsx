import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SignIn from './SignIn';
import Particles from '../presentation/Particles';

const styles = {
    root: {
        // background: 'orange',
        height: '100vh',
        width: '100vw',
        // css atrributes
    },
};

class Amber extends Component {
    render() {
        const { classes, match } = this.props
        console.log(this.props)
        return (
            <div className={classes.root}>
                <Particles />
                <SignIn/>

                {/* <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" >
                        <Switch location={location}>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup> */}
            </div>
        )
    }
}

export default withStyles(styles)(Amber);