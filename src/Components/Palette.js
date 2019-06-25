import React, { Component } from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
            darkness: nv
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
                <Slider defaultValue={darkness} min={100} max={900} onChange={e => this.onSlideChange(e)} />
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>

                {/* Footer */}
            </div>
        )
    }
}
