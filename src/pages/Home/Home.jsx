import { Button, Container, Grid, Typography } from '@mui/material';
import HeroImage from "../../assets/images/HeroSection/Hero.png";
import { useStyles } from './Home.style';

const Home = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} className={classes.leftSide}>
                    <Typography variant="h2" className={classes.heading}>
                        Not your average banking experience.
                    </Typography>
                    <Typography variant="h4" className={classes.paragraph}>
                        Banking, but seasoned with SALT.
                        We deal with all things related to global business banking so that you don't have to.
                    </Typography>
                    <Button className={classes.getStartedBtn}>
                        Get Started!
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className={classes.HeroImage} src={HeroImage} alt="SALT Logo" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home