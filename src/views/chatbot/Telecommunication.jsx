import React, { useState } from 'react'
import { Container, Grid, makeStyles, Modal, useMediaQuery } from '@material-ui/core';
import Chatbot from '../../components/Chatbot/Chatbot';
import Feedback from './../../components/Chatbot/Feedback';

import { useSelector } from 'react-redux';
import { getUserSignedIn, getUser, getToken } from './../../store/slices/auth';
import { Redirect } from 'react-router';
import { getChat  } from './../../store/slices/chatbot';
import api from './../../api/index';
import { toast, ToastContainer } from 'react-toastify';
import Newsfeed from "../../components/Chatbot/Newsfeed";

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

const Telecommunication = () => {
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
      await api.feedback.POST.feedback(token.access, user.id, 'telecom', index, feedback, chatJSON)
      toast.success('Feedback added')
    } catch (err) {
      console.log(err.response)
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
              domain="Telecommunication"
              domainImg="/Telecommunication_1.svg"
              posts={[
                
                {
                  img: "/feature_update.png",
                  title: "New features are added",
                  body: "Now you can make complaints reagarding issues in your connections. Those complaint will be send to relevent authorities and they will fix your issues within 24 hours.",
                  date: "5th November 2021"
                },
                {
                  img: "/telecom_launch.jpg",
                  title: "We are now LIVE",
                  body: "We are pleased to announce the launch of our brand new Telecommunication Chatbot.",
                  date: "29th October 2021"
                },
              ]}

              instructions={[
                {
                  label: "Genaral Questions",
                  content: "Ask me genaral type of questions like check account balance, how to get a loan, recharge, etc. related to any service provider.",
                },
                {
                  label: "Broadband connection",
                  content: "You can ask about new broadband connection, details of routers, etc. Ex:-'How to get a new broadband connection'",
                },
                {
                  label: "Package details",
                  content: "Ask me about data package details. It doesn't matter what your service provider is. Ex:-'Can I get dialog data package details'",
                },
               
                {
                  label: "Television connection",
                  content: "Do you prefer Dialog TV or Peo Tv? Ask me how to get a television connection",
                },
               
               
              ]}
            />
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
          <Feedback submit={(index, feedback) => submit(index, feedback)} />
        </Modal>
      </Container>
    </div>
  )
}

export default Telecommunication
