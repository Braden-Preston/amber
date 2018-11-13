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
    particles: {
        zIndex: -99,
    }
};

class Amber extends Component {

    render() {
        const { classes, match } = this.props
        // for (let index = 0; index < 70000; index++) { const element = Math.random(index); console.log(element) } // slow down
        return (
            <div className={classes.root}>
                <Particles id="particles" className={classes.particles} match={match}/>
                {/* <h1><Link to={`${match.path}/dashboard`}>Amber</Link></h1> */}
                {/* <Switch> */}
                    <Route path="/amber/login" component={SignIn} />
                    <Route path="/amber/dashboard" render={()=>(<h1>Dashboard</h1>)} />
                {/* </Switch> */}
                {/* <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" >
                        <Switch location={location}>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup> */}
                {/* <main className="App">
                    <ul style={{ position: 'fixed', top: 0, transform: 'translateX(-50%)', left: '50%', zIndex: 9999, height: 80, width: 200, background: 'lightgrey' }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/amber">Amber</Link></li>
                    </ul>
                    <TransitionGroup>
                        <CSSTransition key={location.pathname} classNames="slide" >
                            <Switch location={location}>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/amber" component={Amber} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </main> */}
            </div>
        )
    }
}

export default withStyles(styles)(Amber);