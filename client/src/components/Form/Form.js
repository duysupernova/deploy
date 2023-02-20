import React, { useState } from "react";
import { Paper, TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTestData } from "../../actions/test";

const Form = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    title: "",
    content: "",
  });
  const [edit, setedit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTestData(data));
  };
  return (
    <>
      <Box
        sx={{
          width: 300,
          padding: ["12px", "15px"],
        }}
      >
        <Paper elevation={3}>
          <form noValidate onSubmit={handleSubmit} autoComplete="off">
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
