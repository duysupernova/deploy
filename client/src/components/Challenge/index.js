import React from 'react'
import { Grid } from '@mui/material'
import SideBar from '../Home/LeftSide/SideBar'
import Challenge from "./Challenge"
const QuickChallenge = () => {
    // const myStyle = useStyle();
    return (
        <>
            <Grid container>
                <Grid item xs={1} sm={2} md={3}>
                    <SideBar></SideBar>
                </Grid>

                <Grid item xs={11} sm={10} md={9}>
                    <Challenge />
                </Grid>
            </Grid>
            {/* </Container> */}
        </>
    )
}

export default QuickChallenge
