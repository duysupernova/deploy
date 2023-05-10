import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Laptop from './image/laptop.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkmark from './image/checkmark.png'


const Question = ({data}) => {
    return (
        <Grid item xs={4}>
            <Paper variant='outlined'>
                <Grid container xs>
                <Grid item xs={11}>
                    <Box paddingX={2} paddingTop={2}>
                        <img src={Laptop} height='60px' width='60px'></img>
                    </Box>
                </Grid>
                <Grid item xs={'auto'} paddingTop={3}  >
                    <Box>
                        <img src={Checkmark} height='20px' width='20px'></img>
                    </Box>
                </Grid>
                </Grid>
                    <Box paddingX={2}>
                        <Typography variant="h6" gutterBottom>
                            {data.name}
                        </Typography>
                    </Box>
                        <Box paddingX={2} paddingBottom={3}>
                            <Typography variant="subtitle2" component="body2" gutterBottom>
                                {data.questions} questions - {data.time} minutes
                            </Typography>
                        </Box>
            </Paper>
        </Grid>
    );
};

export default Question