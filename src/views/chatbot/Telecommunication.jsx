import React, { useState } from 'react'
import { Container, Grid, makeStyles, Modal, Typography, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';
import clsx from 'clsx';
import Feedback from './../../components/Chatbot/Feedback';
import { useSelector } from 'react-redux';
import { getUserSignedIn } from './../../store/slices/auth';
import { Redirect } from 'react-router';

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
    fontWeight: "600",
    marginBottom: theme.spacing(2)
  }
}))

const Telecommunication = () => {
  const classes = useStyles()
  const signedIn = useSelector(getUserSignedIn)

  const bk_1 = useMediaQuery(theme => theme.breakpoints.up('lg'))
  const bk_2 = useMediaQuery(theme => theme.breakpoints.up('md'))
  const bk_3 = useMediaQuery(theme => theme.breakpoints.up('sm'))

  const [displayFeedback, updateDisplayFeedback] = useState(false)

  const submit = (feedback) => {
    updateDisplayFeedback(false)
    if (feedback) {
      console.log(feedback)
    } else {
      console.log("No feedback provided")
    }
  }

  if (!signedIn) return <Redirect to="/home" />

  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" justifyContent={bk_1 ? "space-between" : "space-around"}>
          <Grid item alignItems="center" sm={12} md={3}>
            {bk_3 && <img
              src="/Telecommunication_1.svg"
              height="auto"
              width={bk_2 ? "80%" : "60%"}
              alt=""
            />}
            <Typography variant="h3" className={clsx(classes.row, classes.title)}>Telecommunication</Typography>
          </Grid>
          <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
            <Chatbot finish={() => updateDisplayFeedback(true)} domain='telecom' />
          </Grid>
        </Grid>

        <Modal
          open={displayFeedback}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Feedback submit={(feedback) => submit(feedback)} />
        </Modal>
      </Container>
    </div>
  )
}

export default Telecommunication
