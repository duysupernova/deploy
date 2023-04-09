import { Container, InputAdornment, TextField, Grid } from "@mui/material";
import { useState } from "react";
import search from './search.png';


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
  setSearchTerm(event.target.value);
  };

  return (
      <Container>
        <TextField 
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <img src={search} height={25} width={25}/>
              </InputAdornment>
            ),
          }}
        />
      </Container>
  );
}