import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    answer: {
        "& .img": {
            maxWidth: "100%",
            maxHeight: "20rem",
            padding: "8px 16px",
            margin: 0,
        },
        "& .bodyText": {
            margin: 0,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
            fontWeight: "400",
            fontSize: "0.875rem",
            lineHeight: "1.43",
            letterSpacing: "0.01071em",
            color: "#787C7E",
            display: "block",
            padding: "0 16px 0 16px"
        },
    },
}))