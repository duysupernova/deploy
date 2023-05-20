import React from 'react'
import { Grid, Typography, Avatar } from '@mui/material'
import useStyle from './style'
import like from '../../../../images/like.png'
import sample from '../../../../images/sample.png'

const Answer = ({ data }) => {
    const myStyle = useStyle();
    return (
        <>
            <Grid container p={3}>
                <Grid item xs={2} display='flex' justifyContent='start' alignItems='center' flexDirection='column'>
                    <Avatar alt="like icon" src={like} />
                    <Typography component='span'>
                        {data?.likes}
                    </Typography>
                </Grid>
                <Grid item xs={10} className={myStyle.answer}>
                    <Typography component="div" className='bodyText'>
                        {data?.content}
                    </Typography>
                    {data?.image && <img alt="Question answer" src={data?.image} className='Answer image' style={{ maxWidth: '100%', marginTop: '8px' }} />}
                    <Grid item xs={12} sx={{ padding: "0 16px 0 16px" }} display='flex' justifyContent='space-between'>
                        <Typography component="span">
                            {new Date().getDate() - new Date(data?.createdAt).getDate()} days ago by {data?.userID?.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default Answer