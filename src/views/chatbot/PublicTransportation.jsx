import React, { useState } from 'react'
import { Container, Grid, makeStyles, Modal, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';
import Feedback from './../../components/Chatbot/Feedback';
import { useSelector } from 'react-redux';
import { getUserSignedIn, getUser, getToken } from './../../store/slices/auth';
import { Redirect } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import api from './../../api/index';
import { getChat } from './../../store/slices/chatbot';
import Newsfeed from '../../components/Chatbot/Newsfeed';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)",
    display: "flex",
    alignItems: "center",
    paddingTop:"20px",
    paddingBottom:"20px"
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

const PublicTransportation = () => {
  const classes = useStyles()
  const signedIn = useSelector(getUserSignedIn)
  const chat = useSelector(getChat)
  const user = useSelector(getUser)
  const token = useSelector(getToken)

  const bk_1 = useMediaQuery(theme => theme.breakpoints.up('lg'))

  const [displayFeedback, updateDisplayFeedback] = useState(false)

  const submit = async (index, feedback) => {
    updateDisplayFeedback(false)
    const chatJSON = JSON.stringify(chat)
    try {
      await api.feedback.POST.feedback(token.access, user.id, 'transport', index, feedback, chatJSON)
      toast.success('Feedback added')
    } catch (err) {
      console.log(err.response.message)
      toast.error('Something went wrong')
    }
  }


  if (!signedIn) return <Redirect to="/home" />

  return (
    <div className={classes.root}>
      <Container>
        <ToastContainer />
        <Grid container alignItems="center" justifyContent={bk_1 ? "space-between" : "space-around"} spacing={4}>
        <Grid item alignItems="center" sm={12} md={6}>
            <Newsfeed
              domain="Public Transport"
              domainImg="/bus_1.svg"
              posts={[
                {
                  img: "/transport_launch.jpg",
                  title: "We are now LIVE",
                  body: "Check this out",
                  date: "26th September 2021"
                },
              ]}

              instructions={[
                {
                  label: "title 1",
                  content: "Version 5 is out",
                },
                {
                  label: "title 2",
                  content: "Version 5 is out",
                },
              ]}
            />
          </Grid>
          <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
            <Chatbot finish={() => updateDisplayFeedback(true)} domain='transport' />
          </Grid>
        </Grid>

        <Modal
          open={displayFeedback}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Feedback submit={(index, feedback) => submit(index, feedback)} />
        </Modal>
      </Container>
    </div>
  )
}

export default PublicTransportation
