import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        background: "#FFFFFF",
        borderRadius: "16px !important",
        border: "3px solid #C4C4C4",
        padding: "0.3rem",
    },

    rating: {
        fontSize: "1rem !important",
        fontWeight: "900 !important",
        color: "#000 !important",
        marginTop: "0.6rem !important",

        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem !important",
        },
    },

    cardHeader: {
        fontFamily: "HKGroteskBold !important",
        fontSize: "2rem !important",
        fontWeight: "900 !important",
        color: "#000 !important",

        [theme.breakpoints.down("sm")]: {
            fontSize: "1.4rem !important",
        },

    }
}));