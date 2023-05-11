import { Grid, FormControlLabel, Radio, RadioGroup, FormControl, Container, Typography, Button, Stack } from "@mui/material";

export default function Quiz(){
    return(
    <Container fixed>
        <Typography variant="h3" paddingTop={6}>
            Java Expert
        </Typography>
        <Typography variant="h4" paddingTop={2}>
        Question 1 of 25
        </Typography>
        <FormControl >
            <Typography variant="h4" paddingY={3} >
                What is a correct syntax of "Hello Word!" in Java?
            </Typography>
            <RadioGroup>
                <FormControlLabel value="1" control={<Radio />} label="1" componentsProps={{ typography: { variant: 'h4', paddingY: 2 } }}/>
                <FormControlLabel value="2" control={<Radio />} label="2" componentsProps={{ typography: { variant: 'h4', paddingY:2 } }}/>
                <FormControlLabel value="3" control={<Radio />} label="3" componentsProps={{ typography: { variant: 'h4', paddingY: 2 } }}/>
                <FormControlLabel value="4" control={<Radio />} label="4" componentsProps={{ typography: { variant: 'h4', paddingY:2 } }}/>
            </RadioGroup>
        </FormControl>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Button variant="contained" sx={{width: "100%"}}>Contained</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" sx={{width: "100%"}}>Contained</Button>
            </Grid>
        </Grid>
    </Container>
    );
}