import React from 'react'
import { Card, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    height: "calc(100vh - 110px)"
  },
  container: {
    height: "100%",
  },
  card: {
    padding: theme.spacing(4)
  },
  title: {

  },
  content: {
    textAlign: "justify",
    textJustify: "inter-word",
    paddingTop: theme.spacing(3)
  }
}))

const Product = () => {
  const classes = useStyles()
  const bk = useMediaQuery(theme => theme.breakpoints.up('md'));
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} alignItems="center" justifyContent="space-around">
        <Grid item sm={12} md={4} className={classes.img}>
          <img
            src="/Hero Section.svg"
            height="auto"
            width={bk ? "100%" : "70%"}
            alt=""
          />
        </Grid>
        <Grid item sm={12} md={5}>
          <Card className={classes.card}>
            <Typography variant="h4" className={classes.title}>Social Inquery Chatbot</Typography>
            <Typography variant="h6" className={classes.content}>Top performing chatbot created for social inqueries in the domains of Public Transportation, Health Care, and Telecommunication built with modern <b>Natural Language Processing (NLP)</b> techniques.</Typography>
            <Typography variant="h6" className={classes.content}>If you are interested in integrating the Social Inquery Chatbot to your system, we got you. <Link to="/contactus">Contact</Link> our developers for future details.</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Product
