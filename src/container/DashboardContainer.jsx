import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import Dashboard from '../presentation/Dashboard'
import OrdersContainer from './OrdersContainer';

const styles = {
    root: {
        // css atrributes
    },
}

class DashboardContainer extends Component {
    state = {
        // property
    }
    render() {
        const { dashboardStore: store, ...rest } = this.props
        return (   
            <main id="Dashboard">
                {/* <Dashboard {...rest} store={store} /> */}
                <OrdersContainer {...rest} store={store} />
            </main>
        )
    }
}

// export {
//     DashboardContainer,
// };

export default DashboardContainer

// export default compose(
//     // inject('dashboardStore'),
//     withStyles(styles),
//     observer
// )(DashboardContainer);