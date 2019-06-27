import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import '../styles/Palette.css';

const styles = {
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    paletteColors: {
        height: '90%'
    }
}

class Palette extends Component {
    constructor(props) {
        super(props)
        this.onSlideChange = this.onSlideChange.bind(this);
        this.changeForamt = this.changeForamt.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            darkness: 500,
            value: 'hex',
            open: false
        }
    }

    onSlideChange(v) {
        let nv = v + (100 - (v % 100));
        this.setState(state => ({
            darkness: nv <= 900 ? nv : 900
        }))
    }

    changeForamt(e) {
        this.setState(state => ({
            ...state,
            value: e.target.value,
            open: true
        }));
        setTimeout(() => {
            this.setState(state => ({
                ...state,
                open: false
            }))
        }, 3000);
    }

    handleClose() {
        this.setState(state => ({
            ...state,
            open: false
        }))
    }

    render() {
        const { darkness, value, open } = this.state
        const { colors, id } = this.props.palette
        const { classes } = this.props;

        const colorBoxes = colors[darkness].map(((color, i) => (
            <ColorBox showLink paletteId={id} id={color.id} key={color.id} background={color[this.state.value]} name={color.name} />
        )))
        return (
            <div className={classes.root}>
                {/* Navbar goes here */}
                <Navbar displaySlider value={value} changeFormat={this.changeForamt} level={darkness} darkness={darkness} onSlideChange={this.onSlideChange} />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div>

                <PaletteFooter handleClose={this.handleClose} value={value} open={open} name={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);