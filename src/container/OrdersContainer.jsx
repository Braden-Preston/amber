import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import Orders from '../presentation/Orders';
import OrdersPage from '../presentation/OrdersPage';

const styles = {
    root: {
        // css atrributes
    },
}

class OrdersContainer extends Component {
    state = {
        // property
    }
    render() {
        const { dashboardStore: store, ...rest } = this.props
        return (
            <main id="Orders">
                {/* <Orders store={store} /> */}
                {/* <Route path="/amber/orders" component={Orders} /> */}
                <Switch>
                    <Route exact path="/amber/orders/:id" render={(props) => <OrdersPage store={store} />} />
                    <Route exact path="/amber/orders" render={(props) => <Orders store={store} />} />
                </Switch>
            </main>
        )
    }
}

export default compose(
    inject('dashboardStore'),
    withStyles(styles),
    observer
)(OrdersContainer);