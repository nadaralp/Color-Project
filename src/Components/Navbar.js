import React from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import '../styles/Palette.css';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifContent: 'flex-start',
        height: '6vh',
    },
    Logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        background: '#eceff1',
        fontFamily: "Roboto",
        height: '100 %',
        display: 'flex',
        "& a": {
            textDecoration: 'none',
            alignSelf: 'center',
            color: 'black',
            fontFamily: '"Roboto", sans - serif',
        }
    }
    //     Navbar.select - container {
    //     margin - left: auto;
    //     padding: 20px;
    // }
}

const Navbar = (props) => {

    const { darkness, onSlideChange, level, changeFormat, value, displaySlider } = props;

    return (
        <nav className="Navbar">
            <div className="Logo">
                <Link to="/">ColorPicker</Link>
            </div>
            {
                displaySlider &&
                <div className="pallete-slider">
                    <div className="slider-container">
                        <span>Level: {level}</span>
                        <Slider defaultValue={darkness} min={100} max={900} onChange={e => onSlideChange(e)} />
                    </div>
                </div>
            }
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

export default withStyles(styles)(Navbar);
