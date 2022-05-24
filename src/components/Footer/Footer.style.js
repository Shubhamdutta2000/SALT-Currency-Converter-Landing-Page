import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
        padding: "9rem",
        backgroundColor: "#F6F6F6",
        marginBottom: "1rem",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 1rem",
        }
    },

    logo: {
        marginBottom: "1rem",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1rem",
        }
    },

    footerPara1: {
        width: "70%",
        fontFamily: "HKGroteskBold !important",
        fontSize: "1.1rem !important",
        fontWeight: "500 !important",
        color: "#434343",
        marginBottom: "1.2rem !important",
    },

    footerLink: {
        textDecoration: "none !important",
    },

    footerPara2: {
        width: "80%",
        fontSize: "0.9rem !important",
        fontWeight: "700 !important",
        color: "#434343",
        marginBottom: "0.8rem !important",
        textAlign: "left",
        '&:hover': {
            color: "#1E5EF3 !important",
            fontWeight: "900 !important",
        }
    },

    social: {
        display: "flex",
        width: "100%",
    },

    socialIcon: {
        marginRight: "1rem",
    }

}));