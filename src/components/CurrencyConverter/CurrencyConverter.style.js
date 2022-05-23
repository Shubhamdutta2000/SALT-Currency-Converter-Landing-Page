import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    paperCurrency: {
        marginTop: "8rem",
        padding: "90px 6rem 30px 6rem",
        background: "#FFFFFF",
        boxShadow: "2px 2px 70px rgba(0, 0, 0, 0.05), 0px 47.0588px 95px rgba(0, 0, 0, 0.03), 0px 37.6471px 55.1198px rgba(0, 0, 0, 0.0227778), 0px 17.6471px 29.9782px rgba(0, 0, 0, 0.0182222)",
        borderRadius: "34px !important",
    },

    textField: {
        width: "100%",
        marginTop: "-0.5rem !important",

        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },

    resize: {
        fontFamily: "HKGroteskBold !important",
        fontSize: "1.8rem !important",
        fontWeight: "900 !important",
    },

    select: {
        fontFamily: "HKGroteskBold !important",
        width: "100%",
        marginBottom: "1.6rem !important",
        fontWeight: "800 !important",
        fontSize: "1.8rem !important",
    },

    convertBtn: {
        padding: "1rem 0 !important",
        marginTop: "0.4rem !important",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",

        background: "rgba(30, 94, 243, 0.12) !important",
        borderRadius: "50% !important",

        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },

    info: {
        marginTop: "1px !important",
    },


    infoText: {
        marginTop: "-0.5rem !important",
        marginLeft: "1rem !important",
        fontSize: "1rem !important",
        fontWeight: "900 !important",
        color: "#1E5EF3 !important",
    }


}));