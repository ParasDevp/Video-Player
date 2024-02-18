import React from 'react';
import { Snackbar as MuiSnackbar, Alert } from '@mui/material';

const SnackBar = ({ open, handleClose, message, isTime, error }) => {
    return (
        <MuiSnackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={isTime ? isTime : 4000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </MuiSnackbar>
    );
};


export default SnackBar
