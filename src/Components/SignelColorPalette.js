import React, { Component } from 'react';
import ColorBox from './ColorBox';

export default class SignelColorPalette extends Component {

    render() {
        const { palette: { colors }, match: { params } } = this.props;
        const generatePaletteColors = (shades) => {
            const shadesOfId = [];
            for (let key in shades) {
                key !== '50' && shadesOfId.push(shades[key].find(color => color.id === params.colorId))
            }
            return shadesOfId;
        };
        const paletteColors = generatePaletteColors(colors);
        const colorBoxes = paletteColors.map(color => <ColorBox background={color.hex} showLink={false} id={color.id} name={color.name} color={color.hex} />)
        return (
            <div className="Palette">
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
