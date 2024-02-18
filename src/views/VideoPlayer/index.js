import { Box, Button, Divider, Grid, IconButton, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { AddButton, AddText, ButtonBox, CloseEvent, DoneEvent, DragIcon, DropBox, DropGrid, EditIcon, FieldBox, FormHeader, HeaderBox, PlayListBox, PlayListField, Player, PlaylistText, UpperBox } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { setAddVideo, setRemoveVideo, setVideoList } from '../../feature/Slice/user';
import Modal from '../../feature/Modal';
import { useFormik } from 'formik';
import { VideoValidation } from '../../utils/validations';
import Popup from '../../feature/Popup';
import SnackBar from '../../feature/SnackBar';



const VideoPlayer = () => {
    const dragItem = useRef();
    const dispatch = useDispatch()

    const handleFormik = (data) => {
        dispatch(setAddVideo({
            id: uuidv4(),
            link: data.video
        }));
        setAddPopup(false)
        videoFormik.resetForm()
    }
    const videoFormik = useFormik({
        initialValues: {
            video: ''
        },
        validationSchema: VideoValidation(),
        onSubmit: handleFormik
    })
    const [isEdit, setIsEdit] = useState(false);
    const [addPopup, setAddPopup] = useState(false);
    const [deleteItem, setDeleteItem] = useState([]);
    const [deletePopup, setDeletePopup] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [value, setValue] = useState('My Playlist');
    const { videosList } = useSelector((state) => state.user)
    const [playlistValue, setPlayListValue] = useState('My Playlist');

    const dragOverItem = useRef();

    const drop = (e) => {
        const copyListItems = [...videosList];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        dispatch(setVideoList(copyListItems));
    };
    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    };
    const handleEdit = () => {
        setIsEdit(true);
    }
    const handleDone = () => {
        setValue(playlistValue)
        setIsEdit(false)
    }
    const handleClose = () => {
        setIsEdit(false)
        setPlayListValue(value)
    }
    const handleField = (e) => {
        setPlayListValue(e.target.value)
    }
    const handleClosepopup = () => {
        videoFormik.resetForm()
        setAddPopup(false)
    }

    const handleDelete = (item) => {
        setDeletePopup(true)
        setDeleteItem(item)
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }
    const handleDeleteCancel = () => {
        setDeletePopup(false)
        setDeleteItem([])
    }
    const handleDeleteOk = () => {
        dispatch(setRemoveVideo(deleteItem.id))
        setDeletePopup(false)
        setDeleteItem([])
        setDeleteSuccess(true)
    }

    return (
        <Box>
            <PlayListBox>
                {isEdit ? <>
                    <HeaderBox>
                        <Box>

                        </Box>
                        <Box>
                            <PlayListField type='text' variant='standard' value={playlistValue} defaultValue='' onChange={(e) => handleField(e)} />
                            <IconButton sx={{ cursor: 'pointer' }} onClick={handleDone}>
                                <DoneEvent />
                            </IconButton>
                            <IconButton sx={{ cursor: 'pointer' }} onClick={handleClose}>
                                <CloseEvent />
                            </IconButton>
                        </Box>
                        <Box>
                            <Button variant='contained'>Add Videos</Button>
                        </Box>
                    </HeaderBox>
                </> :
                    <>
                        <HeaderBox>
                            <Box>

                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <PlaylistText>{playlistValue}</PlaylistText>
                                <IconButton sx={{ cursor: 'pointer' }} onClick={handleEdit}>
                                    <EditIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <AddButton variant='contained' onClick={() => {
                                    setAddPopup(true)
                                }}>Add Videos</AddButton>
                            </Box>
                        </HeaderBox>
                    </>
                }
            </PlayListBox>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} rowGap={{ xs: 2, md: 2, lg: 4 }} columnGap={{ xs: 2, md: 2, lg: 4 }}>
                {videosList.map((item, index) => (<>
                    <DropGrid item xs={12} md={4} lg={3}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        draggable
                    >
                        <DropBox>
                            <UpperBox>
                                <DragIcon />
                                <IconButton onClick={() => handleDelete(item)}>
                                    <CloseEvent />
                                </IconButton>
                            </UpperBox>
                            <Player url={item.link} controls />
                        </DropBox>
                    </DropGrid>
                </>))}
            </Grid>
            <Modal
                // sx={{ width: '80%' }}
                open={addPopup}
            >
                <form onSubmit={videoFormik.handleSubmit}>
                    <FormHeader>
                        <AddText>Add Video</AddText>
                        <IconButton sx={{ cursor: 'pointer' }} onClick={handleClosepopup}>
                            <CloseEvent />
                        </IconButton>
                    </FormHeader>
                    <Divider />
                    <FieldBox>
                        <TextField
                            name='video'
                            onChange={videoFormik.handleChange}
                            fullWidth
                            type='text'
                            variant='standard'
                            error={
                                videoFormik?.touched?.video &&
                                (videoFormik.errors.video)
                            }
                            helperText={videoFormik.touched.video &&
                                videoFormik.errors.video}
                            value={videoFormik.values.video}
                            defaultValue=''
                        />
                    </FieldBox>
                    <ButtonBox>
                        <Button variant='contained' sx={{ marginRight: '50px' }} onClick={() => handleClosepopup()}>Cancel</Button>
                        <Button variant='contained' type='submit' >Add</Button>
                    </ButtonBox>
                </form>
            </Modal>
            <Popup
                open={deletePopup}
                confirm
                onSaveClick={handleDeleteOk}
                onCancelClick={handleDeleteCancel}
                body={'Are you sure you want to remove the video?'}
            />
            <SnackBar
                open={deleteSuccess}
                message={'Video removed successfully'}
                handleClose={() => {
                    setDeleteSuccess(false)
                }}
            />
        </Box >
    )
}

export default VideoPlayer