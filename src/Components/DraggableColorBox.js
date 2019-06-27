import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = (theme => ({
    root: {
        background: props => props.backgroundColor,
        height: '25%',
        width: '20%',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-4.4px',
        "& span": {
            position: 'absolute',
            left: 0,
            bottom: 0,
            padding: '.4rem',
            fontSize: '12px',
            color: '#fff'
        }
    }
}));

const DraggableColorBox = (props) => {
    const { classes, name } = props;
    const { color } = props;
    console.log(props);

    return (
        <div className={classes.root}>
            <span>{name}</span>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);
