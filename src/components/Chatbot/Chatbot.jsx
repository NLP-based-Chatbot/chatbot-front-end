import { Card } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import CustomTextField from './../CustomTextField';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    height: "70vh",
    width: "60%"
  },
  body: {
    backgroundColor: theme.palette.secondary.light,
    height: "85%",
    overflowY: "auto",
  }
}))

const Chatbot = () => {
  const classes = useStyles()
  const [chatMessages, updateChatMessages] = useState([])

  useEffect(() => {

  }, [updateChatMessages])

  return (
    <Card className={classes.root}>
      <Card className={classes.body}>
        {chatMessages.map((message, index) => <CustomTextField {...message} key={`${index}`} />)}
      </Card>
    </Card>
  )
}

export default Chatbot
