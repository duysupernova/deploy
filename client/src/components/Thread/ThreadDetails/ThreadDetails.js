import React, { useState } from 'react'
import { ButtonGroup, Button, Container, Grid, Typography, Avatar, List, ListItem, ListItemText, CircularProgress, Stack, TextField, Box, Divider } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { addCommentToThread } from '../../../actions/thread';
import useStyle from './style'
import Answer from './Answer/Answer'

import like from '../../../images/like.png'
import unlike from '../../../images/unlike.png'
import notification from '../../../images/notification.png'
import share from '../../../images/share.png'
import imageIcon from '../../../images/imageIcon.png'

const ThreadDetails = () => {
    const myStyle = useStyle();
    const routeParams = useParams();
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem("NETTEE_TOKEN"));
    let thread = useSelector((state) => state.threadReducer.data.threadData?.filter((thread) => !String(thread.threadID).localeCompare(routeParams.threadID)))?.[0];
    const allUser = useSelector((state) => state.userReducer?.allUserData);
    console.log(thread?.comments);
    thread?.comments?.map((singleComment) => {
        return allUser.map((user) => {
            if (singleComment.userID === user._id) {
                return singleComment.userID = user;
            }
        })
    })
    // const [isLike, setIsLike] = useState(thread?.likes?.includes(currentUser?.data?.user._id));
    // const [isPin, setIsPin] = useState(thread?.pins?.includes(currentUser?.data?.user._id));
    const [preview, setPreview] = useState();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            userID: `${currentUser?.data?.user?._id}`,
            content: "",
            image: "",
        }
    });

    const handleForm = (event) => {
        dispatch(addCommentToThread(thread._id, event));
    }
    const handleImage = (event) => {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setValue('image', reader.result);
            setPreview(reader.result);
        };
    }
    return (
        thread ?
            <>
                <Container component="main" disableGutters={true} className={myStyle.text}>
                    <Grid container className='headBar'>
                        <Grid item xs={12} sx={{ float: 'right', padding: '12px 28px' }} display='flex' justifyContent='right' alignItems='right'>
                            <Button variant='contained' size='medium'>
                                Create thread
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container p={3} className='headBar'>
                        <Grid container pr={0}>
                            <Grid item xs={2} display='flex' justifyContent='start' alignItems='center' flexDirection='column'>
                                <Avatar alt="like icon" src={like} />
                                <Typography component='span'>
                                    {thread.likes.length}
                                </Typography>
                            </Grid>
                            <Grid item xs={10} className={myStyle.list}>
                                <List>
                                    <ListItem
                                        className={myStyle.listItemText}
                                    >
                                        <ListItemText
                                            primary={thread.title}
                                            secondary="Date posted by whom ?"
                                        />
                                    </ListItem>
                                </List>
                                <Typography component="div" className='bodyText'>
                                    {thread.content}
                                </Typography>
                                <Typography component="div" className='commentCount'>
                                    {thread.comments.length} comments
                                </Typography>
                                <Grid item xs={12} sx={{ padding: "0 16px 0 16px" }} display='flex' justifyContent='space-between'>
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between"
                                    }}>
                                        <Stack spacing={1} direction="row" className={myStyle.tags}>
                                            {thread.tags?.map((tag, index) => {
                                                return <Button
                                                    key={index}
                                                    variant="contained"
                                                    size="small">
                                                    {tag}
                                                </Button>
                                            })}
                                        </Stack>
                                        <Typography component="span" className='times'>
                                            <ButtonGroup>
                                                <Button sx={{ borderRadius: 10 }}
                                                    variant="text"
                                                    startIcon={<img alt="Notification icon" src={notification} />}
                                                    className={myStyle.startIcon}
                                                    size="small">

                                                </Button>
                                                <Button sx={{ borderRadius: 10 }}
                                                    variant="text"
                                                    startIcon={<img alt="Share icon" src={share} />}
                                                    className={myStyle.startIcon}
                                                    size="small">
                                                </Button>
                                            </ButtonGroup>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid >
                    <Grid container className='headBar'>
                        {thread?.comments?.map((Singlecomment, index) => {
                            return (
                                <Grid container key={index}>
                                    <Grid item xs={12}>
                                        <Answer data={Singlecomment} />
                                        <Divider></Divider>
                                    </Grid>
                                </Grid>
                            )
                        })}

                    </Grid>
                    <Box component='form'
                        onSubmit={handleSubmit(handleForm)}
                    >
                        <Grid container p={4} >
                            <Grid container pr={0} rowSpacing={2} >
                                <Grid item xs={12}>
                                    <Typography component='div' variant='body2'>
                                        Your answer
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        margin='normal'
                                        label="What do you think about the issue ?"
                                        multiline
                                        id="content"
                                        name='content'
                                        rows={5}

                                        {...register("content", { required: "Content is required" })}
                                    />
                                    {errors.content && <p style={{ color: 'red', margin: '0' }}>{errors.content.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    {preview &&
                                        <Box component='div' p={1} sx={{
                                            borderRadius: '8px',
                                            border: '3px solid #f1f1f1',
                                            marginY: '8px',
                                            position: 'relative'
                                        }}>

                                            <img src={`${preview}`} style={{ width: "100%", maxHeight: "auto" }} alt='content' />
                                            <Avatar sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                background: '#1565c0',
                                                border: '2px solid #1565c0'

                                            }}><Button variant='contained' onClick={() => {
                                                setPreview(null);
                                                setValue('image', "");
                                            }}>X</Button></Avatar>
                                        </Box>
                                    }
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        accept="image/*"
                                        style={{
                                            display: "none"
                                        }}
                                        id="image"
                                        type="file"
                                        onChange={handleImage}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button size="small" variant='contained' sx={{ color: "white" }} type='submit'> Post your answer</Button>
                                        <label htmlFor="image">
                                            <Avatar src={imageIcon} alt='Image Icon' />
                                        </label>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </>
            :
            <>
                <Container component="main" disableGutters={true} sx={{ position: 'relative' }}>
                    <CircularProgress sx={{ position: 'absolute', top: '50%', right: '50%' }}></CircularProgress>
                </Container>
            </>
    )
}

export default ThreadDetails