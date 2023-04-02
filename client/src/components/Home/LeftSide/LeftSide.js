// import React from 'react'
// import { Container, Grid, Button, Box, Drawer, CssBaseline, Toolbar, AppBar, SearchBar, styled, InputAdornment, TextField, List } from '@mui/material'
// import SearchIcon from "@mui/icons-material/Search";
// import { useState } from "react";

// const drawerWidth = 240;

// export default function LeftSide() {

//     const searchBar = () => {
//         const [searchTerm, setSearchTerm] = useState('');
//         const handleChange = (event) => {
//             setSearchTerm(event.target.value);
//         };

//         return (
//             <Container maxWidth="md" sx={{ mt: 20 }}>
//                 <TextField
//                     id="search"
//                     type="search"
//                     label="Search"
//                     value={searchTerm}
//                     onChange={handleChange}
//                     sx={{ width: 600 }} //fix the width
//                     InputProps={{
//                         endAdornment: (
//                             <InputAdornment position="end">
//                                 <SearchIcon />
//                             </InputAdornment>
//                         ),
//                     }}
//                 />
//             </Container>
//         );
//     }

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar position="fixed" sx={{}}>
//                 <Toolbar>
//                         // anh cua nettee
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
//                 }}
//             >
//                 <Toolbar />
//                 <Box Box sx={{ overflow: 'auto' }}>
//                     <searchBar />
//                     <List>
//                         {['Home', 'Notifications']}
//                     </List>
//                 </Box>
//             </Drawer>
//         </Box>
//     )
// }

