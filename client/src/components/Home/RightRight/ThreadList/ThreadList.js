import React, { useEffect, useState } from 'react'
import SingleThread from './SingleThread/SingleThread'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
// import { getAllThread } from '../../../../actions/thread';

const ThreadList = () => {
    const thread = useSelector((state) => state.threadReducer.data.threadData);

    return (
        <>
            <Grid container maxWidth>
                {thread?.map((singleThread) => {
                    return (
                        <Grid item key={singleThread._id} xs={12} paddingBottom={1}>
                            <SingleThread data={singleThread} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default ThreadList