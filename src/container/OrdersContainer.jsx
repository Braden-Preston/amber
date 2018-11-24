import React, { Component, Fragment } from 'react'
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
                <Orders />
            </main>
        )
    }
}

export default compose(
    // inject('dashboardStore'),
    withStyles(styles),
    observer
)(OrdersContainer);