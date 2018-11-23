import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Collapse } from '@material-ui/core';

const styles = {
    root: {
        // css atrributes
    },
};

const colorMap = [
    '#d198f5',
    '#aaa0e0',
    '#37e9f3',
    '#ffc92a',
    '#18ceb6',
    '#8184de',
    '#b8bfcc',
    '#af8f82',
    '#ec5b53',
    '#fb87ac',
    '#4dd0f9',
    '#6197fb',
    '#ff8f63',
    '#ace880',
    '#a56ae4',
    '#f95085',
    '#31d298',
    '#ffc07c',
    '#decaa4',
    '#a0ccd4',
    '#58f1c1',
    '#e46da9',
    '#79e28c',
    '#a3e1e8',
    '#ce8f8f',
    '#d4b4a7'
]

class ColorAvatar extends React.Component {
    render() {
        const { classes, initials, color} = this.props
        const index = Math.floor(Math.random() * 10)
        return (
            
            <Collapse in><Avatar style={{ background: `${colorMap[index]}` }}>{initials}</Avatar></Collapse>
        )
    }
}

export default withStyles(styles)(ColorAvatar);