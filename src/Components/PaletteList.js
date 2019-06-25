import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = ({ palettes }) => {
    return (
        <div>
            <h1>React palettes list</h1>
            {palettes.map((color, index) => (
                <React.Fragment>
                    <Link style={{ display: "block", padding: 15 }} to={`/palette/${color.id}`} key={index}>go to {color.paletteName} palette</Link>
                </React.Fragment>
            ))}
        </div>
    )
}

export default PaletteList
