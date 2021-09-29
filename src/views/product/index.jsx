import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
      margin: "0px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "20px 20px",
    }
  },
  title: {
    color: theme.palette.primary.main
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
  },
  img: {
    marginTop: theme.spacing(4)
  }
}));

const Product = () => {
  const classes = useStyles();
  const bk = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div>
      <Parallax className={classes.parallax} y={[-45, 20]} tagOuter="figure">
        <Paper className={classes.body} square elevation={3}>
          <Typography className={classes.name} component="h3" variant="h3">
            Top Performing Chatbot
          </Typography>
          <Typography className={classes.subtitle} component="h6" variant="h6">
            Built with modern NLP techniques
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
                Social Inquery Chatbot
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Top performing chatbot created for social inqueries in the
                domains of Public Transportation, Health Care, and
                Telecommunication built with modern{" "}
                <b>Natural Language Processing (NLP)</b> techniques.
              </Typography>
              <Typography variant="body1" className={classes.content}>
                If you are interested in integrating the Social Inquery Chatbot
                to your system, we got you. <Link to="/contactus">Contact</Link>{" "}
                our developers for future details.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Parallax>
    </div>
  );
};

export default Product;
