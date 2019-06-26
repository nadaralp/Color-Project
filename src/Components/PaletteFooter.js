import React from 'react';
import { Snackbar, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const PaletteFooter = (props) => {

    const { name, emoji, value, open, handleClose } = props;

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

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={<span id="message-id" >Format Changed to <span id="value-id">{value}</span></span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                action={[
                    <IconButton
                        aria-label="Close"
                        color="inherit"
                        key="close"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ]}

            />
        </footer>
    )
}

export default PaletteFooter
