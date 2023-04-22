import React from 'react'
import { Grid, Typography, Avatar } from '@mui/material'
import useStyle from './style'
import star from '../../../../images/star.png'
import sample from '../../../../images/sample.png'

const Answer = (data) => {
    const myStyle = useStyle();
    return (
        <>
            <Grid container p={3}>
                <Grid item xs={2} display='flex' justifyContent='start' alignItems='center' flexDirection='column'>
                    <Avatar alt="Star icon" src={star} />
                    <Typography component='span'>
                        983
                    </Typography>
                </Grid>
                {/* className={myStyle.list} */}
                <Grid item xs={10} className={myStyle.answer}>
                    <Typography component="div" className='bodyText'>
                        I am currently trying to use gganimate to animate bond yield curves over time. In essence, I have 2 data frames, each formatted the same way: Maturity 1/1/2020 1/1/2021 1/1/2022 3M 3.4 3.4 3.4 6M 4....
                    </Typography>
                    <img alt="Question answer" src={sample} className='img' />
                    <Grid item xs={12} sx={{ padding: "0 16px 0 16px" }} display='flex' justifyContent='space-between'>
                        {/* className={myStyle.tags} */}
                        <Typography component="span">
                            8 days ago by Abert EinMinh
                        </Typography>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default Answer