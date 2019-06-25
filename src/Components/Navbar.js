import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Palette.css';
import '../styles/Navbar.css';

const Navbar = ({ darkness, onSlideChange, level }) => {
    return (
        <nav className="Navbar">
            <div className="Logo">
                <a href="!#">ColorPicker</a>
            </div>
            <div className="pallete-slider">
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <Slider defaultValue={darkness} min={100} max={900} onChange={e => onSlideChange(e)} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
