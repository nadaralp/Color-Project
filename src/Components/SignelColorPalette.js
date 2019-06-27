import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';

const styles = {
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: "50%",
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: "1",
        background: "black",
        "& a": {
            color: "white",
            background: "rgba(255, 255, 255, 0.4)",
            textDecoration: "none",
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            opacity: '1',
            cursor: 'pointer',
        }
    }
}


class SignelColorPalette extends Component {
    constructor(props) {
        super(props)
        this.changeFormat = this.changeFormat.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            value: 'hex',
            open: false
        }
    }

    changeFormat(e) {
        this.setState(state => ({
            ...state,
            value: e.target.value,
            open: true
        }))
    }

    handleClose() {
        this.setState(state => ({
            ...state,
            open: false
        }))
    }

    render() {
        const { palette: { colors, emoji, paletteName }, match: { params }, classes } = this.props;
        const { value, open } = this.state;
        const colorName = params.colorId.toUpperCase();

        const generatePaletteColors = (shades) => {
            const shadesOfId = [];
            for (let key in shades) {
                key !== '50' && shadesOfId.push(shades[key].find(color => color.id === params.colorId))
            }
            return shadesOfId;
        };
        const paletteColors = generatePaletteColors(colors);
        const colorBoxes = paletteColors.map((color, index) => <ColorBox height={"50%"} key={index} background={color[value]} showLink={false} id={color.id} name={color.name} color={color.hex} />)
        return (
            <React.Fragment>
                <Navbar changeFormat={this.changeFormat} value={value} displaySlider={false} />
                <div className={classes.root}>
                    <div className={classes.paletteColors}>
                        {colorBoxes}
                        <div className={classes.goBack}>
                            <Link to={`/palette/${params.paletteId}`}>GO BACK</Link>
                        </div>
                    </div>
                    <PaletteFooter open={open} handleClose={this.handleClose} value={value} name={colorName} emoji={emoji} />
                </div>
            </React.Fragment>

        )
    }
}


export default withStyles(styles)(SignelColorPalette);