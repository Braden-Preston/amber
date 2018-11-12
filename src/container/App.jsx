// @flow
import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from './Landing';
import SignIn from './SignIn'
import Amber from './Amber'
import '../anims.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff9/00',
        },
        secondary: {
            main: '#2196f3',
        },
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Fragment>
                        <RoutedApp />
                    </Fragment>
                </Router >
            </MuiThemeProvider>
        );
    }
}

const RoutedApp = withRouter(({ location }) => (
    <main className="App">
        <ul style={{ position: 'fixed', top: 0, transform: 'translateX(-50%)', left: '50%', zIndex: 9999, height: 80, width: 200, background: 'lightgrey'}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/amber">Amber</Link></li>
            {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" >
                <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/amber" component={Amber} />
                    {/* <Route path="/login" component={SignIn} /> */}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    </main>
    // <main className="App">
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/dashboard">Dashboard</Link></li>
    //         <li><Link to="/login">Login</Link></li>
    //         <li><Link to="/login/amber">Amber</Link></li>
    //     </ul>
    //     <Route path="/" component={LandingPage} />
    //     <TransitionGroup>
    //         <CSSTransition key={location.key} classNames="fade" >
    //             <Switch location={location}>
    //                 <Route path="/dashboard" render={() => (<div style={{ position: 'absolute', width: '100%', top: 250, zIndex: 2, background: 'green', height: '100vh' }}> <h1>Dashboard</h1> </div>)} />
    //                 <Route path="/login" component={SignIn} />
    //             </Switch>
    //         </CSSTransition>
    //     </TransitionGroup>
    // </main>
))

export default App;

