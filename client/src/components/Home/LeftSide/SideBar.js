import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";
import search from './search.png';
import { Container, InputAdornment, TextField, Grid } from "@mui/material";
import Logo from './nettee.png'
import Home from './home.png'
import Alarm from './alarm.png'
import Setting from './setting.png'
import Help from './help.png'

const drawerWidth = 300;


export default function PermanentDrawerLeft() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
        <AppBar
            position="fixed"
        >
        </AppBar>
            <Drawer
                sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 1/3,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
          <Grid >
            <Container direction="column" align="center">
              <img src={Logo} height={70} width={150} />
            </Container>
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
          sx={{width: '100%'}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <img src={search} height={25} width='{25}'/> 
              </InputAdornment>
            ),
          }}
        />
        </Container>
          {['Home', 'Notification'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{position: 'fixed', bottom: 0, width: 1/3}}>
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
    </Box>
  );
}