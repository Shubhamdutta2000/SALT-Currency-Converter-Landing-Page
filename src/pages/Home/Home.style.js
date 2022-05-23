import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    planSection: {
        width: "100%",
        padding: "1rem 9rem 6rem 9rem",
        backgroundColor: "#F6F6F6",
        marginTop: "2rem",
        marginBottom: "1rem",
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

    converterSection: {
        width: "100%",
        padding: "10px 9rem",
        marginTop: "3rem",
        marginBottom: "2rem",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 1rem",
        }
    },

    testimonialSection: {
        backgroundColor: "#F6F6F6",
        marginTop: "6rem",
        marginBottom: "2rem",
        padding: "10px 9rem",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 1rem",
        }
    },

    testimonialHeader: {
        width: "50%",
        fontFamily: "HKGroteskBold !important",
        fontSize: "3rem !important",
        fontWeight: "500 !important",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        marginBottom: "1.6rem !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem !important",

        },
    },

    testimonialPara: {
        width: "50%",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",

        fontSize: "1.4rem !important",
        fontWeight: "500 !important",
        marginBottom: "1.6rem !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem !important",
        },
    },

}));