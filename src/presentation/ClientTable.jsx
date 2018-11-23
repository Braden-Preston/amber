import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Zoom, ExpansionPanelActions, Avatar, Grid, Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';

import Hidden from '@material-ui/core/Hidden';
import ColorAvatar from './ColorAvatar';

const styles = theme => ({
    root: {
        // css atrributes
    },
    tableRoot: {
        width: '100%',
        overflowX: 'scroll',
        margin: 'auto',
        marginTop: theme.spacing.unit * 2,
        maxWidth: 1200,
    },
    tableWrapper: {
        width: '100%',
        // border: '1px solid red',
    },
    tableAvatar: {
        minWidth: 50
    },
    tableName: {
        minWidth: 120
    },
    tableDate: {
        minWidth: 200
    },
    tableId: {
        minWidth: 200
    },
    tableAction: {
        textAlign: 'right',
        minWidth: 150
    },
    accordianRoot: {

    },
});

class ClassName extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props
        const { expanded } = this.state;

        const customers = [
            {
                id: "4DE8H3S5H8R4H6D2T8487",
                firstname: 'Bob',
                lastname: 'Billybob',
                address1: '4068 Meadow Park',
                address2: '',
                city: 'Grandview',
                zipcode: '78902',
                state: 'TX',
                status: 'Active',
                date: 'Saturday, September 15th',
                description: 'Clean out sink and hang up picture in the living room.'
            },
            {
                id: "R55KI57595R4JF5ERE45RTJ",
                firstname: 'Mary',
                lastname: 'Mento',
                address1: '216 Boulder Way',
                address2: 'APT 1318',
                city: 'Coppel',
                zipcode: '74512',
                state: 'TX',
                status: 'Pending',
                date: 'Friday, November 7th',
                description: 'Feed the dog, clean the poops.'
            },
            {
                id: "ZZERT71561K5YLKDRTK65F",
                firstname: 'Serverus',
                lastname: 'Snap',
                address1: '4040 Sliterin Slums',
                address2: 'APT 11',
                city: 'Salasar',
                zipcode: '29851',
                state: 'TX',
                status: 'Complete',
                date: 'Tuesday, June 18th',
                description: 'The potions closet is overgrown with weeds, pull them.'
            },
            {
                id: "AE4JR84DJRR654K8U46SF",
                firstname: 'Moldy',
                lastname: 'Goldy',
                address1: '12 Applebee Crossway',
                address2: '',
                city: 'Mariand',
                zipcode: '768621',
                state: 'TX',
                status: 'Complete',
                date: 'Monday, August 2nd',
                description: 'Sink needs drained, also need to clean cat box.'
            }
        ]

        return (
            <Table className={classes.tableRoot}>
                {/* <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell numeric>Calories</TableCell>
                        <TableCell numeric>Fat (g)</TableCell>
                        <TableCell numeric>Carbs (g)</TableCell>
                        <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                </TableHead> */}
                {customers.map((customer, index) => (
                    <ExpansionPanel className={classes.accordianRoot} key={index} expanded={expanded === customer.id} onChange={this.handleChange(customer.id)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            {/* <Grid className={classes.tableAvatar}> <Avatar classes>BP</Avatar> </Grid> */}
                            <ColorAvatar initials={`${customer.firstname.charAt(0)}${customer.lastname.charAt(0)}`}/>
                            <Grid className={classes.tableWrapper} container spacing={16} direction="row" justify="space-between" alignItems="center">
                                <Grid className={classes.tableName} item> <Typography >{customer.firstname}</Typography> </Grid>
                                <Grid className={classes.tableName} item> <Typography >{customer.lastname}</Typography></Grid>
                                <Grid className={classes.tableDate} item> <Typography >{customer.date}</Typography> </Grid>
                                <Grid className={classes.tableId} item> <Typography noWrap ><a href="#">{customer.id}</a></Typography> </Grid>
                            </Grid>
                            <Grid className={classes.tableAction} item> <Button variant="outlined">{customer.status}</Button> </Grid>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>

                    //     <Grid container direction="row" justify="space-evenly" alignItems="center">
                    //         <Grid item sm={3}>
                    //             <Avatar classes>BP</Avatar>
                    //         </Grid>
                    //         <Grid item>
                    //             <Typography >{customer.name}</Typography>
                    //         </Grid>
                    //         <Grid item>
                    //             <Typography noWrap >{customer.description}</Typography>
                    //         </Grid>
                    //     </Grid>
                    // {/* <ExpansionPanelDetails>
                    //                 <Typography> Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam. </Typography>
                    //             </ExpansionPanelDetails>
                    //             <ExpansionPanelActions>
                    //                 <Button size="small">Cancel</Button>
                    //                 <Button size="small" color="primary"> Save </Button>
                    //             </ExpansionPanelActions> */}
                ))}
            </Table>
        )
    }
}

const Date = ({ classes, customer }) => (
    <Grid className={classes.tableDate} item> <Typography >{customer.date}</Typography> </Grid>
)

// const ExpansionPanelQuickLook = ({customer}) => (

// )

export default withStyles(styles)(ClassName);