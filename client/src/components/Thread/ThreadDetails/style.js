import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    text: {
        "& .headBar": {
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
        }
    },
    startIcon: {
        "& .MuiButton-startIcon": {
            margin: "0",
            width: "1.5rem",
            height: "1.5rem"
        }
    },
    listItemText: {
        "& .MuiListItemText-root": {
            display: "flex",
            flexDirection: "column",
        },
        "& .MuiListItemText-root > p": {
            fontSize: "12px",
            marginTop: "6px"
        },
        "& .MuiListItemText-root > span": {
            fontSize: "18px",
            fontWeight: "bold"
        }
    },
    list: {
        "& .MuiList-root": {
            padding: "0",
        },
        "& .bodyText": {
            margin: 0,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
            fontSize: "0.875rem",
            lineHeight: "1.43",
            letterSpacing: "0.01071em",
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