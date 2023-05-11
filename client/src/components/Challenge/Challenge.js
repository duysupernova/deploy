import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Question from './Question'
import Typography from '@mui/material/Typography';
import data from './data.json'
import SearchBar from './SearchBar';

function Challenge(){
    return(
        <div>
        <Container fixed >
            <CssBaseline/>              
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4" gutterBottom padding={4}>
                        Quick Challenge
                    </Typography>
                </Grid>
                    <Grid item padding={5} gutterBottom >
                        <SearchBar />
                    </Grid>
                </Grid>          
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