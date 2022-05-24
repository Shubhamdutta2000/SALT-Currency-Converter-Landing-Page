import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    paperNewsletter: {
        padding: "4rem 3rem",
        boxShadow: "2px 2px 70px rgba(0, 0, 0, 0.05), 0px 47.0588px 95px rgba(0, 0, 0, 0.03), 0px 37.6471px 55.1198px rgba(0, 0, 0, 0.0227778), 0px 17.6471px 29.9782px rgba(0, 0, 0, 0.23) !important",
        borderRadius: "20px !important",
    },

    newsletterHeading: {
        width: "43%",
        fontFamily: "'Inter', sans-serif !important",
        fontSize: "2rem !important",
        fontWeight: "900 !important",
        marginBottom: "0.3rem !important",
        lineHeight: "1.3 !important",

        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem",
            width: "100%",
            marginBottom: "0.3rem !important",
            lineHeight: "1.3 !important",
            textAlign: "lef",
        }
    },

    newsletterPara: {
        marginRight: "auto !important",
        fontSize: "0.9rem !important",
        paddingBottom: theme.spacing(1),
        fontWeight: "900 !important",
        color: "#818181 !important",
        textAlign: "left",
    },

    newsletterButton: {
        position: "relative",
        top: "50% !important",
        transform: "translateY(-50%)",
        fontFamily: "HKGroteskBold !important",
        fontSize: "1rem !important",
        fontWeight: "500 !important",
        padding: "1rem 3.2rem !important",
        border: "none",
        textTransform: "none !important",
        cursor: "pointer",
        borderRadius: "10px !important",
        backgroundColor: "#1E5EF3 !important",
        color: "white !important",
        boxShadow: "0px 126.415px 150.943px rgba(30, 94, 243, 0.07), 0px 81.9357px 88.3997px rgba(30, 94, 243, 0.0531481), 0px 6px 48.0783px rgba(30, 94, 243, 0.2), 0px 25.283px 24.5283px rgba(30, 94, 243, 0.12), 0px 10.3005px 12.2991px rgba(30, 94, 243, 0.04), 0px 2.34102px 5.9399px rgba(30, 94, 243, 0.14)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem !important",
        },
        '&:hover': {
            boxShadow: "0px 126.415px 150.943px rgba(30, 94, 243, 0.07), 0px 81.9357px 88.3997px rgba(30, 94, 243, 0.0531481), 0px 6px 48.0783px rgba(30, 94, 243, 0.2), 0px 25.283px 24.5283px rgba(30, 94, 243, 0.24), 0px 10.3005px 12.2991px rgba(30, 94, 243, 0.10), 2px 6.34102px 6.9399px rgba(30, 94, 243, 0.24)",
        }
    },

}));