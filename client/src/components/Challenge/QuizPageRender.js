import React from 'react'
import { Grid } from '@mui/material'
import SideBar from '../Home/LeftSide/SideBar'
import QuizPage from './QuizPage'
const QuizPageRender = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2} sm={2} md={3}>
                    <SideBar></SideBar>
                </Grid>
                <Grid item xs={10} sm={10} md={9}>
                    <QuizPage />
                </Grid>
            </Grid>
        </>
    )
}

export default QuizPageRender

