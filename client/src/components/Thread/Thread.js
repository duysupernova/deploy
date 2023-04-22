import React from 'react'
import SideBar from '../Home/LeftSide/SideBar'
import ThreadDetail from './ThreadDetails/ThreadDetails'
import { Grid } from '@mui/material'

const Thread = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <SideBar></SideBar>
                </Grid>
                <Grid item xs={8}>
                    <ThreadDetail></ThreadDetail>
                </Grid>
            </Grid>
        </>
    )
}

export default Thread