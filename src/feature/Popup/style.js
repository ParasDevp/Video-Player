import { DialogContent, DialogContentText, DialogActions, styled, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const DialogContentBox = styled(DialogContent)(({ theme }) => ({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    alignItems: `center`,
    width: '383px',
    padding: '30px',
    [theme.breakpoints.down('sm')]: {
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`,
        alignItems: `center`,
        width: '100%',
        padding: '20px',
    },
}));

export const DialogText = styled(DialogContentText)({
    fontSize: '18px !important',
    fontWeight: '700 !important',
});

export const DialogBodyText = styled(DialogContentText)({
    fontSize: '14px !important',
    fontWeight: '400 !important',
    color: '#222222 !important',
    lineHeight: '22px !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '110px',
});
export const DeleteLogo = styled(DeleteIcon)({
    color: 'red !important',
    height: '50px',
    width: '50px'
});

export const DialogButton = styled(DialogActions)({
    display: 'flex !important',
    justifyContent: 'center !important',
    marginBottom: '26px'
})
export const CurrentText = styled(Typography)({
    fontSize: '18px',
    fontWeight: '700',
    color: '#1A782C',
    textAlign: 'center'
})
export const Icon = styled('img')({
    fontSize: '50px',
    width: '50px'
})
export const ConfirmBox = styled(Box)({
    textAlign: 'center'
})