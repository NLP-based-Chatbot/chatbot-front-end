import React from 'react'
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    height: "calc(100vh - 110px)"
  },
  container: {
    height: "100%"
  }
}))

const HealthCare = () => {
  const classes = useStyles()
  const bk = useMediaQuery(theme => theme.breakpoints.up('md'))
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="space-around" className={classes.container}>
        <Grid item alignItems="center" sm={12} md={3}>
          <img
            src="/Health Care.svg"
            height="auto"
            width={bk ? "100%" : "70%"}
            alt=""
          />
        </Grid>
        <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
          <Chatbot />
        </Grid>
      </Grid>
    </div>
  )
}

export default HealthCare
