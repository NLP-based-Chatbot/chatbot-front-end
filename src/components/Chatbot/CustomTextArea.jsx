import React, { useState } from 'react'
import { makeStyles, IconButton, ButtonGroup, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { useSpeechRecognition } from 'react-speech-recognition';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  text: {
    width: "90%",
    padding: theme.spacing(0, 3)
  }
}))

const CustomTextArea = ({ sendMessage, toggleRecord }) => {
  const classes = useStyles()
  const [message, updateMessage] = useState("")

  const { listening } = useSpeechRecognition()

  return (
    <div className={classes.root}>
      <TextField
        className={classes.text}
        multiline={true}
        maxRows={1}
        value={message}
        onChange={e => updateMessage(e.target.value)}
        InputProps={{ 'data-testid': 'message', disableUnderline: true }}
      />
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <IconButton data-testid='voice-btn' onClick={() => {
          toggleRecord()
        }}>
          {listening ? <MicIcon color="error" /> : <MicIcon />}
        </IconButton>
        <IconButton data-testid='send-btn' onClick={() => {
          sendMessage(message)
          updateMessage("")
        }}>
          <SendIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  )
}

export default CustomTextArea
