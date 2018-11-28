import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase, Button } from '@material-ui/core';
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
        zIndex: 1,
    },
    appBar: {
        display: 'flex',
        height: 56,
    },
    panel: {
        justifyContent: 'center',
        flexDirection: 'row',
        overflowX: 'hidden',
        overflowY: 'scroll',
        flexWrap: 'wrap',
        display: 'flex',
        zIndex: 1,
        flex: 1,
    },
    canvas: {
        background: 'rgba(0,140,255,0.7)',
        flexDirection: 'column',
        display: 'flex',
        height: 250,
        zIndex: 1,
        flex: 1,
    },
    sliceContainer: {

        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // flex: 1,
        // overflowY: 'scroll',
        // overflowX: 'hidden',
        background: theme.palette.background.default,
        background: '#f7f7f7',
        // height: '100%',
        // border: '2px solid red !important',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: -12,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    toolbar: {
        background: theme.palette.secondary.main
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        // width: (window.innerWidth - 168),
        width: 120,
        '&:focus': {
            width: 236,
        },
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    flex: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // '& div': {
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        // },
        // overflowY: 'hidden',
        // overflowX: 'scroll',
    },


    paper: {
        position: 'realtive',
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        width: 'calc(100vw - 32px)',
    },
    svg: {
        // position: 'absolute',
        // top: '50%',
        // transform: 'translateX(-50%)',
        // zIndex: -1,
    },
    overlay: {
        // display: 'flex',
        position: 'relative',
        // display: 'block',
        height: 100,
        width: 100,
        background: 'grey !important',
        border: '2px solid red !important',
        // position: 'absolute',
        // top: '50%',
        // transform: 'translateX(-50%)',
        zIndex: 9999999,
    }
});

class Orders extends React.Component {
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
            <div id="Orders" className={classes.root}>
                <ActionBar classes={classes} store={store} />
                <Button button component={Link} to={'/amber/orders'} color="secondary" variant="outlined" >{"<-- Back to Orders"}</Button>
                <h1>{`Customer ID: ${match.params.id}`}</h1>
                <h2>{customer.firstname}</h2>
                <h2>{customer.lastname}</h2>
                <h3>{customer.date_created}</h3>
                <p>Invoices [ ]: </p>
                <h3>{customer.orders}</h3>
            </div>
        )
    }
}

export default compose(
    // inject('dashboardStore'),
    withStyles(styles),
    observer
)(withRouter(Orders));

const ActionBar = ({ classes, store }) => (
    <div id="AppBar" className={classes.appBar}>
        <AppBar position="static" color="secondary">
            <Toolbar className={classes.toolbar}>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}> <SearchIcon /> </div>
                    <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} />
                </div>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={() => { store.toggleBoolean("navigationVisible") }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
)

