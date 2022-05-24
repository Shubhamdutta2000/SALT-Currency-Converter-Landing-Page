import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navbar: {
        position: "relative",
        padding: "0 7.5rem",
        [theme.breakpoints.down("sm")]: {
            padding: "0 1rem",
        },
    },
    toolbar: {
        padding: "1.1rem 0",
        display: "flex",
    },
    title: {
        flexGrow: 1,
    },
    navLogo: {
        cursor: "pointer",
        position: "relative",
        width: "8.85rem",
        marginLeft: "2.4vw",
        marginTop: "0.3rem",
        [theme.breakpoints.down("sm")]: {
            width: "33vw",
            left: "4vw",
            top: "0.5vw",
        },
    },
    allNavItems: {
        position: "relative",
        display: "flex",
        margin: "1rem 0 0 1.4rem",
    },
    leftNav: {

    },
    rightNav: {
        margin: "-0.4rem 0 0 20rem !important",
    },

    navItems: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "17.5px !important",
        lineHeight: "21px !important",
        color: "161616; !important",
        paddingRight: "2rem !important",
        "&:hover": {
            color: "#1E5EF3 !important",
        },
    },

    navItems_Login: {
        fontFamily: "HKGroteskBold !important",
        color: "#1E5EF3 !important",
        fontWeight: "580 !important",
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
    menuButton: {
        color: theme.palette.primary.main,
        marginLeft: "45%",
    },
    menuButtonHam: {
        width: "10vw",
        height: "10vw",
    },
    mobilenavItems: {
        color: "#4D7178",
        fontWeight: 600,
        margin: theme.spacing(3, 0),
    },
    hamIcon: {
        fontSize: "4rem",
        width: "4rem",
        margin: "0rem 0 0 12rem !important",
    },
}));