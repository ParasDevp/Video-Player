import { Box, Button, Grid, TextField, Typography, styled } from "@mui/material";
import ReactPlayer from "react-player";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


export const PlayListBox = styled(Box)(({ theme }) => ({
    margin: '25px 30px 40px 30px',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
    },
}));
export const PlaylistText = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    fontWeight: '800',
    marginRight: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        marginRight: '10px',
    },
}));
export const PlayListField = styled(TextField)(({ theme }) => ({
    marginRight: '20px',
    [theme.breakpoints.down('md')]: {
    },
}));
export const DragIcon = styled(DragIndicatorIcon)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        fontSize: '30px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
    },
}));
export const ListBox = styled(Box)(({ theme }) => ({
    width: '80%',
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
        width: '90%',
        display: 'flex',
    },
}));
export const Player = styled(ReactPlayer)(({ theme }) => ({
    height: '340px !important',
    width: '100% !important',
    [theme.breakpoints.down('md')]: {
    },
}));
export const DropBox = styled(Box)(({ theme }) => ({
    height: '400px',
    background: '#d7d4d4',
    boxShadow: '5px 5px 10px 1px #c7baba',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('md')]: {
        width: '60%',
        justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        justifyContent: 'center',
    },
}));
export const DropGrid = styled(Grid)(({ theme }) => ({


    [theme.breakpoints.down('md')]: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
    },
}));
export const UpperBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    cursor: 'pointer',
    height: '40px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px 10px 30px',

    [theme.breakpoints.down('md')]: {
    },
}));
export const CloseEvent = styled(CloseIcon)(({ theme }) => ({
    color: 'red',

    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },
}));
export const DoneEvent = styled(DoneIcon)(({ theme }) => ({
    color: 'green',

    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },
}));
export const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
    },
}));
export const EditIcon = styled(ModeEditOutlineOutlinedIcon)(({ theme }) => ({


    [theme.breakpoints.down('md')]: {
        fontSize: '20px'

    },
}));
export const AddButton = styled(Button)(({ theme }) => ({


    [theme.breakpoints.down('md')]: {
        fontSize: '12px'

    },
}));
export const FormHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
    },
}));
export const AddText = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: '600',

    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        fontWeight: '600',
    },
}));
export const FieldBox = styled(Box)(({ theme }) => ({
    marginTop: '50px',

    [theme.breakpoints.down('md')]: {
    },
}));
export const ButtonBox = styled(Box)(({ theme }) => ({
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
        marginTop: '50px',
    },
}));