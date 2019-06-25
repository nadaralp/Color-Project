import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
    return (
        <div>
            <MiniPalette />

            <h1>React palettes list</h1>
            {palettes.map((color, index) => (
                <MiniPalette {...color} />
            ))}

        </div>
    )
}

export default PaletteList
