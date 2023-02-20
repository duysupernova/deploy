import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTestData, updateTestData } from "../../actions/test";

const Form = ({ edit }) => {
  const updateObject = useSelector((state) => state.testReducer.find(eles => eles._id === edit));

  const dispatch = useDispatch();
  const [data, setdata] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(updateTestData(edit, data));
    }
    else {
      dispatch(createTestData(data));
    }
  };

  useEffect(() => {
    if (edit) setdata(updateObject);
  }, [edit, updateObject])

  return (
    <>
      <Box
        sx={{
          width: 300,
          padding: ["12px", "15px"],
        }}
      >
        <Paper elevation={3}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              value={data.title}
              onChange={(e) => setdata({ ...data, title: e.target.value })}
              required
            />
            <TextField
              id="outlined-basic"
              label="Content"
              variant="outlined"
              fullWidth
              value={data.content}
              onChange={(e) => setdata({ ...data, content: e.target.value })}
              required
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              {edit ? "Edit" : "Submit"}
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Form;
