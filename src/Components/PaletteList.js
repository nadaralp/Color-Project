import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from '../Style/PaletteList';

const PaletteList = ({ palettes, classes }) => {


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React palette list</h1>
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

export default withStyles(styles)(PaletteList);
