import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { compose } from 'recompose'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles'
import { Button, Zoom, ExpansionPanelActions, Avatar, Grid, ClickAwayListener } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import ClientTable from './ClientTable';

import OrdersContainer from '../container/OrdersContainer';
import Icon from '../media/firebase_icon.png'

const drawerWidth = 240;

const styles = theme => ({
    root: {

    },
    appBar: {
        zIndex: 1201,
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
    },
    drawer: {
        flexShrink: 0,
        width: 55,
        [theme.breakpoints.up('sm')]: {
            width: 180,
        },
        [theme.breakpoints.up('md')]: {
            width: 240,
        },

    },
    drawerPaper: {
        width: 55,
        background: '#2f3a4c',
        [theme.breakpoints.up('sm')]: {
            width: 180,
        },
        [theme.breakpoints.up('md')]: {
            width: 240,
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        overflow: 'scroll',
        background: '#edeef0 !important',
    },
    headerToolbar: {
        background: '#fff',
        paddingLeft: 0,
    },
    appLogo: {
        width: 55,
        background: theme.palette.secondary.main,
        [theme.breakpoints.up('sm')]: {
            width: 180,
        },
        [theme.breakpoints.up('md')]: {
            width: 240,
        },
    },
    breadcrumb: {
        paddingLeft: 16,
    },
    // accordianRoot: {
    //     width: '100%',
    // },
    // heading: {
    //     fontSize: theme.typography.pxToRem(15),
    //     // flexBasis: '33.33%',
    //     // flexShrink: 0,
    //     whiteSpace: 'nowrap',
    //     overflow: 'hidden',
    //     textOverflow: 'ellipsis',
    // },
    // secondaryHeading: {
    //     fontSize: theme.typography.pxToRem(15),
    //     color: theme.palette.text.secondary,
    //     whiteSpace: 'nowrap',
    //     overflow: 'hidden',
    //     textOverflow: 'ellipsis',
    //     [theme.breakpoints.down('sm')]: {
    //         paddingLeft: 16,
    //         width: 180,
    //     },
    // },
    snapshot: {
        position: 'absolute',
        left: 0,
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)  0ms',
        boxShadow: '5px 9px 30px 2px rgba(0,0,0,0.25)',
    },
    snapshotActive: {
        left: '-70vw',
        transform: 'scale(0.9)',
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) ',
    },
    navigation: {
        position: 'absolute',
        height: '100vh',
        right: '-70vw',
        width: '70vw',
        // background: '#2f4156',
        // boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) ',
    },
    navigationActive: {
        right: 0,
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms ',
    },

    navBadge: {
        // background: theme.palette.secondary.main,
        // border: '1px solid black', 
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        marginTop: '2.5vh',
        height: 'calc((56px * 0.9) + 5vh)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    listItem: {
        // color: theme.palette.primary.contrastText,
        color: 'white !important',
    },
    listItemSelected: {
        borderLeft: `4px solid ${theme.palette.secondary.main}`,
    },
    listItemText: {
        // color: theme.palette.primary.contrastText,
        color: 'white !important',
    },
    listItemIcon: {
        // color: theme.palette.primary.contrastText,
        color: 'white !important',
    },

});



// Main Class
class Dashboard extends Component {
    state = {
        navigationVisible: false
    }

    render() {
        const { classes, store, location } = this.props
        const { navigationVisible } = this.state
        return (
            <div id="Dashboard" className={classes.root}>
                <Snapshot classes={classes} store={store} />
                <Navigation classes={classes} store={store} />
                {store.navigationVisible && <div id="ClickAway" style={{ width: '30vw', height: '100vh', position: 'fixed' }}
                    onClick={() => { store.toggleBoolean("navigationVisible") }} />}
            </div>

            // <Zoom in>
            //     <div className={classes.root}>
            //         <CssBaseline />
            //         <AppBar position="fixed" color="secondary" className={classes.appBar}>
            //             <Toolbar className={classes.headerToolbar}>
            //                 <Toolbar className={classes.appLogo}></Toolbar>
            //                 <Typography component="h1" variant="h6" className={classes.breadcrumb} noWrap >Dashboard</Typography>
            //             </Toolbar>
            //         </AppBar>
            //         <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }} anchor="left" >
            //             <div className={classes.toolbar} />
            //             <Divider />
            //             <List> {['Clients', 'Invoices', 'Navigate', 'Services', 'Records', 'Budget'].map((text, index) => (
            //                 <ListItem button key={text}> <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> <ListItemText primary={text} /> </ListItem>
            //             ))} </List>
            //         </Drawer>
            //         <main className={classes.content}>
            //             <div className={classes.toolbar} />
            //             <ClientTable />
            //         </main>
            //     </div>
            // </Zoom>
        )
    }

}

// Main Export
export default compose(
    withStyles(styles),
    observer
)(Dashboard)

const Snapshot = observer(({ classes, store }) => (
    <main id="Snapshot" className={classNames(classes.snapshot, store.navigationVisible && classes.snapshotActive)} >
        <Switch location={location}>
            <Route path="/amber/overview" render={() => (<h1>Overview</h1>)} />
            <Route path="/amber/clients" render={() => (<h1>Clients</h1>)} />
            <Route path="/amber/orders" component={OrdersContainer} />
            <Route path="/amber/navigate" render={() => (<h1>Navigate</h1>)} />
            <Route path="/amber/services" render={() => (<h1>Services</h1>)} />
            <Route path="/amber/records" render={() => (<h1>Records</h1>)} />
            <Route path="/amber/budget" render={() => (<h1>Budget</h1>)} />
        </Switch>
    </main>
))

const linkData = [
    {
        to: '/amber/overview',
        label: 'Overview',
    },
    {
        to: '/amber/clients',
        label: 'Clients',
    },
    {
        to: '/amber/orders',
        label: 'Orders',
    },
    {
        to: '/amber/navigate',
        label: 'Navigate',
    },
    {
        to: '/amber/services',
        label: 'Services',
    },
    {
        to: '/amber/records',
        label: 'Records',
    },
    {
        to: '/amber/budget',
        label: 'Budget',
    },
    {
        to: '/amber/settings',
        label: 'Settings',
    },
    {
        to: '/amber/orders/JlW4zXqQp8Ye5ckNtI4T',
        label: 'JlW4zXqQp8Ye5ckNtI4T',
    },
]

const Navigation = ({ classes, store }) => (
    <aside id="Naviagtion" className={classNames(classes.navigation, store.navigationVisible && classes.navigationActive)} >
        <NavigationBadge classes={classes} store={store} />
        <NavigationLinks classes={classes} store={store} />
    </aside>
)

const NavigationBadge = ({ classes, store }) => (
    <aside id="Naviagtion" className={classes.navBadge} >
        <img src={Icon} style={{ height: 40, marginRight: 16 }} />
        <Typography variant="headline" style={{ color: '#fff' }}>Amber</Typography>
    </aside>
)

const NavigationLinks = withRouter(
    observer(({ classes, store, location }) => (
        <List>
            {linkData.map((item, index) => (
                <ListItem button component={Link} to={item.to} classes={{ selected: classes.listItemSelected }} selected={item.to == location.pathname}
                    onClick={() => {
                        store.toggleBoolean("navigationVisible")
                    }} >
                    <ListItemIcon className={classes.listItemIcon}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.label} className={classes.listItemText} />
                </ListItem>
            )
            )}
        </List>
    ))
)


// import React, { Fragment } from 'react'
// import { observer } from 'mobx-react'
// import { compose } from 'recompose'
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles'
// // import Icon from 'mdi-material-ui/CloudUploadOutline'
// import { Button, TextField, Grid, Paper, Typography, Dialog } from '@material-ui/core';

// const styles = theme => ({
//     root: {
//         marginTop: 'calc((50vh - 250px))',
//         marginBottom: 0,
//         overflow: 'hidden',
//     },
//     backdrop: {
//         // background: theme.palette.primary.main
//     },
//     paper: {
//         marginTop: theme.spacing.unit * 6,
//         marginBottom: theme.spacing.unit * 6,
//         padding: theme.spacing.unit * 3,
//     },
//     buttons: {
//         display: 'flex',
//         justifyContent: 'flex-end',
//         marginLeft: 'auto',
//         marginRight: theme.spacing.unit,
//         marginBottom: theme.spacing.unit,
//     },
//     button: {
//         marginLeft: theme.spacing.unit * 2,
//     },
//     urlDomain: {
//         marginTop: theme.spacing.unit * 2,
//         fontWeight: 400,
//     },
//     urlSlug: {
//         color: theme.palette.primary.main,
//     },
//     icon: {
//         marginTop: theme.spacing.unit * 3,
//         fill: '#dedede',
//         display: 'block',
//         margin: 'auto',
//         fontSize: 90,
//     },
//     red: {
//         maxWidth: 700,
//         color: 'blue !important',
//     }
// })

// // Main Class
// const PublishScreen = observer(({ classes, store }) => (
//     <main id="PublishScreen">
//         <Dialog open={store.publishModal} onBackdropClick={e => { store.togglePublishModal() }} disablePortal={true} scroll={'body'} classes={{ root: classes.root, container: classes.backdrop, paper: classes.paper }} >
//             <PublishForm classes={classes} store={store} />
//         </Dialog>
//     </main>
// ))

// const PublishForm = ({ classes, store }) => (
//     <Fragment>
//         <Typography variant="h4" align="center">Publish</Typography>
//         <Grid container spacing={16} alignItems="center">
//             {/* <PublishIcon classes={classes} /> */}
//             <TpotSlug classes={classes} store={store} />
//             <InputField half="true" label="Title" onChange={e => { store.setPublishData('title', e.target.value) }} />
//             <InputField half="true" label="Slug" onChange={e => { store.setPublishData('slug', e.target.value) }} />
//             <InputField label="Excerpt (optional)" onChange={e => { store.setPublishData('excerpt', e.target.value) }} multiline rows={3} helperText="Enter a brief, meaningful description for search results." />
//             <FormButtons classes={classes} store={store} />
//         </Grid>
//     </Fragment>
// )

// const TpotSlug = observer(({ classes, store }) => (
//     <Grid item xs={12}>
//         <Typography className={classes.urlDomain} variant="h6" align="center">
//             {'www.thepathoftruth.com/letters/'}
//             <span className={classes.urlSlug}>{store.publishData.slug}</span>
//             {'.htm'}
//         </Typography>
//     </Grid>
// ))

// const InputField = (props) => (
//     props.half
//         ? <Grid item xs={6}><TextField fullWidth variant="outlined" {...props} /></Grid>
//         : <Grid item xs={12}><TextField fullWidth variant="outlined" {...props} /></Grid>
// )

// const FormButtons = ({ classes, store }) => (
//     <div className={classes.buttons}>
//         <Button variant="contained" onClick={this.handleNext} className={classes.button} >Preview</Button>
//         <Button variant="contained" color="primary" onClick={e => { store.publishToWordpress() }} className={classes.button} >Submit</Button>
//     </div>
// )

// // const PublishIcon = ({ classes }) => (
// //     <Grid item xs={12}><Icon className={classes.icon} /></Grid>
// // )

// // Main Export
// export default compose(
//     withStyles(styles),
//     // observer
// )(PublishScreen)