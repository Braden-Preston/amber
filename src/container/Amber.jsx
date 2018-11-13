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
import Account from './Account'

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
        // for (let index = 0; index < 70000; index++) { const element = Math.random(index); console.log(element) } // slow down
        return (
            <div className={classes.root}>
                <Particles id="particles" />
                {/* <h1><Link to={`${match.path}/dashboard`}>Amber</Link></h1> */}
                <SignIn/>

                
                <Route exact path={`${match.path}/dashboard`} component={Account} />
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