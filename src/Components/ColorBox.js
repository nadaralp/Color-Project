import React, { Component } from 'react';
import '../styles/Colorbox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles, styled } from '@material-ui/styles';
import chroma from 'chroma-js';

const styles = {
    darkenText: {
        color: props => chroma(props.background).luminance() >= 0.55 ? "rgba(0, 0, 0, 0.9)" : "white"
    },
    seeMore: {
        position: 'absolute',
        background: props => chroma(props.background).luminance() >= 0.55 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        right: '0px',
        bottom: '0px',
        color: props => chroma(props.background).luminance() >= 0.55 ? "rgba(0, 0, 0, 0.9)" : "white",
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: props => chroma(props.background).luminance() >= 0.55 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: props => chroma(props.background).luminance() >= 0.55 ? "rgba(0, 0, 0, 0.9)" : "white",
        textTransform: 'uppercase',
        border: 'none',
        opacity: '0',
        cursor: 'pointer',
        ".ColorBox:hover &": {
            opacity: '1',
            transition: '0.5s',
        }
    }
}


class ColorBox extends Component {

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
        const { name, background, paletteId, id, renderer, classes } = this.props;
        const { copied } = this.state;
        const StyledLink = styled(Link)({
            textDecoration: 'none',
            "&:visited, &:focus, &:active, &:link, &:hover": {
                textDecoration: "none",
                color: "inherit"
            }
        });

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
                    <div className={`copy-message ${copied && 'show'}`}><h1>Copied</h1><p className={classes.darkenText}>{background}</p></div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.darkenText}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {
                        this.props.showLink && <span className={classes.seeMore}> <StyledLink onClick={e => e.stopPropagation()} to={`/palette/${paletteId}/${id}`} >More</StyledLink></span>
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);