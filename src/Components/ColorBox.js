import React, { Component } from 'react';
import '../styles/Colorbox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles, styled } from '@material-ui/styles';
import styles from '../Style/ColorBox';

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
                <div style={{ background }} className={classes.colorBox}>
                    <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }}></div>
                    <div className={`copy-message ${copied && 'show'}`}><h1>Copied</h1><p className={classes.darkenText}>{background}</p></div>
                    <div >
                        <div className={classes.boxContent}>
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