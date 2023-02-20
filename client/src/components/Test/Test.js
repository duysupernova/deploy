import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardActions, Typography, Box, Grid, Button } from "@mui/material"

const Test = () => {
  const test = useSelector((state) => state.testReducer);
  console.log(test);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          padding: ["12px", "15px"],
          backgroundColor: 'primary.dark',
        }}
      >
        <Grid container spacing={2}>
          {test &&
            test.map((child) => {
              return (
                <Grid key={child._id} item xs={6} sm={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {child.title}
                      </Typography>
                      <Typography variant="body2">
                        {child.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">Update</Button>
                      <Button size="small" variant="contained">Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default Test;
