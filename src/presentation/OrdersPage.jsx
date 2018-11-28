import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase, Button, Paper, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { observer } from 'mobx-react';
import { compose } from 'recompose'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'

import { db } from '../firebase'

const styles = theme => ({
    root: {
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        background: theme.palette.secondary.main,
        zIndex: 1,
    },
    paper: {
        margin: theme.spacing.unit * 3,
        flex: 1,
    },
    fab: {
        position: 'absolute',
        top: theme.spacing.unit * 4,
        right: theme.spacing.unit * 6,
    }



});

class OrdersPage extends React.Component {
    state = {
        customerInfo: {}
    }

    componentDidMount = async () => {
        const ID = this.props.match.params.id
        const customerInfo = await db.getClient(ID)
        this.setState({customerInfo})
    }

    render() {
        const { classes, store, match } = this.props
        const { customerInfo: customer } = this.state
        console.log(customer)
        return (
            <div id="OrdersPage" className={classes.root}>
                <Button button component={Link} to={'/amber/orders'} color="secondaryText" variant="outlined" >{"<-- Back to Orders"}</Button>
                <Paper className={classes.paper}>
                    <Button variant="fab"className={classes.fab}>Edit</Button>
                    <TextField id="firstname" color="secondary" className={classes.textField} margin="normal" value={customer.firstname} variant="outlined" />
                    <TextField id="lastname" color="secondary" className={classes.textField} margin="normal" value={customer.lastname} variant="outlined" />
                    <TextField id="date" color="secondary" className={classes.textField} margin="normal" value={customer.date_created} variant="outlined" />
 
                    {/* <h1>{`Customer ID: ${match.params.id}`}</h1>
                    <h2>{customer.firstname}</h2>
                    <h2>{customer.lastname}</h2>
                    <h3>{customer.date_created}</h3>
                    <p>Invoices [ ]: </p>
                    <h3>{customer.orders}</h3> */}
                </Paper>
            </div>
        )
    }
}

export default compose(
    // inject('dashboardStore'),
    withStyles(styles),
    observer
)(withRouter(OrdersPage));

