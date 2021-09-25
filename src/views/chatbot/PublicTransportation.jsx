import React from 'react'
import { Container, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)",
    display: "flex",
    alignItems: "center"
  },
  row: {
    marginTop: theme.spacing(5)
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontWeight: "600"
  }
}))

const PublicTransportation = () => {
  const classes = useStyles()
  const bk = useMediaQuery(theme => theme.breakpoints.up('md'))
  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item alignItems="center" sm={12} md={3}>
            <img
              src="/Bus_1.svg"
              height="auto"
              width={bk ? "80%" : "60%"}
              alt=""
            />
            <Typography variant="h3" className={clsx(classes.row, classes.title)}>Public Transportation</Typography>
          </Grid>
          <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
            <Chatbot />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PublicTransportation
