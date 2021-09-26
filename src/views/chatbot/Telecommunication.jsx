import React, { useState } from 'react'
import { Container, Grid, makeStyles, Modal, Typography, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';
import clsx from 'clsx';
import Feedback from './../../components/Chatbot/Feedback';

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

const Telecommunication = () => {
  const classes = useStyles()
  const bk = useMediaQuery(theme => theme.breakpoints.up('md'))

  const [displayFeedback, updateDisplayFeedback] = useState(false)

  const submit = (feedback) => {
    updateDisplayFeedback(false)
    if (feedback) {
      console.log(feedback)
    } else {
      console.log("No feedback provided")
    }
  }

  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item alignItems="center" sm={12} md={4}>
            <img
              src="/Telecommunication_1.svg"
              height="auto"
              width={bk ? "70%" : "60%"}
              alt=""
            />
            <Typography variant="h3" className={clsx(classes.row, classes.title)}>Telecommunication</Typography>
          </Grid>
          <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
            <Chatbot finish={() => updateDisplayFeedback(true)} />
          </Grid>
        </Grid>

        <Modal
          open={displayFeedback}
          onClose={() => updateDisplayFeedback(false)}
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
