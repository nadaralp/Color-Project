import React, { Component } from 'react';
import '../styles/Colorbox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import chroma from 'chroma-js';


export default class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState(state => ({
            copied: true
        }))

        setTimeout(() => {
            this.setState(state => ({
                copied: false
            }))
        }, 1500)
    };

    render() {
        const { name, background, paletteId, id, renderer } = this.props;
        const { copied } = this.state;
        const StyledLink = styled(Link)({
            textDecoration: 'none',
            "&:visited, &:focus, &:active, &:link, &:hover": {
                textDecoration: "none",
                color: "inherit"
            }
        });

        const isDarkColor = chroma(background).luminance() <= 0.1;
        const isLightColor = chroma(background).luminance() >= 0.6;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
                    <div className={`copy-message ${copied && 'show'} ${isLightColor && 'dark-text'}`}><h1>Copied</h1><p>{background}</p></div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && 'light-text'}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                    </div>
                    {
                        this.props.showLink && <span className={`see-more ${isLightColor && "dark-text"}`}> <StyledLink onClick={e => e.stopPropagation()} to={`/palette/${paletteId}/${id}`} >More</StyledLink></span>
                    }
                </div>
            </CopyToClipboard>
        )
    }
}
