import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, CardActions, Typography, Box, Grid, Button } from "@mui/material"
import { deleteTestData } from "../../actions/test";

const Test = ({ setedit }) => {
  const test = useSelector((state) => state.testReducer);
  const dispatch = useDispatch();

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
                      <Button size="small" variant="contained" onClick={() => setedit(child._id)}>Update</Button>
                      <Button size="small" variant="contained" onClick={() => dispatch(deleteTestData(child._id))}>Delete</Button>
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
