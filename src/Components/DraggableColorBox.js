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
        marginBottom: '-4.4px'
    }
}));

const DraggableColorBox = (props) => {
    const { classes } = props;
    const { color } = props;
    console.log(props);

    return (
        <div className={classes.root}>
            {color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);
