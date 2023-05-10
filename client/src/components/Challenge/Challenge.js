import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Question from './Question'
import Typography from '@mui/material/Typography';
import data from './data.json'
import IconButton from '@mui/material';
import InputBase from '@mui/material';
// import Search from './image/seach.png'
import Appbar from './AppBar'


function Challenge(){


    return(
        <div>
        <Appbar/>
        <Container fixed >
            <CssBaseline/>
                <Typography variant="h4" gutterBottom padding={4}>
                    Quick Challenge
                </Typography>
                {/* Nho them search bar */}             
                    <Grid container spacing={2}>
                        {data.map((data, i) =>(
                            <>
                                <Question data={data} key={i}/>
                            </>
                        ))}
                    </Grid>
        </Container>
        </div>
    )
}

export default Challenge