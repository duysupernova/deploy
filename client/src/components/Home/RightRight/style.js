import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({

    text: {
        "& .MuiContainer-root": {
            fontWeight: "bold",
        },
        "& .headBar": {
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
        }
    },
    navigation: {
        "& .MuiGrid-root": {
            padding: "10px 50px"
        },
        " & .MuiGrid-item": {
            border: "2px solid transparent",
            transition: "all 0.2s ease-in-out"

        },
        " & .MuiGrid-item:hover": {
            borderBottom: "2px solid #081ff7",
        },

    }
}))

