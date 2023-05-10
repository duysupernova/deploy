import React from 'react'
import RightSide from './RightRight/RightSide'
import { Grid, Container, AppBar } from '@mui/material'
import SideBar from './LeftSide/SideBar'
// import Profile from "../Profile/Profile";
import Appbar from "../Challenge/AppBar"
import Challenge from "../Challenge/Challenge"
const Home = () => {
    // const myStyle = useStyle();
    return (
        <>
            {/* <Container disableGutters="true" maxWidt=""> */}
            <Grid container>
                <Grid item xs={1} sm={2} md={3}>
                    <SideBar></SideBar>
                </Grid>
                
                <Grid item xs={11} sm={10} md={9}>
                    {/* <RightSide></RightSide> */}
                    {/* <Profile /> */}
                    <Challenge />
                </Grid>
            </Grid>
            {/* </Container> */}
        </>
    ) 
}

export default Home
