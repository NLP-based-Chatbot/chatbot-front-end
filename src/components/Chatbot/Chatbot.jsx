import { Card } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import ChatMessage from './ChatMessage';
import CustomTextArea from './CustomTextArea';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    height: "70vh",
    width: "70%",
  },
  body: {
    backgroundColor: theme.palette.secondary.light,
    height: "85%",
    overflowY: "auto",
    paddingTop: theme.spacing(2)
  },
  textArea: {
    marginTop: theme.spacing(5),
    height: "8%",
  }
}))

const Chatbot = () => {
  const classes = useStyles()
  const [chatMessages, updateChatMessages] = useState([
    { sender: "Yasith", message: "Hi" },
    { sender: "bot", message: "Hi, Yasith" },
  ])

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition()

  const updateChatBox = (message) => {
    if (!message) return
    updateChatMessages([...chatMessages, { sender: "Yasith", message: message }, { sender: "bot", message: "Test Message" }])
  }

  const toggleRecord = () => {
    if (!listening) {
      SpeechRecognition.startListening()
    }
    else {
      SpeechRecognition.stopListening()
      resetTranscript()
      updateChatBox(transcript)
    }
  }

  useEffect(() => {

  }, [updateChatMessages])

  return (
    <Card className={classes.root}>
      <Card className={classes.body}>
        {chatMessages.map((message, index) => <ChatMessage {...message} key={`${index}`} />)}
      </Card>
      <Card className={classes.textArea}>
        <CustomTextArea sendMessage={updateChatBox} toggleRecord={() => toggleRecord()} />
      </Card>
    </Card>
  )
}

export default Chatbot
