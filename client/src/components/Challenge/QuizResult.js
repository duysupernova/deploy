import React from 'react'
import { useMemo } from 'react'
import { Grid, Typography, CardContent, Card, CardActions, Button, Container } from '@mui/material'
import questions from './QuestionData'
import Laptop from './image/laptop.png'
import Info from './image/info.png'

export default function QuizResult(props) {
    const {answers, restartQuiz } = props;
    const correctAnswers = useMemo(() => {
        return questions.filter((q, i) => {
            return q.correctAnswer === parseInt(answers[i]);
        }).length;}, [answers])

    return (
        <Grid maxWidth='xs'>
        <Grid item paddingTop={17}>
        <Card variant='outlined' sx={{  pb: 3}} paddingTop={3}>
            <CardContent>
                <Grid container justifyContent="center">
                    <Grid item paddingLeft={16} xs={10}>
                        <Typography 
                        sx={{display: "flex", 
                        justifyContent: "center", 
                        mb : 3}}
                        variant='h4'
                        paddingTop={10} 
                        >
                            Java Expert
                        </Typography>
                    </Grid>
                    <Grid >
                        
                        {((correctAnswers) <= 5) ? (
                            <img src={Info} />
                    ) : (
                        <img src={Laptop} />
                    )}
                    </Grid>
                </Grid>
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
                <Typography 
                sx={{display: "flex", 
                justifyContent: "center"
                }}
                >
                {((correctAnswers) <= 5) ? (
                        <Typography variant='h5'> 
                            You must get over 50% to get the badge!
                        </Typography>
                    ) : (
                        <Typography variant='h5'> 
                            Congratulations! You have receive the Java Expert badge.
                        </Typography>
                    )}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                <Button>
                    {((correctAnswers) <= 5) ? (
                        <Button onClick={restartQuiz} variant="contained" >
                        Retry !
                    </Button>
                    ) : (
                        <>
                        <Button variant="contained" >
                        Home
                        </Button>
                        </>
                    )}
                </Button>
                
            </CardActions>
        </Card>
        </Grid>
        </Grid>
    )
}
