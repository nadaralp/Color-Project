import React from 'react'

const PaletteFooter = ({ name, emoji }) => {
    return (
        <footer style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 15px",
            marginTop: "5px",
            opacity: "0.9"
        }}>
            <span style={{
                background: "#c8ccd1",
                opacity: "1"
            }}>{name} <small style={{
                padding: "5px"
            }}>{emoji}</small></span>
        </footer>
    )
}

export default PaletteFooter
