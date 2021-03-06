import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from "../../assets/images/Socials/facebook.png"
import TwitterIcon from "../../assets/images/Socials/twitter.png"
import LinkedinIcon from "../../assets/images/Socials/linkedIn.png"
import InstagramIcon from "../../assets/images/Socials/instagram.png"

import logo from "../../assets/salt.png";
import { useStyles } from './Footer.style';

export const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <img src={logo} alt="logo" className={classes.logo} />
                    <Typography variant="body1" className={classes.footerPara1}>
                        Salt provides borderless banking and compliance solutions.
                    </Typography>

                    <Typography variant="body1" className={classes.footerPara2}>
                        Copyright @ Poziom Ventures Pvt. Ltd
                        Disclaimer | Privacy Policy | Terms of Service
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" className={classes.footerPara1}>
                        Company
                    </Typography>

                    <Link href="#" className={classes.footerLink}>
                        <Typography variant="h6" className={classes.footerPara2}>
                            About Us
                        </Typography>
                    </Link>

                    <Link href="#" className={classes.footerLink}>
                        <Typography variant="h6" className={classes.footerPara2}>
                            Blog
                        </Typography>
                    </Link>

                    <Link href="#" className={classes.footerLink}>
                        <Typography variant="h6" className={classes.footerPara2}>
                            Career
                        </Typography>
                    </Link>

                    <Link href="mailto:salt.pe" className={classes.footerLink}>
                        <Typography style={{ fontWeight: "900" }} variant="h6" className={classes.footerPara2}>
                            contact@salt.pe
                        </Typography>
                    </Link>

                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" className={classes.footerPara1}>
                        Add us to your life!
                    </Typography>

                    <Link href="#" className={classes.footerLink}>
                        <Typography variant="h6" className={classes.footerPara2}>
                            <img src={FacebookIcon} alt="facebook" className={classes.socialIcon} />
                            Facebook
                        </Typography>
                    </Link>

                    <Link href="#" className={classes.footerLink}>
                        <Typography variant="h6" className={classes.footerPara2}>
                            <img src={TwitterIcon} alt="twitter" className={classes.socialIcon} />
                            Twitter
                        </Typography>
                    </Link>

                    <Link href="#" className={classes.footerLink}>
                        <Typography variant="h6" className={classes.footerPara2}>
                            <img src={LinkedinIcon} alt="linkedIn" className={classes.socialIcon} />
                            LinkedIn
                        </Typography>
                    </Link>

                    <Link href="#" className={classes.footerLink}>
                        <Typography style={{ fontWeight: "900" }} variant="h6" className={classes.footerPara2}>
                            <img src={InstagramIcon} alt="instagram" className={classes.socialIcon} />
                            Instagram
                        </Typography>
                    </Link>
                </Grid>

            </Grid>
        </div>
    )
}
