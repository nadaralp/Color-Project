import React from 'react';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#f12bc2",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overFlow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "#000",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniBox: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.8px"
    }

}

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
