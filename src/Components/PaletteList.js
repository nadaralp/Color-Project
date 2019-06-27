import React from 'react';
import MiniPalette from './MiniPalette';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from '../Style/PaletteList';

const PaletteList = ({ palettes, classes, history }) => {


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React palette list</h1>
                    <Button variant="contained" className={classes.button} onClick={() => history.push('/palette/new')} >
                        Create New Palette
                    </Button>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map((color, index) => (
                        <MiniPalette
                            {...color}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default withRouter(withStyles(styles)(PaletteList));
