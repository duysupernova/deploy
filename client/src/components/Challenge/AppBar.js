import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SideBar from '../Home/LeftSide/SideBar';

export default function ButtonAppBar() {
  return (
    <Box sx = {{ flexGrow: 1, width:'100%' }}>
      <AppBar position="static" color="default">
        <Toolbar >
            <Grid>
              <SideBar />
            </Grid>
            <Grid container sx={{flexDirection: 'row-reverse', py: 3}} >
              <Button variant="contained" color="primary">Create question</Button>
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
