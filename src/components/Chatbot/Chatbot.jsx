import { Box, Card } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles, IconButton } from '@material-ui/core';
import ChatMessage from './ChatMessage';
import CustomTextArea from './CustomTextArea';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';
import { useSelector, useDispatch } from 'react-redux';
import { getToken, getUser } from '../../store/slices/auth';
import { updateChat } from '../../store/slices/chatbot';
import api from '../../api';
import { toast } from 'react-toastify';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3, 0, 3),
    backgroundColor: theme.palette.primary.light,
    height: "70vh",
    width: "100%",
  },
  body: {
    backgroundColor: theme.palette.secondary.light,
    height: "75%",
    overflowY: "auto",
    padding: theme.spacing(2, 0)
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  flexColumn: {
    flexDirection: "column"
  },
  textArea: {
    height: "25%",
    width: "100%",
  },
  row: {
    width: "100%",
    margin: theme.spacing(1, 0)
  },
  buttonGroup: {
    width: "fit-content",
    marginLeft: "auto",
    color: "white"
  }
}))

const Chatbot = ({ finish, domain }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const displayName = useSelector(getUser)
  const token = useSelector(getToken)

  const [chatMessages, updateChatMessages] = useState([
    { sender: "bot", message: `Hi, ${displayName.first_name}` },
  ])

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition()

  const updateChatBox = async (message) => {
    if (!message) return
    try {
      updateChatMessages([...chatMessages, { sender: displayName, message: message }])
      const reply = await api.chatbot.POST.chat(token.access, displayName.first_name, message, domain)
      let temp = []

      for (let r of reply.data) {
        let tempbuttons =[]
        if (r.hasOwnProperty("buttons")){
          for (let b in r.buttons){
            tempbuttons = [...tempbuttons,{title: b.title , payload: b.payload}]
          }
          temp = [...temp, { sender: "bot", message: r.text , buttons: tempbuttons }]
        }else{
          temp = [...temp, { sender: "bot", message: r.text }]
        }
        
      
      }
      updateChatMessages([...chatMessages, { sender: displayName, message: message }, ...temp])
    } catch (err) {
      toast.error("Message send failed")
      return
    }
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
      <div className={clsx(classes.textArea, classes.flexColumn, classes.flexRow)}>
        <CustomTextArea sendMessage={updateChatBox} toggleRecord={() => toggleRecord()} />
        <Box className={classes.row}>
          <Box className={clsx(classes.flexRow, classes.buttonGroup)}>
            <Typography variant="body1">End Conversation</Typography>
            <IconButton
              color="secondary"
              onClick={async () => {
                await dispatch(updateChat(chatMessages))
                finish()
              }}>
              <StopIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </Card>
  )
}

export default Chatbot
