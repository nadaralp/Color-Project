import chroma from 'chroma-js';

export default {
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
    },
    boxContent: {
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '20',
        width: '100%',
        height: '100%',
        transition: 'transform 0.5s ease-out'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '30',
        position: 'absolute',
        overflow: 'hidden'
    },
    colorBox: {
        width: '20%',
        height: props => props.height ? "50%" : '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px'
    }
}