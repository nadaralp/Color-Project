import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: 'purple',
        border: "3px solid teal",
        "& h1": {
            backgroundColor: "pink"
        },
        "&:hover": {
            backgroundColor: "blue"
        },
        "&:active": {
            backgroundColor: "black"
        }
    }

}

const MiniPalette = (props) => {
    const { classes } = props;
    console.log(props);
    return (
        <div className={classes.root}>
        </div>
    )
}

export default withStyles(styles)(MiniPalette); 
