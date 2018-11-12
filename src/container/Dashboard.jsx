import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Zoom, Switch } from '@material-ui/core';

const styles = {
    root: {
        background: 'green',
    },
};

class Dashboard extends React.Component {
    state = {
        checked: false,
    };

    handleChange = () => {
        console.log(this.props)
        console.log(this.props.location.pathname)
        let path = this.props.location.pathname
        let route = '/dashboard'
        let toggle = path == route
        console.log(toggle)
        this.setState(state => ({ checked: !state.checked }));
    };

    render() {
        const { classes, history } = this.props
        const { checked } = this.state;
        let path = this.props.location.pathname
        let route = '/dashboard'
        let toggle = path == route
        console.log(toggle)
        return (
            <Fragment>
                <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
                {/* <Zoom in={toggle}> */}
                    <div className={classes.root}>
                        <h1>Dashboard</h1>
                    </div>
                {/* </Zoom> */}
            </Fragment>
        )
    }
}

export default withStyles(styles)(Dashboard);