import React, { useState } from 'react'
import { Modal, Box, Typography, Button, Avatar, Divider, Paper, Grid, InputBase, Checkbox, Chip } from '@mui/material'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { shareThread } from '../../actions/user';
import search from '../../images/search.png'

const ShareThreadForm = ({ isOpen, toggleOpenModal, threadID }) => {
    const [addUser, setAddUser] = useState({
        addedList: []
    });
    const [searchContext, setSearchContext] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleSubmit } = useForm();

    let regExp = new RegExp(searchContext, 'gi');
    const allUser = useSelector((state) => state.userReducer?.allUserData.map((user) => regExp.test(user.name) && user));

    const handleForm = () => {
        console.log("this is user id (array)", addUser.addedList.map((user) => user?._id));
        console.log("this is thread id", threadID);
        // dispatch(shareThread(threadID, addUser.addedList.map((user) => user?._id)));
        // navigate(0);
    }

    const handleAddPeople = (user) => {
        if (addUser.addedList.map(user => user._id).includes(user._id)) {
            setAddUser((prev) => ({
                addedList: prev.addedList.map((addedUser) => (addedUser._id !== user._id) && addedUser)
            }));
        }
        else {
            setAddUser((prev) => ({
                addedList: [...prev.addedList, user]
            }));
        }

    }

    const handleDelete = (user) => {
        setAddUser((prev) => ({
            addedList: prev.addedList.map((addedUser) => (addedUser._id !== user._id) && addedUser)
        }));
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={() => {
                    toggleOpenModal(false);
                    setAddUser({ addedList: [] })
                }}
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
                    <Typography component='h1' align='center' >Share to people</Typography>
                    <Divider />
                    <Paper
                        sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                        <Avatar aria-label="search" sx={{ background: 'none', padding: '4px' }}>
                            <img src={search} alt='search icon' />
                        </Avatar>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'Search' }}
                            onChange={(e) => setSearchContext(e.target.value)}
                        />
                    </Paper>
                    <Box sx={{ minHeight: '100px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '8px', marginY: '8px' }}>
                        {addUser?.addedList?.map((user, index) => {
                            return (
                                user && <Chip color="primary" onDelete={() => handleDelete(user)} avatar={<Avatar sx={{ bgcolor: 'orange' }} src={user?.image}>{!user?.image && user?.name?.charAt(0)}</Avatar>} key={index} />
                            )
                        })}
                    </Box>
                    <Box component='div' p={2} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginY: '16px',
                    }}>
                        <Typography component='div' variant='h5'> Suggested</Typography>
                        <Box sx={{
                            maxHeight: '200px',
                            overflowY: 'auto'

                        }}>
                            {allUser?.map((user, index) => {
                                return (
                                    user && <Grid item xs={12} key={index} sx={{ padding: '4px' }}>
                                        <Button onClick={() => handleAddPeople(user)} fullWidth sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#081ff7' }}>
                                                <Avatar sx={{ bgcolor: 'orange' }} src={user?.image}>{!user?.image && user?.name?.charAt(0)}</Avatar>
                                                <Typography component='div' sx={{ marginLeft: '4px' }}>{user.name}</Typography>
                                            </Box>
                                            <Box>
                                                <Checkbox checked={(addUser?.addedList?.map(user => user?._id).includes(user?._id))} />
                                            </Box>
                                        </Button>
                                    </Grid>
                                )
                            })}
                        </Box>
                    </Box>
                    <Divider />
                    <Button type='submit' fullWidth variant='contained'>Add people</Button>
                </Box>
            </Modal>
        </>
    )
}

export default ShareThreadForm