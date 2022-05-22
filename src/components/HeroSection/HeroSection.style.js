import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    HeroImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    leftSide: {
        marginTop: "9rem !important",
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            marginTop: "4rem !important",
        },
    },
    heading: {
        fontSize: "3.2rem !important",
        fontWeight: "900 !important",
        marginBottom: "1.6rem !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem !important",
        },
    },
    paragraph: {
        fontSize: "1.6rem !important",
        fontWeight: "500 !important",
        marginBottom: "1.6rem !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem !important",
        },
    },
    getStartedBtn: {
        fontSize: "1rem !important",
        fontWeight: "700 !important",
        marginBottom: "1.6rem !important",
        padding: "1rem 3.2rem !important",
        border: "none",
        textTransform: "none !important",
        cursor: "pointer",
        borderRadius: "20px !important",
        backgroundColor: "#1E5EF3 !important",
        color: "white !important",
        boxShadow: "0px 126.415px 150.943px rgba(30, 94, 243, 0.07), 0px 81.9357px 88.3997px rgba(30, 94, 243, 0.0531481), 0px 6px 48.0783px rgba(30, 94, 243, 0.2), 0px 25.283px 24.5283px rgba(30, 94, 243, 0.12), 0px 10.3005px 12.2991px rgba(30, 94, 243, 0.04), 0px 2.34102px 5.9399px rgba(30, 94, 243, 0.14)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem !important",
        },
        '&:hover': {
            boxShadow: "0px 126.415px 150.943px rgba(30, 94, 243, 0.07), 0px 81.9357px 88.3997px rgba(30, 94, 243, 0.0531481), 0px 6px 48.0783px rgba(30, 94, 243, 0.2), 0px 25.283px 24.5283px rgba(30, 94, 243, 0.24), 0px 10.3005px 12.2991px rgba(30, 94, 243, 0.10), 0px 2.34102px 5.9399px rgba(30, 94, 243, 0.24)",
        }
    }
}));