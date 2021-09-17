import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import { Parallax } from "react-scroll-parallax";

const ContactUs = () => {
  const classes = useStyles();
  return (
    <HomeLayout>
      <Parallax className={classes.parallax} y={[-20, 20]} tagOuter="figure">
        <Paper className={classes.body} square elevation={3}>
          <Typography className={classes.name} component="h3" variant="h3">
            GET IN TOUCH
          </Typography>
          <Typography className={classes.subtitle} component="h6" variant="h6">
            We'd love to hear from you
          </Typography>
        </Paper>
      </Parallax>
      <Parallax className={classes.parallax} y={[-5, 5]} tagOuter="figure">
        <Paper className={classes.paper} elevation={12}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} className={classes.logoSection}>
              <img
                className={classes.logo}
                src="./Logo-robot-only.svg"
                alt="Logo"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.contactSection}
            >
              <Typography
                component="h4"
                variant="h4"
                className={classes.heading}
              >
                Developers
              </Typography>
              <Typography component="h6" variant="h6">
                Kavindu - kavindu.18@cse.mrt.ac.lk
              </Typography>
              <Typography component="h6" variant="h6">
                Chandima - chandimaamarasena.18@cse.mrt.ac.lk
              </Typography>
              <Typography component="h6" variant="h6">
                Yasith - yasith.18@cse.mrt.ac.lk
              </Typography>

              <Typography
                component="h4"
                variant="h4"
                className={classes.heading}
              >
                Social Media
              </Typography>
              <Typography component="h6" variant="h6">
                Youtube - www.youtube.com/wingman
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Parallax>
    </HomeLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  body: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    paddingTop: "150px",
    paddingBottom: "80px",
    textAlign: "center",
  },
  name: {
    color: theme.palette.secondary.main,
  },
  subtitle: {
    color: theme.palette.secondary.light,
  },
  parallax: {
    margin: "0px",
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
  paper: {
    [theme.breakpoints.up("md")]: {
      margin: "20px 150px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "20px 20px",
    },
  },
  heading: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  contactSection: {
    padding: "40px",
    textAlign: "left",
  },
  logoSection: {
    padding: "40px",
    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 100%)`,
  },
}));

export default ContactUs;
