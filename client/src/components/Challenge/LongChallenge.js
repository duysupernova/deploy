import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import Question from './Question'
import Typography from '@mui/material/Typography';
import data from './data.json'
import SearchBar from './SearchBar';

function longChallenge() {
    return (
        <div>
            <Container fixed >
                <CssBaseline />
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom padding={4}>
                            Long Challenge
                        </Typography>
                    </Grid>
                    <Grid item gutterBottom padding={4}>
                        <SearchBar />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {data.map((data, i) => (
                        <React.Fragment key={i}>
                            <Question data={data} key={i} />
                        </React.Fragment>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default longChallenge