import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Icon } from '@material-ui/core'

const styles = (theme => ({
    root: {
        background: props => props.backgroundColor,
        height: '25%',
        width: '20%',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-4.4px',
        "&:hover span:last-of-type": {
            color: 'white',
            transform: 'scale(1.2)'
        }
    },
    boxContent: {
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',

    },
    icon: {
        color: 'rgba(0, 0, 0, 0.5)',
        transition: "all 0.3s ease-in-out",

    }
}));

const DraggableColorBox = (props) => {
    const { classes, name } = props;
    const { color } = props;

    return (
        <div className={classes.root}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <Icon className={classes.icon}>delete</Icon>
            </div>

        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);
