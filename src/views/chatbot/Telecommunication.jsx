import React from 'react'
import { Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  container: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)"
  },
  row: {
    marginTop: theme.spacing(5)
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontWeight: "600"
  }
}))

const Telecommunication = () => {
  const classes = useStyles()
  const bk = useMediaQuery(theme => theme.breakpoints.up('md'))

  return (
    <Grid container alignItems="center" justifyContent="space-around" className={classes.container}>
      <Grid item alignItems="center" sm={12} md={3}>
        <img
          src="/Telecommunication_1.svg"
          height="auto"
          width={bk ? "80%" : "60%"}
          alt=""
        />
        <Typography variant="h2" className={clsx(classes.row, classes.title)}>Telecommunication</Typography>
      </Grid>
      <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
        <Chatbot />
      </Grid>
    </Grid>
  )
}

export default Telecommunication
