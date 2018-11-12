import React from 'react';

import logo from '../logo.svg';
import '../App.css';

import Zoom from '@material-ui/core/Zoom';

class LandingPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>  Edit <code>src/App.js</code> and save to reload. </p>
                <Zoom in={true} timeout={3000}>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >  Learn React </a>
                </Zoom>
            </header>
        )
    }
}

export default LandingPage;

