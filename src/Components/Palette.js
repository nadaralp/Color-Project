import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import '../styles/Palette.css'

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.onSlideChange = this.onSlideChange.bind(this);
        this.state = {
            darkness: 500
        }
    }

    onSlideChange(v) {
        let nv = v + (100 - (v % 100));
        this.setState(state => ({
            darkness: nv <= 900 ? nv : 900
        }))
    }

    render() {
        const { darkness } = this.state
        const { colors } = this.props.palette

        const colorBoxes = colors[darkness].map(((color, i) => (
            <ColorBox key={i} background={color.hex} name={color.name} />
        )))
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <Navbar level={darkness} darkness={darkness} onSlideChange={this.onSlideChange} />
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>


                {/* Footer */}
            </div>
        )
    }
}
