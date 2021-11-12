import { Card, Chip, makeStyles } from '@material-ui/core'
import React from 'react'
import ChatMessage from './ChatMessage'
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.secondary.light,
    height:"45vh", 
    overflowY: "auto",
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}))


const ChatDisplay = ({feedback, chatsession}) => {
  const chat = JSON.parse(chatsession)
  const classes = useStyles()
  console.log(chat)
  return (
    <div>
      <Card className={classes.body}>
      <Chip label={feedback} color="primary" icon={<CancelIcon />} style={{backgroundColor:'red'}}/>
      {chat.map((message, index) => <ChatMessage {...message} key={`${index}`} />)}
      </Card>
    </div>
  )
}

export default ChatDisplay
