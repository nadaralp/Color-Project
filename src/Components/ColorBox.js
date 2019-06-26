import React, { Component } from 'react';
import '../styles/Colorbox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';

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

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        const { name, background, paletteId, id } = this.props;
        const { copied } = this.state;
        const StyledLink = styled(Link)({
            textDecoration: 'none',
            "&:visited, &:focus, &:active, &:link, &:hover": {
                textDecoration: "none",
                color: "inherit"
            }
        })

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
                    <div className={`copy-message ${copied && 'show'}`}><h1>Copied</h1><p>{background}</p></div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more"> <StyledLink onClick={e => e.stopPropagation()} to={`/palette/${paletteId}/${id}`} >More</StyledLink></span>
                </div>
            </CopyToClipboard>
        )
    }
}
