import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

class Home extends React.Component {

    constructor() {
        super()
        this.state = { 
            userStore: null,
        }
    }

    componentDidMount() {
        const { sessionStore } = this.props;
        console.log(sessionStore)
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default compose(
    inject('userStore'),
    observer
)(Home);