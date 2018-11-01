import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';

class Account extends React.Component {
    render() {
        const { sessionStore } = this.props
        return (
            <div>
                <h1>Account: {sessionStore.authUser.email}</h1>
                <p>The Home Page is accessible only when signed in.</p>
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    inject('sessionStore'),
    observer
)(Account);