import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles, mergeClasses } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
        gridGap: "1%"
    }
}

const PaletteList = ({ palettes, classes }) => {
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React palette list</h1>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map((color, index) => (
                        <MiniPalette {...color} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList);
