import React from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import '../styles/Palette.css';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ darkness, onSlideChange, level, changeFormat, value }) => {

    return (
        <nav className="Navbar">
            <div className="Logo">
                <Link to="/">ColorPicker</Link>
            </div>
            <div className="pallete-slider">
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <Slider defaultValue={darkness} min={100} max={900} onChange={e => onSlideChange(e)} />
                </div>
            </div>
            <div className="select-container">
                <Select value={value} onChange={e => changeFormat(e)}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGB - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
        </nav>
    )
}

export default Navbar
