import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ColorAvatar from '../presentation/ColorAvatar';
import { StickyContainer, Sticky } from 'react-sticky';

const styles = theme => ({
    root: {
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        display: 'flex',
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
        flex: 1,
    },
    canvas: {
        background: 'rgba(0,140,255,0.7)',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        height: 250,
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
    }
});

class Orders extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div id="Orders" className={classes.root}>
                {/* <div id="Flex" className={classes.flex}> */}
                <ActionBar classes={classes} />
                {/* <div id="Flex" className={classes.flex}> */}
                <div className={classes.panel}>
                    <Canvas classes={classes} />
                    <SliceContainer classes={classes} />
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>
        )
    }
}

export default withStyles(styles)(Orders);

const ActionBar = ({ classes }) => (
    <div id="AppBar" className={classes.appBar}>
        <AppBar position="static" color="secondary">
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
    </div>
)

const Canvas = ({ classes }) => (
    <div className={classes.canvas}>
        <Typography variant="h4" color="textSecondary">Orders</Typography>
    </div>
)

const SliceContainer = ({ classes }) => (
    <div className={classes.sliceContainer}>
        <SliceGroup classes={classes} />
        <SliceGroup classes={classes} />
        <SliceGroup classes={classes} />
        <SliceGroup classes={classes} />
        <SliceGroup classes={classes} />
    </div>
)

const SliceGroup = ({ classes }) => (
    <Fragment>
        <p>This Week</p>
        <Slice classes={classes} />
    </Fragment>
)

const Slice = ({ classes }) => (
    <Paper className={classes.paper} >
        <ColorAvatar initials="BP" />
        <p> Order 1 </p> <hr />
        <p>Order 2</p> <hr />
        <p>Order 3</p>
    </Paper >
)


