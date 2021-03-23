import React from "react";
import { default as MSnackbar, SnackbarProps } from "@material-ui/core/Snackbar";

const Snackbar = (props: SnackbarProps) => {
    const { open, message, onClose } = props;
    return <MSnackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        onClose={onClose}
        open={open}
        autoHideDuration={2000}
        message={message}
    />
}

export default Snackbar