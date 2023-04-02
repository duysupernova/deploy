import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    startIcon: {
        "& .MuiButton-startIcon": {
            margin: "0",
        }
    },
    listItemText: {
        "& .MuiListItemText-root": {
            display: "flex",
            flexDirection: "column-reverse",
        },
        "& .MuiListItemText-root > p": {
            fontSize: "12px",
            marginBottom: "6px"
        }
    },
    list: {
        "& .MuiList-root": {
            padding: "0",
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
        "& .commentCount": {
            margin: 0,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
            fontWeight: "700",
            fontSize: "0.875rem",
            lineHeight: "1.43",
            letterSpacing: "0.01071em",
            color: "#878A8C",
            display: "block",
            padding: "8px 16px 8px 16px"
        },
        "& .times": {
            margin: 0,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
            fontWeight: "400",
            fontSize: "0.875rem",
            lineHeight: "1.43",
            letterSpacing: "0.01071em",
            color: "#787C7E",
        },
    },
    tags: {
        "& .MuiButtonBase-root": {
            background: "#081FF71A",
            color: "#081FF7",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "12px",
        }
    },
}))