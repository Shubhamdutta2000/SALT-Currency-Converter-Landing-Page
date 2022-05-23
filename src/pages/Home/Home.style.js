import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    planSection: {
        width: "100%",
        padding: "10px 9rem",
        backgroundColor: "#F6F6F6",
        marginTop: "2rem",
        marginBottom: "2rem",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 1rem",
        }
    },

    pricingHeading: {
        fontFamily: "HKGroteskBold !important",
        marginTop: "5.4rem !important",
        textAlign: "center",
        fontSize: "2.6rem !important",
        fontWeight: "900 !important",
        marginBottom: "1.6rem !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem !important",
        },
    },
    pricingPara: {
        width: "80%",
        position: "relative",
        left: "10%",
        textAlign: "center",
        fontSize: "1.6rem !important",
        fontWeight: "500 !important",
        marginBottom: "1.6rem !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem !important",
        },
    },

}));