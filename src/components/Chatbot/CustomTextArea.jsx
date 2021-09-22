import React, { useState } from 'react'
import { makeStyles, IconButton, ButtonGroup } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { useSpeechRecognition } from 'react-speech-recognition';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    alignItems: "center"
  },
  text: {
    width: "90%",
    padding: theme.spacing(2),
    fontSize: "1rem",
    backgroundColor: theme.palette.secondary.light,
  }
}))

const CustomTextArea = ({ sendMessage, toggleRecord }) => {
  const classes = useStyles()
  const [message, updateMessage] = useState("")

  const { listening } = useSpeechRecognition()

  return (
    <div className={classes.root}>
      <textarea rows="1" className={classes.text} value={message} onChange={e => updateMessage(e.target.value)} />
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <IconButton onClick={() => {
          toggleRecord()
        }}>
          {listening ? <MicIcon color="error" /> : <MicIcon />}
        </IconButton>
        <IconButton onClick={() => {
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
