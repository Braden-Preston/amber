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
import DashboardContainer from './DashboardContainer';


const styles = {
    root: {
        // height: '100vh',
        // width: '100vw',
    },
    particles: {
        zIndex: '-99 !important',
    }
};

class Amber extends Component {
    render() {
        const { classes, match } = this.props
        return (
            <div className={classes.root}>
                <Particles id="particles" className={classes.particles} />
                <Route path="/amber/login" component={SignIn} />
                <Route path="/amber/" component={DashboardContainer} />
            </div>
        )
    }
}

export default withStyles(styles)(Amber);