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

const HealthCare = () => {
  const classes = useStyles()
  const bk_1 = useMediaQuery(theme => theme.breakpoints.up('lg'))
  const bk_2 = useMediaQuery(theme => theme.breakpoints.up('md'))
  const bk_3 = useMediaQuery(theme => theme.breakpoints.up('sm'))

  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" justifyContent={bk_1 ? "space-between" : "space-around"}>
          {bk_3 && <Grid item alignItems="center" sm={12} md={3}>
            <img
              src="/HealthCare_1.svg"
              height="auto"
              width={bk_2 ? "80%" : "60%"}
              alt=""
            />
            <Typography variant="h3" className={clsx(classes.row, classes.title)}>Health Care</Typography>
          </Grid>}
          <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
            <Chatbot />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HealthCare
