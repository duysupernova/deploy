import React, { useState } from 'react'
import { Modal, Box, Typography, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, TextField, Divider } from '@mui/material'
import { useForm } from "react-hook-form"
// import FileBase from 'react-file-base64';
import imageIcon from '../../images/imageIcon.png'
import tagIcon from '../../images/tagIcon.png'

const CreateThreadForm = ({ isOpen, toggleOpenModal }) => {
    const currentUser = JSON.parse(localStorage.getItem("NETTEE_TOKEN"));
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            userID: currentUser.data.user._id,
            //nhớ xử lý cái thread ID khi integrate =)))))))))))))))))))))))))))))))))))))))))))))))
            threadID: currentUser.data.user._id,
            title: "",
            content: "",
            image: "",
            likes: 0,
            comments: [],
            tags: [],
            pins: [],
            share: [],
        }
    });

    const handleForm = (event) => {
        console.log(event);
    }
    const handleImage = (event) => {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = () => {
            setValue('image', reader.result)
        };
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={() => toggleOpenModal(false)}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1 / 3,
                    minWidth: '400px',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }} component="form"
                    onSubmit={handleSubmit(handleForm)}>
                    <Typography variant='h5' component='h1' align='center' >Create thread</Typography>
                    <Divider />
                    <List sx={{ width: '100%', bgcolor: '#FFFFFF' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: '#ff5722' }}>N</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="UserName" secondary="Jan 9, 2014" />
                        </ListItem>
                    </List>
                    <TextField
                        fullWidth
                        autoFocus
                        size='small'
                        id="title"
                        name='title'
                        label="Title"
                        {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <p style={{ color: 'red', margin: '0' }}>{errors.title.message}</p>}
                    <TextField
                        fullWidth
                        margin='normal'
                        label="What do you want to ask ?"
                        multiline
                        id="content"
                        name='content'
                        rows={5}

                        {...register("content", { required: "Content is required" })}
                    />
                    {errors.content && <p style={{ color: 'red', margin: '0' }}>{errors.content.message}</p>}
                    <Box component='div' p={2} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginY: '16px',
                        borderRadius: '8px',
                        border: '3px solid #f1f1f1',
                    }}>
                        <input
                            accept="image/*"
                            style={{
                                display: "none"
                            }}
                            id="image"
                            type="file"
                            onChange={handleImage}
                        />
                        <Typography component='p' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Add to your thread</Typography>
                        <Box sx={{ display: 'flex' }} >
                            <Avatar sx={{ marginX: '8px' }} src={tagIcon} alt='Tag Icon' />
                            <label htmlFor="image">
                                <Avatar src={imageIcon} alt='Image Icon' />
                            </label>
                        </Box>
                    </Box>
                    <Divider />
                    <Button type='submit' fullWidth variant='contained'>Create</Button>
                </Box>
            </Modal>
        </>
    )
}

export default CreateThreadForm