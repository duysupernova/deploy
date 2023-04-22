import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Grid, Typography } from '@mui/material'

export default function Filter() {
  const [tag, setTags] = useState(["Java Scripts", "Java", "Web Development"]);
  return (
    <Grid item xs={12} sx={{ float: 'right' }} display='flex' justifyContent='right' alignItems='right'>
      <Grid container>
        <Typography variant="h5" gutterBottom>Filter by tags</Typography>
        <TagsInput
          value={tag}
          onChange={setTags}
          name="Tags"
          placeHolder="Enter tags 🏷️"
        />
      </Grid>
    </Grid>
  );
}