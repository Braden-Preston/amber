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
import Dashboard from './Dashboard'

const styles = {
    root: {
        // background: 'orange',
        height: '100vh',
        width: '100vw',
        // css atrributes
    },
    particles: {
        zIndex: -99,
    }
};

class Amber extends Component {
    state = { mount: true }
    
    componentDidUpdate = (prevProps, prevState, snapshot) => {

    }

    render() {
        const { classes, match } = this.props
        // for (let index = 0; index < 70000; index++) { const element = Math.random(index); console.log(element) } // slow down
        return (
            <div className={classes.root}>
                {this.state.mount && <Particles id="particles" className={classes.particles} />}
                <Route path="/amber/login" component={SignIn} />
                <Route path="/amber/dashboard" component={Dashboard} />
            </div>
        )
    }
}

export default withStyles(styles)(Amber);