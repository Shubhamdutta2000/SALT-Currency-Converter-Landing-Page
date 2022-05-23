import { Link } from "react-router-dom";
import {
    Toolbar,
    Typography,
    Button,
    SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavLogo from "../../assets/salt.png";
import { mobileNavList } from "./MobileNavList";
import { useStyles } from "./Navbar.style";
import { NavLogic } from "./Navbar.logic";

/**
 * 
 * @returns Navbar component
 */
export default function Navbar() {
    const classes = useStyles();
    const { isMobile, hamburger, toggleDrawer } = NavLogic()

    return (
        <>
            <div className={classes.navbar}
            >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.navLogo}>
                        <Link to="/">
                            <img src={NavLogo} alt="SALT Logo" />
                        </Link>
                    </div>
                    {!isMobile ? (
                        <div className={classes.allNavItems}>
                            {/* ---------------Desktop View Nav items-------------------------- */}
                            {/* Left side Nav */}
                            <div className={classes.leftNav}>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <Typography variant="description" style={{
                                        color: "#1E5EF3",
                                    }} className={classes.navItems}>
                                        About
                                    </Typography>
                                </Link>

                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <Typography variant="description" className={classes.navItems}>
                                        Features
                                    </Typography>
                                </Link>

                                <Link to="/" style={{ textDecoration: "none" }} >
                                    <Typography variant="description" className={classes.navItems}>
                                        Pricing
                                    </Typography>
                                </Link>

                                <Link to="/" style={{ textDecoration: "none" }} >
                                    <Typography variant="description" className={classes.navItems}>
                                        Testimonials
                                    </Typography>
                                </Link>

                                <Link to="/" style={{ textDecoration: "none" }} >
                                    <Typography variant="description" className={classes.navItems}>
                                        Help
                                    </Typography>
                                </Link>
                            </div>

                            {/* Right Nav */}
                            <div className={classes.rightNav}>
                                <Link to="/" style={{ textDecoration: "none" }} >
                                    <Typography variant="description" className={classes.navItems} style={{
                                        fontWeight: "500",
                                        fontFamily: "HKGroteskBold ",
                                    }}>
                                        Login
                                    </Typography>
                                </Link>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <Button
                                        className={classes.navItems_Login}
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* ---------------------------------FOR MOBILE VIEW----------------------------------- */}
                            <Button onClick={toggleDrawer("right", true)}>
                                <MenuIcon color="primary" className={classes.hamIcon} />
                            </Button>
                            <SwipeableDrawer
                                anchor={"right"}
                                open={hamburger["right"]}
                                onClose={toggleDrawer("right", false)}
                                onOpen={toggleDrawer("right", true)}
                            >
                                {mobileNavList("right", toggleDrawer)}
                            </SwipeableDrawer>
                        </>
                    )}
                </Toolbar>
            </div>
        </>
    );
}