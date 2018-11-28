import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Collapse, Grid } from '@material-ui/core';
import OrdersPanel from '../presentation/OrdersPanel'


const styles = theme => ({
    root: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        width: '100%',
        // border: '1px solid blue',
    },
});

class ClassName extends React.Component {
    state = {
        open: false,
        current: null
    }

    handleOpen = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { classes, label, id, panels } = this.props
        const { open } = this.state
        return (
            <div id={`PanelGroup${id}`} className={classes.root}>
                <Grid item xs="12">
                    <Button variant="extendedFab" onClick={this.handleOpen}>-</Button>{label}
                    <Collapse in={open} timeout={'auto'}>
                        <OrdersPanel current={false} key="1"/>
                        <OrdersPanel current={true} key={'2'} />
                        <OrdersPanel current={false} key={'3'} />
                        <OrdersPanel current={false} key={'4'} />
                    </Collapse>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ClassName);