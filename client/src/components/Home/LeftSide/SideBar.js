import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";
import search from './search.png';
import { Container, InputAdornment, TextField, Grid } from "@mui/material";
import Logo from './nettee.png'


export default function PermanentDrawerLeft() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      {/* <AppBar
        position="fixed"
      >
      </AppBar> */}
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 1 / 3,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid container justifyContent='center' direction='column' alignItems='center'>
          <Grid item>
            <img src={Logo} height={80} width={150} alt='logo' />
          </Grid>
        </Grid>
        <Divider />
        <List >
          <Container disableGutters>
            <TextField
              id="search"
              type="search"
              label="Search"
              value={searchTerm}
              onChange={handleChange}
              sx={{ width: '100%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={search} height={25} width='{25}' alt='search' />
                  </InputAdornment>
                ),
              }}
            />
          </Container>
          {['Home', 'Notification', 'Challenges'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{ position: 'fixed', bottom: 0, width: 1 / 3 }}>
          <Divider />
          {['Help', 'Setting'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box >
  );
}