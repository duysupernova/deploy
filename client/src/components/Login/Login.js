import React from 'react'
import { Container, Grid, Box, TextField, Typography, Button, Link } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useForm } from "react-hook-form"

const Login = () => {
    const secondary = grey[500];
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: "",
        }
    });
    const handleForm = (event) => {
        console.log(event);
    }
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Grid container >
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h1" align="center" sx={{
                            fontWeight: "bold"

                        }}>
                            Login
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    component="form"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                    sx={{
                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                        padding: [2, 4]
                    }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                type="string"
                                required
                                fullWidth
                                autoFocus
                                label="username"
                                name="username"
                                id="username"
                                {...register("username", { required: true })}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="string"
                                required
                                fullWidth
                                autoFocus
                                label="password"
                                name="password"
                                id="password"
                                {...register("password", { required: true })}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Link href="#" underline="none" variant="body2" color={secondary} sx={{
                                float: "right",
                            }}>
                                Forgot password ?
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="medium"
                                sx={{
                                    padding: [1, 1]
                                }}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid container spacing={1} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "12px"
                        }}>
                            <Grid item>
                                <Typography component="span" color={secondary} sx={{
                                    fontWeight: "bold",
                                    fontSize: "14px"
                                }}>
                                    Don't have an account?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link href="#" underline="none" variant="span" sx={{
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                }}>
                                    Create account
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>


    )
}

export default Login