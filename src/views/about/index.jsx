import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    height: "calc(100vh - 110px)",
  },
  container: {
    height: "100%",
  },
  paper: {
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      margin: "20px 0px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "20px 20px",
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
  parallax: {
    margin: "0px",
  },
  body: {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.light} 90%)`,
    paddingTop: "120px",
    paddingBottom: "80px",
    textAlign: "center",
  },
  name: {
    color: theme.palette.secondary.main,
  },
  subtitle: {
    color: theme.palette.secondary.light,
  },
  content: {
    textAlign: "justify",
    textJustify: "inter-word",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  img: {
    marginTop: theme.spacing(4),
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const bk = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div>
      <Parallax className={classes.parallax} y={[-45, 20]} tagOuter="figure">
        <Paper className={classes.body} square elevation={3}>
          <Typography className={classes.name} component="h3" variant="h3">
            About Us
          </Typography>
          <Typography className={classes.subtitle} component="h6" variant="h6">
            This is our story
          </Typography>
        </Paper>
      </Parallax>
      <Parallax className={classes.parallax} y={[-5, 5]} tagOuter="figure">
        <Grid
          container
          className={classes.container}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item sm={12} md={4} className={classes.img}>
            <img
              src="/Hero Section.svg"
              height="auto"
              width={bk ? "100%" : "70%"}
              alt=""
            />
          </Grid>
          <Grid item sm={12} md={5}>
            <Paper className={classes.paper} elevation={12}>
              <Typography variant="h4" className={classes.title}>
                Who we are
              </Typography>
              <Typography variant="body1" className={classes.content}>
                We are a team of undergraduates at the department of computer
                science and engineering, University of Moratuwa, Sri Lanka.
                Mainly there are three developers are working on this project as
                a team. Even this project is being developed as a module project
                in the university, we always try to include the latest
                technologies and also best practices in software development.
              </Typography>
              <Typography variant="h4" className={classes.title}>
                Our work
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Our vision is to develop the most intelligent chatbot to resolve
                social inquiries in the domains of Transportation, Healthcare,
                and Telecommunication. We are using the leading conversational
                platform Rasa to give the best experience of the chatbot.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Parallax>
    </div>
  );
};

export default AboutUs;
