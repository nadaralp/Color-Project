import React from 'react';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from '../Style/MiniPalette.js';

const MiniPalette = ({ classes, paletteName, id, colors, emoji, history }) => {
    const miniColorBoxes = colors.map((color, index) => <div key={index} style={{ background: color.color }} className={classes.miniBox}></div>)
    return (
        <div onClick={() => history.push(`/palette/${id}`)} className={classes.root}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withRouter(withStyles(styles)(MiniPalette)); 
