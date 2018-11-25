import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import Orders from './Orders';

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
                <Route path="/amber/orders" component={Orders} />
                <Route path="/amber/orders:idName" render={()=> <h1>NAME</h1>} />
            </main>
        )
    }
}

export default compose(
    // inject('dashboardStore'),
    withStyles(styles),
    observer
)(OrdersContainer);