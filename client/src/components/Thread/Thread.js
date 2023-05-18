import React from 'react'
import SideBar from '../Home/LeftSide/SideBar'
import ThreadDetail from './ThreadDetails/ThreadDetails'
import { Grid } from '@mui/material'

const Thread = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2} sm={2} md={3}>
                    <SideBar></SideBar>
                </Grid>
                <Grid item xs={10} sm={10} md={9}>
                    <ThreadDetail></ThreadDetail>
                </Grid>
            </Grid>
        </>
    )
}

export default Thread