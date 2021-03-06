import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    planPaper: {
        padding: "4rem",
        margin: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        transition: "0.3s",
        background: "#FFFFFF",
        border: "1.6px solid #1E5EF3",
        boxShadow: "7px 15px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: "20px !important",
        "&:hover": {
            boxShadow: "7px 15px 20px rgba(0, 0, 0, 0.24)",
            background: "#FFFFFF",
        }
    },

    planTitle: {
        fontFamily: "HKGroteskBold !important",
        fontSize: "1.5rem",
        fontWeight: "500 !important",
        marginTop: "1.5rem !important",
        marginBottom: "1.6rem !important",
    },

    planDesc: {
        marginRight: "auto !important",
        fontSize: "1.1rem !important",
        paddingBottom: theme.spacing(1),
        fontWeight: "500 !important",
        color: "#979797",
        textAlign: "left",
    },

    planPrice: {
        fontFamily: "HKGroteskBold !important",
        fontSize: "1.5rem",
        marginTop: "2.6rem !important",
        marginBottom: "1.2rem !important",
        // fontFamily: 'Inter !important',
        fontStyle: "normal !important",
        fontWeight: "600 !important",
        fonSize: "24px !important",
        lineHeight: "29px !important",
        color: "#150F0D !important",
    },

    planButton: {
        fontFamily: "HKGroteskBold !important",
        color: "#1E5EF3 !important",
        fontWeight: "900 !important",
        fontSize: "1rem !important",
        border: "2px solid #1E5EF3 !important",
        borderRadius: "50px !important",
        backgroundColor: "transparent !important",
        padding: "0.4rem 2rem !important",
        textTransform: "none !important",
        "&:hover": {
            color: "#fff !important",
            backgroundColor: theme.palette.primary.main + "!important",
            border: "2px solid" + theme.palette.primary.main + "!important",
        },
    },

    planImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    }
}));