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
                    <Appbar />
                    <Challenge />
            </Grid>
            {/* </Container> */}
        </>
    ) 
}

export default Home
