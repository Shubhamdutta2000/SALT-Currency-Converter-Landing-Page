import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    testimonialCarousal: {
        marginTop: "6rem !important",
        marginBottom: "2rem !important",
        [theme.breakpoints.down("sm")]: {
            marginTop: "1rem",
            marginBottom: "1rem",
        },
    }

}));