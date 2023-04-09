import React from 'react'
import RightSide from './RightRight/RightSide'
import { Grid, Container } from '@mui/material'
import SideBar from './LeftSide/SideBar'

const Home = () => {
    // const myStyle = useStyle();
    return (
        <>
            {/* <Container disableGutters="true" maxWidt=""> */}
            <Grid container>
                <Grid item xs={2} md={4}>
                    <SideBar></SideBar>
                </Grid>
                <Grid item xs={10} md={8}>
                    <RightSide></RightSide>
                </Grid>
            </Grid>
            {/* </Container> */}
        </>
    )
}

export default Home