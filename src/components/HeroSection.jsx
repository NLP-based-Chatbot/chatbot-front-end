import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Parallax className={classes.parallax} y={[-23, 20]} tagOuter="figure">
      <Paper className={classes.body} square elevation={3}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item md={6}>
            <img className={classes.logo} src="./Hero Section.svg" alt="Logo" />
          </Grid>
          <Grid item ms={6}>
            <Box className={classes.paper}>
              <Typography className={classes.name} component="h1" variant="h1">
                Wingman
              </Typography>
              <Typography
                className={classes.subtitle}
                component="h3"
                variant="h3"
              >
                Your Personal Assistant
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Parallax>
  );
};

const useStyles = makeStyles((theme) => ({
  body: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    paddingTop: "180px",
    paddingBottom: "50px",
  },
  paper: {
    marginTop: "40px",
    textAlign: "center",
    padding: "50px",
  },
  name: {
    color: theme.palette.primary.light,
  },
  parallax: {
    margin: "0px",
  },
  subtitle: {
    color: theme.palette.secondary.light,
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}));

export default HeroSection;
