import InfoIcon from '@mui/icons-material/Info';
import PaidIcon from '@mui/icons-material/Paid';
import ReviewsIcon from '@mui/icons-material/Reviews';
import HelpIcon from '@mui/icons-material/Help';
import StartIcon from '@mui/icons-material/Start';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

/**
 * 
 * @param {String} anchor 
 * @param {Function} toggleDrawer 
 * @returns Mobile NavList component
 */
export const mobileNavList = (anchor, toggleDrawer) => (
    <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            <ListItem button>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
            </ListItem>

            <Link to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                    <ListItemIcon>
                        <FeaturedPlayListIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Features'} />
                </ListItem>
            </Link>

            {/* Discover ideas */}
            <Link to="/" style={{ textDecoration: "none" }} >
                <ListItem button>
                    <ListItemIcon>
                        <PaidIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Pricing'} />
                </ListItem>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }} >
                <ListItem button>
                    <ListItemIcon>
                        <ReviewsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Testimonials'} />
                </ListItem>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }} >
                <ListItem button>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Help'} />
                </ListItem>
            </Link>

            <ListItem button>
                <ListItemIcon>
                    <StartIcon />
                </ListItemIcon>
                <ListItemText primary={'Get Started'} />
            </ListItem>
        </List>
        <Divider />
    </Box>
);