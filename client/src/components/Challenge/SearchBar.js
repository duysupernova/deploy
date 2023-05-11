import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";;

export default function SearchBar() {
const [searchTerm, setSearchTerm] = useState("");
const handleChange = (event) => {
    setSearchTerm(event.target.value);
};

return (
    <Container maxWidth="md">
        <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
        endAdornment: (
            <InputAdornment position="end">
            </InputAdornment>
        ),
        }}
    />
    </Container>
);
}