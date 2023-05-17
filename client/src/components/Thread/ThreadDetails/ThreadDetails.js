import React, { useEffect } from 'react'
import { ButtonGroup, Button, Container, Grid, Typography, Avatar, List, ListItem, ListItemText, ListItemIcon, Stack, TextField, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import useStyle from './style'
import Answer from './Answer/Answer'
import { getAllThread } from '../../../actions/thread'

import like from '../../../images/like.png'
import notification from '../../../images/notification.png'
import share from '../../../images/share.png'

const ThreadDetails = () => {
    const myStyle = useStyle();
    const dispatch = useDispatch();
    const routeParams = useParams();
    const thread = useSelector((state) => state.threadReducer.data.threadData?.filter((thread) => !String(thread.threadID).localeCompare(routeParams.threadID)))?.[0];
    useEffect(() => {
        dispatch(getAllThread());
    }, [dispatch])
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
                                            {thread.tags.map((tag) => {
                                                return <Button
                                                    key={tag}
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
                        {thread.comments.map((Singlecomment) => {
                            return (
                                <Grid container pr={0} key={Singlecomment._id}>
                                    <Grid item xs={12}>
                                        <Answer data={Singlecomment} />
                                    </Grid>
                                </Grid>
                            )
                        })}

                    </Grid>
                    <Grid container p={4} >
                        <Grid container pr={0} rowSpacing={2} >
                            <Grid item xs={12}>
                                <Typography component='div' variant='body2'>
                                    Your answer
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField multiline fullWidth rows={4} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button size="small" variant='contained' sx={{ color: "white" }}> Post your answer</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </>
            : null
    )
}

export default ThreadDetails