import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#333CFF",
        },
        alternate: {
            main: "#fff",
        },
        secondary: {
            main: "#19857b",
        },
        button: {
            main: "#333CFF",
        },
        error: {
            main: "#F8485E",
        },
        background: {
            primary: "#fff",
            secondary: "#141414",
        },
    },
    typography: {
        fontFamily: "HKGroteskLight",
    }
});

export default theme;