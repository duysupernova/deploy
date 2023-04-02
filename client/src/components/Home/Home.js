import React from 'react'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightRight/RightSide'
import { Grid, Container } from '@mui/material'
// import useStyle from './style'

const Home = () => {
    // const myStyle = useStyle();
    return (
        <>
            {/* <Container disableGutters="true" maxWidt=""> */}
            <Grid container>
                <Grid item xs={4}>
                    {/* <LeftSide></LeftSide> */}
                </Grid>
                <Grid item xs={8}>
                    <RightSide></RightSide>
                </Grid>

            </Grid>
            {/* </Container> */}
        </>
    )
}

export default Home