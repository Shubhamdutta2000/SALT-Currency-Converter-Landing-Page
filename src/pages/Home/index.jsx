import { Container, Typography, Grid } from '@mui/material';
import { CurrencyConverter } from '../../components/CurrencyConverter';
import HeroSection from '../../components/HeroSection';
import { PlanCard } from '../../components/PlanCard';
import { planDetails } from '../../components/PlanCard/planDetails';
import { useStyles } from './Home.style';

/**
 * 
 * @returns Home page Page
 */
const Home = () => {
    const classes = useStyles();

    return (
        <>
            {/* Hero Section */}
            <Container>
                <HeroSection />
            </Container>

            {/* Plan Section */}
            <div className={classes.planSection}>
                <Typography variant="h2" className={classes.pricingHeading}>
                    Choose Your Plan
                </Typography>
                <Typography variant="h4" className={classes.pricingPara}>
                    Let’s choose a package that is best for you and explore it happily and cheerfully
                </Typography>
                <Grid container spacing={3}>
                    {planDetails.map((plan, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <PlanCard planDetails={plan} />
                        </Grid>
                    ))}
                </Grid>

                {/* Currency Converter */}
                <CurrencyConverter />

                {/* Testimonials */}

                {/* Newsletter */}
            </div>
        </>
    )
}

export default Home