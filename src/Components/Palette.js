import React, { Component } from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css'

export default class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(((color, i) => (
            <ColorBox key={i} background={color.color} name={color.name} />
        )))
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>

                {/* Footer */}
            </div>
        )
    }
}
