import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './PlanCard.style'
import PlanImage from "../../assets/images/PlanSection/planSvg.svg"

export const PlanCard = ({ planDetails }) => {
    const classes = useStyles()

    return (
        <Paper elevation={10} className={classes.planPaper}>
            <img src={PlanImage} alt="Pricing Img" />
            <Typography variant="h4" className={classes.planTitle}>
                {planDetails.title}
            </Typography>
            {planDetails.description.map((desc, index) => (
                <Typography variant="body1" key={index} className={classes.planDesc}>
                    ✔️  {desc}
                </Typography>
            ))}

            <Typography variant="h6" className={classes.planPrice}>
                {planDetails.price}
            </Typography>
            <Button variant="contained" color="primary" className={classes.planButton}>
                {planDetails.buttonText}
            </Button>

        </Paper >
    )
}
