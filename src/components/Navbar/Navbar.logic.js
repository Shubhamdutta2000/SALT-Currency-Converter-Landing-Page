import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const NavLogic = () => {
    const isMobile = useMediaQuery("(max-width:600px)");

    const [hamburger, setHamburger] = useState({
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setHamburger({ ...hamburger, [anchor]: open });
    };

    return { isMobile, hamburger, toggleDrawer };
}