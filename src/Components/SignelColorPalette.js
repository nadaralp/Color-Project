import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom';

export default class SignelColorPalette extends Component {
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
        const { palette: { colors, emoji, paletteName }, match: { params } } = this.props;
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
        const colorBoxes = paletteColors.map(color => <ColorBox renderer={"SingleColorPalette"} background={color[value]} showLink={false} id={color.id} name={color.name} color={color.hex} />)
        return (
            <React.Fragment>
                <Navbar changeFormat={this.changeFormat} value={value} displaySlider={false} />
                <div className="Palette">
                    <div className="Palette-Colors">
                        {colorBoxes}
                    </div>
                    <PaletteFooter open={open} handleClose={this.handleClose} value={value} name={colorName} emoji={emoji} />
                </div>
            </React.Fragment>

        )
    }
}
