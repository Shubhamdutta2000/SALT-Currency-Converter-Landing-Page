import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

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
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
            </ListItem>

            <Link to="/" style={{ textDecoration: "none" }}>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Features'} />
                </ListItem>
            </Link>

            {/* Discover ideas */}
            <Link to="/" style={{ textDecoration: "none" }} >
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Pricing'} />
                </ListItem>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }} >
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Testimonials'} />
                </ListItem>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }} >
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Help'} />
                </ListItem>
            </Link>

            <ListItem button>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Get Started'} />
            </ListItem>
        </List>
        <Divider />
    </Box>
);