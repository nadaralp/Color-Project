import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { Snackbar, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/Palette.css';

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.onSlideChange = this.onSlideChange.bind(this);
        this.changeForamt = this.changeForamt.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            darkness: 500,
            value: 'hex',
            open: false
        }
    }

    onSlideChange(v) {
        let nv = v + (100 - (v % 100));
        this.setState(state => ({
            darkness: nv <= 900 ? nv : 900
        }))
    }

    changeForamt(e) {
        this.setState(state => ({
            ...state,
            value: e.target.value,
            open: true
        }));
        setTimeout(() => {
            this.setState(state => ({
                ...state,
                open: false
            }))
        }, 3000);
    }

    handleClose() {
        this.setState(state => ({
            ...state,
            open: false
        }))
    }

    render() {
        const { darkness, value } = this.state
        const { colors } = this.props.palette

        const colorBoxes = colors[darkness].map(((color, i) => (
            <ColorBox key={i} background={color[this.state.value]} name={color.name} />
        )))
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <Navbar value={value} changeFormat={this.changeForamt} level={darkness} darkness={darkness} onSlideChange={this.onSlideChange} />
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>

                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={<span id="message-id" >Format Changed to <span id="value-id">{value}</span></span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={[
                        <IconButton
                            aria-label="Close"
                            color="inherit"
                            key="close"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}

                />
                {/* Footer */}
            </div>
        )
    }
}