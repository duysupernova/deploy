
import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProfileDetails from './ProfileDetails'
import SideBar from '../Home/LeftSide/SideBar';

export default function userProfile() {
  return (
    <>
      <Grid container>
        <Grid item xs={1} sm={2} md={3}>
          <SideBar></SideBar>
        </Grid>
        <Grid item xs={11} sm={10} md={9}>
          <ProfileDetails></ProfileDetails>
        </Grid>
      </Grid>
    </>
  );
}

