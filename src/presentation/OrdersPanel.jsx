import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Collapse, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'

const styles = theme => ({
    root: {
        // width: '100%',
        // border: '1px solid orange',
    },
})

const OrdersPanel = (props) => {
    // const name = `Panel${props.key}`
    // console.log(props)
    return (
        <div id={name} className={props.classes.root}>
            <Grid item xs="12">
                <p>Panel</p>
                <Collapse in={props.current} timeout={'auto'}>
                    <h5>I am current!</h5>
                    <Link to='/amber/orders/JlW4zXqQp8Ye5ckNtI4T'>JlW4zXqQp8Ye5ckNtI4T</Link>
                </Collapse>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(OrdersPanel);