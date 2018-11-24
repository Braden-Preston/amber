import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        // border: '2px solid lime !important'
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
    appBar: {
        position: 'relative',
        // border: '2px solid lime !important'
    },
    sliceBox: {
        // position: 'relative',
        height: 'inherit',
        // border: '2px solid magenta !important',
    },
    header: {
        height: 250,
        background: 'rgba(0,140,255,0.7)'
    },
    slice: {
        height: '100%',
        background: theme.palette.background.default,
    },
    paper: {
        boxSizing: 'border-box',
        position: 'absolute',
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        width: 'calc(100vw - 32px)',
    }
});

class Orders extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div id="Orders" className={classes.root}>
                <ActionBar classes={classes} />
                <SliceContainer classes={classes} />
            </div>
        )
    }
}

export default withStyles(styles)(Orders);

const ActionBar = ({ classes }) => (
    <AppBar position="static" color="secondary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <div className={classes.grow} />
            <div className={classes.search}>
                <div className={classes.searchIcon}> <SearchIcon /> </div>
                <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} />
            </div>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
)

const SliceContainer = ({ classes }) => (
    <div className={classes.sliceBox}>
        <SvgHeader classes={classes} />
        <Slice classes={classes} />
    </div>
)

const SvgHeader = ({ classes }) => (
    <div className={classes.header}>
        <Typography variant="h4" color="textSecondary">Orders</Typography>
    </div>
)

const Slice = ({ classes }) => (
    <div className={classes.slice}>
        <PanelGroup classes={classes} />
    </div>
)

const PanelGroup = ({ classes }) => (
    <PanelSet classes={classes} />
)

const PanelSet = ({ classes }) => (
    <Paper className={classes.paper} >
        <p>Order 1</p> <hr />
        <p>Order 2</p> <hr />
        <p>Order 3</p>
    </Paper >
)


