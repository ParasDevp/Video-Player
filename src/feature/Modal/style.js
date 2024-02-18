import { Modal as MuiModal, Box, styled } from '@mui/material';

export const ModalPopup = styled(MuiModal)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .3s ease-out,-webkit-transform .3s ease-out',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export const ModalForm = styled(Box)(({ theme }) => ({
    backgroundColor: '#FFF !important',
    borderRadius: '10px',
    padding: '20px 30px',
    maxHeight: '90%',
    overflowY: 'scroll',
    width: '55%',
    '&::-webkit-scrollbar': {
        width: '8px !important'
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 0, 0, 0.15)',
        borderRadius: '10px 120px 120px 10px',
        height: '50%'
    },
    '&:focus': {
        outline: 'none !important'
    },
    [theme.breakpoints.down('lg')]: {
        padding: '20px 20px',
        width: '65%'
    },
    [theme.breakpoints.down('md')]: {
        padding: '20px 30px',
        width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
        borderRadius: '10px',
        padding: '20px 15px',
        width: '85%',
        maxHeight: '90%',
        overflowY: 'scroll',
        maxWidth: '90%',
    }
}));
