import { Container, Typography, Grid } from '@mui/material';
import { CurrencyConverter } from '../../components/CurrencyConverter';
import HeroSection from '../../components/HeroSection';
import { PlanCard } from '../../components/PlanCard';
import { planDetails } from '../../dummyData/Plans.list';
import { TestimonialCarousal } from '../../components/TestimonialCarousal';
import { useStyles } from './Home.style';
import { NewsLetter } from '../../components/NewsLetter';

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
            </div>

            {/* Currency Converter Section */}
            <div className={classes.converterSection}>
                <CurrencyConverter />
            </div>

            {/* Testimonials Section */}
            <div className={classes.testimonialSection}>
                <Typography variant="h2" className={classes.testimonialHeader}>
                    Trusted by Thousands of Happy Customer
                </Typography>
                <Typography variant="h4" className={classes.testimonialPara}>
                    We are a team of dedicated and passionate people who are committed to provide you the best experience.
                </Typography>
                <TestimonialCarousal />
            </div>

            {/* Newsletter Section */}
            <div className={classes.newsletterSection}>
                <NewsLetter />
            </div>
        </>
    )
}

export default Home