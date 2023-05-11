import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function ButtonAppBar() {
  return (
    <Box sx = {{ flexGrow: 1, maxWidth:'xl' }}>
      <AppBar position="static" color="default">
        <Toolbar>
            <Grid container sx={{flexDirection: 'row-reverse', py: 3}}>
              <Button variant="contained" color="primary">Create question</Button>
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}