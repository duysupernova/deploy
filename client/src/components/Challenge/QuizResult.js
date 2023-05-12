import React, { useState } from 'react'
import { useMemo } from 'react'
import { Grid, Typography, CardContent, Card, CardActions, Button, Container } from '@mui/material'
import questions from './QuestionData'

export default function QuizResult(props) {
    const {answers, restartQuiz } = props;
    const correctAnswers = useMemo(() => {
        return questions.filter((q, i) => {
            return q.correctAnswer === parseInt(answers[i]);
        }).length;
    }, [answers])

    // const checkStat = () => {
    //     const [] = useState();
    // }

    return (
        <Grid maxWidth='xs'>
        <Grid item paddingTop={17}>
        <Card variant='outlined' sx={{  pb: 3}} paddingTop={3}>
            <CardContent>
                <Typography 
                sx={{display: "flex", 
                justifyContent: "center", 
                mb : 3}}
                variant='h4'
                paddingTop={10} 
                >
                    Java Expert
                </Typography>
                <Typography 
                sx={{
                    display: "flex", 
                justifyContent: "center", 
                mb : 3,
                textDecoration: 'underline'
                }}
                variant='h4' color="gray"
                >
                    Result
                </Typography>
                <Typography 
                sx={{display: "flex", 
                justifyContent: "center", 
                mb : 3}}
                variant='h4' color="gray"
                >
                    {correctAnswers} / {questions.length}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                <Button onClick={restartQuiz} variant="contained" >
                    Retry !
                </Button>
                {/* <Button variant="contained">
                    Home
                </Button> */}
            </CardActions>
        </Card>
        </Grid>
        </Grid>
    )
}
