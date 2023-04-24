import React from 'react'
import SingleThread from './SingleThread/SingleThread'
import { Grid } from '@mui/material'

const ThreadList = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <SingleThread />
                </Grid>
                <Grid item>
                    <SingleThread />
                </Grid>
            </Grid>
        </>
    )
}

export default ThreadList