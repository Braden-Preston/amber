import React, { Fragment, Component } from 'react'
import { observer } from 'mobx-react'
import { compose } from 'recompose'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles'
import { Button, Zoom, ExpansionPanelActions, Avatar, Grid } from '@material-ui/core';
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

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
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

});



// Main Class
class Dashboard extends Component {

    render() {
        const { classes, store } = this.props

        return (
            <Zoom in>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" color="secondary" className={classes.appBar}>
                        <Toolbar className={classes.headerToolbar}>
                            <Toolbar className={classes.appLogo}></Toolbar>
                            <Typography component="h1" variant="h6" className={classes.breadcrumb} noWrap >Dashboard</Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }} anchor="left" >
                        <div className={classes.toolbar} />
                        <Divider />
                        <List> {['Clients', 'Invoices', 'Navigate', 'Services', 'Records', 'Budget'].map((text, index) => (
                            <ListItem button key={text}> <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> <ListItemText primary={text} /> </ListItem>
                        ))} </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <ClientTable />
                    </main>
                </div>
            </Zoom>
        )
    }

}

// Main Export
export default compose(
    withStyles(styles),
    observer
)(Dashboard)


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