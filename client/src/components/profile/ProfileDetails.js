
import * as React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../actions/user';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stepper, Step, StepLabel, StepContent, Paper, CircularProgress } from '@mui/material'
import ImageUpload from './ImageUpload'

const toBeginner = [{
    "label": "Like requirements",
    "description": "You need to get 10 likes in total",
    "quantity": 10
},
{
    "label": "Comments requirement",
    "description": "You need to comment at least 5 times in other people threads",
    "quantity": 5
},
{
    "label": "Complete requirement chanllenge",
    "description": "Earning 1 badge to coninue",
    "title": ["Java Beginner"],
    "reward": "Beginner"
}]
const toCompetent = [{
    "label": "Like requirements",
    "description": "You need to get 20 likes in total",
    "quantity": 20
},
{
    "label": "Comments requirement",
    "description": "You need to comment at least 10 times in other people threads",
    "quantity": 10
},
{
    "label": "Complete requirement chanllenge",
    "description": "Earning 2 badges to coninue",
    "title": ["Rust Beginner", "Rail Beginner"],
    "reward": "Competent"
}]
export default function UserProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("NETTEE_TOKEN"))?.data?.user;
    const allUser = useSelector((state) => state.userReducer?.allUserData);
    const allThread = useSelector((state) => state.threadReducer?.data?.threadData);
    const currentUserThreads = allThread?.filter((thread) => thread?.userID === currentUser._id);
    const totalLikes = currentUserThreads.map((singleThread) => singleThread.likes).length;
    const totalComments = allThread.map((thread) =>
        thread?.comments?.filter((comment) =>
            comment?.userID === currentUser._id).length)
        .reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);;

    const [activeStep, setActiveStep] = useState(0);

    let steps;
    if (!currentUser?.title || currentUser.title === "Newbie") {
        steps = toBeginner
    }
    else if (currentUser.title === "Beginner") {
        steps = toCompetent
    }
    else {
        steps = toCompetent
    }

    const isStepFailed = (step, index) => {
        if (activeStep < index) {
            return false;
        }
        if (step.label === "Like requirements" && totalLikes < step?.quantity) {
            return true;
        }
        else if (step.label === "Comments requirement" && totalComments < step?.quantity) {
            return true;
        }
        else if (step.label === "Complete requirement chanllenge" && currentUser?.badges?.length < step?.title.length) {
            return true;
        }
        return false;
    };

    let normalise = (value, MAX) => {
        if (value > MAX) {
            return ((MAX - 0) * 100) / (MAX - 0)
        }

        return ((value - 0) * 100) / (MAX - 0)
    };

    const handleNext = (props) => {
        if (!props) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleSubmit = () => {

        const newTitle = {
            title: steps[2].reward
        }
        dispatch(updateUser(currentUser?._id, newTitle))
        let currentUserData = JSON.parse(localStorage.getItem("NETTEE_TOKEN"));
        currentUserData['data']['user']['title'] = steps[2].reward;
        localStorage.setItem("NETTEE_TOKEN", JSON.stringify(currentUserData));
        navigate(0);
    };

    return (
        <Container component="main" disableGutters={true} sx={{
            padding: "24px"
        }}>
            <CssBaseline />
            <Box
                sx={{
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    boxShadow: 2,
                    borderRadius: 1
                }}
            >
                <Typography component="h1" variant="h5">
                    Account Information
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Grid container direction='row' alignItems='start'>
                        <Grid item xs={12} md={3}>
                            <ImageUpload />
                        </Grid>
                        <Grid item xs={12} md={3} sx={{
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                        }}>
                            <Typography component="h2" variant="h6" sx={{ marginBottom: '12px' }}>
                                {currentUser?.name}
                            </Typography>
                            <Typography component="h3" variant="subtitle1" color={'GrayText'}>
                                {currentUser?.title ? currentUser?.title : 'Newbie'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            padding: '32px'
                        }}>
                            <Box sx={{ maxWidth: "100%" }}>
                                <Typography align='center' variant='body1' sx={{
                                    fontSize: '18px',
                                    fontWeight: '700'
                                }}>To {steps[2].reward}</Typography>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps?.map((step, index) => {
                                        const labelProps = {};
                                        if (isStepFailed(step, index)) {
                                            labelProps.optional = (
                                                <Typography variant="caption" color="error">
                                                    Alert message
                                                </Typography>
                                            );
                                            labelProps.error = true;
                                        }
                                        return (
                                            <Step key={step.label}>
                                                <StepLabel {...labelProps}>{step.label}</StepLabel>
                                                <StepContent>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>

                                                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                                            {(step?.label === "Like requirements") && <CircularProgress variant="determinate" value={normalise(totalLikes, step?.quantity || step?.title.length)} />}
                                                            {(step?.label === "Comments requirement") && <CircularProgress variant="determinate" value={normalise(totalComments, step?.quantity || step?.title.length)} />}
                                                            {(step?.label === "Complete requirement chanllenge") && <CircularProgress variant="determinate" value={normalise(currentUser?.badges?.length, step?.title.length)} />}
                                                            <Box
                                                                sx={{
                                                                    top: 0,
                                                                    left: 0,
                                                                    bottom: 0,
                                                                    right: 0,
                                                                    position: 'absolute',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                }}
                                                            >
                                                                <Typography variant="caption" component="div" color="text.secondary">
                                                                    {(step?.label === "Like requirements") && totalLikes}
                                                                    {(step?.label === "Comments requirement") && totalComments}
                                                                    {(step?.label === "Complete requirement chanllenge") && currentUser?.badges?.length}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                        <Typography component="div" color="text.secondary" sx={{ marginX: '4px' }}>
                                                            {step.description}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ mb: 2 }}>
                                                        <div>
                                                            <Button
                                                                variant="contained"
                                                                onClick={() => handleNext(labelProps.error)}
                                                                size='small'
                                                                sx={{ mt: 1, mr: 1 }}
                                                            >
                                                                {index === steps?.length - 1 ? 'Finish' : 'Continue'}
                                                            </Button>
                                                        </div>
                                                    </Box>
                                                </StepContent>
                                            </Step>
                                        )
                                    })}
                                </Stepper>
                                {activeStep === steps?.length && (
                                    <Paper square elevation={0} sx={{ p: 3 }}>
                                        <Typography>All requirements completed - You can upgrade your rank</Typography>
                                        <Button onClick={handleSubmit} sx={{ mt: 1, mr: 1 }}>
                                            Upgrade
                                        </Button>
                                    </Paper>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="display name"
                        label="Display Name"
                        name="display name"
                        autoComplete="display name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email address"
                        label="Email Address"
                        name="email address"
                        autoComplete="email address"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Current Password"
                        type="password"
                        id="password"
                        autoComplete="current password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="new password"
                        label="New Password"
                        type="new password"
                        id="new password"
                        autoComplete="new password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm password"
                        label="Confirm Password"
                        type="confirm password"
                        id="confirm password"
                        autoComplete="confirm password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update now
                    </Button>
                </Box>
            </Box>
        </Container >
    );
}

