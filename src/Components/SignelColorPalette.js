import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'

export default class SignelColorPalette extends Component {
    constructor(props) {
        super(props)
        this.changeFormat = this.changeFormat.bind(this);
        this.state = {
            value: 'hex'
        }
    }

    changeFormat(e) {
        this.setState(state => ({
            ...state,
            value: e.target.value
        }))
    }

    render() {
        const { palette: { colors, emoji, paletteName }, match: { params } } = this.props;
        const { value } = this.state;
        const colorName = params.colorId.toUpperCase();


        const generatePaletteColors = (shades) => {
            const shadesOfId = [];
            for (let key in shades) {
                key !== '50' && shadesOfId.push(shades[key].find(color => color.id === params.colorId))
            }
            return shadesOfId;
        };
        const paletteColors = generatePaletteColors(colors);
        const colorBoxes = paletteColors.map(color => <ColorBox background={color[value]} showLink={false} id={color.id} name={color.name} color={color.hex} />)
        return (
            <React.Fragment>
                <Navbar changeFormat={this.changeFormat} value={value} displaySlider={false} />
                <div className="Palette">
                    <div className="Palette-Colors">
                        {colorBoxes}
                    </div>
                    <PaletteFooter name={colorName} emoji={emoji} />
                </div>
            </React.Fragment>

        )
    }
}
