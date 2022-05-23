import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useStyles } from "./TestimonialCard.style";

export default function TestimonialCard({ testimonialDetails }) {
    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Avatar aria-label="recipe" >
                    </Avatar>
                }
                action={
                    <Typography variant="body1" className={classes.rating} color="textSecondary" component="p">
                        {testimonialDetails.rating}
                    </Typography>
                }
                title={testimonialDetails.author}
                subheader={testimonialDetails.country}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {testimonialDetails.review}
                </Typography>
            </CardContent>
        </Card>
    );
}
