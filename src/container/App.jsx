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

import CircularProgress from '@material-ui/core/CircularProgress';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loadable from "react-loadable";

// const Landing = Loadable({ loader: () => import("./Landing"), loading: () => { return (<h1>Loading</h1>) }, timeout: 250 });
// const Amber = Loadable({ loader: () => import("./Amber"), loading: () => { return (<h1>Loading</h1>) }, timeout: 250 });
import Landing from './Landing'
import Amber from './Amber'
import '../anims.css'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff9800',
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
        <ul style={{
            position: 'fixed', top: 0, zIndex: 9999, right: 20, padding: 20, borderRadius: 4, boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)', listStylePosition: "inside", background: 'lightgrey' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/amber">Amber</Link></li>
            <li><Link to="/amber/login">Login</Link></li>
            <li><Link to="/amber/dashboard">Dashboard</Link></li>
        </ul>
        <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route path="/amber" component={Amber} />
            {/* <Route path="/wp-admin" render={() => (<Redirect to="/admin" />)} /> */}
            {/* <Route render={()=>(<h1>404 Redirect</h1>)} /> */}
        </Switch>
    </main>
    // <main className="App">
    //     <ul style={{ position: 'fixed', top: 0, transform: 'translateX(-50%)', left: '50%', zIndex: 9999, height: 80, width: 200, background: 'lightgrey' }}>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/amber">Amber</Link></li>
    //     </ul>
    //     <TransitionGroup>
    //         <CSSTransition key={location.pathname} classNames="slide" >
    //             <Switch location={location}>
    //                 <Route exact path="/" component={Landing} />
    //                 <Route exact path="/amber" component={Amber} />
    //             </Switch>
    //         </CSSTransition>
    //     </TransitionGroup>
    // </main>
))

export default App;

