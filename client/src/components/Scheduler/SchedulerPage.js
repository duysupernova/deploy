import React from 'react'
import { Grid } from '@mui/material'
import SideBar from '../Home/LeftSide/SideBar'
import Scheduler from './Scheduler'

const QuizPageRender = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={1} sm={2} md={3}>
                    <SideBar></SideBar>
                </Grid>
                <Grid item xs={11} sm={10} md={8}>
                    <Scheduler />
                </Grid>
            </Grid>
        </>
    )
}

export default QuizPageRender

