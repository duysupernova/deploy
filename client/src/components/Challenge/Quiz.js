import { FormControlLabel, Radio, RadioGroup, FormControl, Container, Typography, Button, Box, Card, CardContent, CardActions } from "@mui/material";
import { useState } from "react";

export default function Quiz(props){
    const { question ={}, questionNumber, submitAnswer} = props;
    const [value, setValue] = useState(null);

    const handleChangeRadio = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        submitAnswer(value);
        setValue(null);
    }

    return(
        <Container fixed >
            <Box color={'black'} maxWidth='xs' paddingTop={16}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h4" paddingY={1}>
                            Question {questionNumber}
                        </Typography>
                        <Typography variant="h4" paddingY={2}>
                            {question.title}
                        </Typography>

                        <FormControl>
                            <RadioGroup value={value} onChange={handleChangeRadio}>
                                {question.options.map((q, i) => {
                                    return <FormControlLabel key={i+1} value={i+1} control={<Radio />} label={q.description} componentsProps={{ typography: { variant: 'h5', paddingY: 2 } }}/>
                                })}
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button disabled={!value} onClick={handleSubmit} fullWidth variant="contained">
                            Next
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
}