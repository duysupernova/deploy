
import * as React from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material'
import ImageUpload from './ImageUpload'

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, `,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
          and learn how to enhance `,
    },
];
export default function UserProfile() {

    const currentUser = JSON.parse(localStorage.getItem("NETTEE_TOKEN"))?.data?.user;

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleSubmit = () => {

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
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel
                                                optional={
                                                    index === 2 ? (
                                                        <Typography variant="caption">Last step</Typography>
                                                    ) : null
                                                }
                                            >
                                                {step.label}
                                            </StepLabel>
                                            <StepContent>
                                                <Typography>{step.description}</Typography>
                                                <Box sx={{ mb: 2 }}>
                                                    <div>
                                                        <Button
                                                            variant="contained"
                                                            onClick={handleNext}
                                                            sx={{ mt: 1, mr: 1 }}
                                                        >
                                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                        </Button>
                                                    </div>
                                                </Box>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                                {activeStep === steps.length && (
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
        </Container>
    );
}

