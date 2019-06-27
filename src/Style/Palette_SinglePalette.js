import chroma from 'chroma-js';

export default {
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: "50%",
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: "1",
        background: "black",
        "& a": {
            color: "white",
            background: "rgba(255, 255, 255, 0.4)",
            textDecoration: "none",
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
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            opacity: '1',
            cursor: 'pointer',
        }
    }
}