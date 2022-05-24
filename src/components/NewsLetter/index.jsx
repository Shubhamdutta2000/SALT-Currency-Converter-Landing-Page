import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './NewsLetter.style';

export const NewsLetter = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paperNewsletter}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={9}>
                    <Typography variant="h4" className={classes.newsletterHeading}>
                        Subscribe Now for
                        Get Special Features!
                    </Typography>
                    <Typography variant="h6" className={classes.newsletterPara}>
                        Banking, but seasoned with SALT.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button className={classes.newsletterButton}>
                        Subscribe Now!
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
