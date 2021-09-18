import React, { useState } from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

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

const CustomTextArea = ({ sendMessage }) => {
  const classes = useStyles()
  const [message, updateMessage] = useState("")
  return (
    <div className={classes.root}>
      <textarea rows="1" className={classes.text} value={message} onChange={e => updateMessage(e.target.value)} />
      <IconButton onClick={() => {
        sendMessage(message)
        updateMessage("")
      }}>
        <SendIcon />
      </IconButton>
    </div>
  )
}

export default CustomTextArea
