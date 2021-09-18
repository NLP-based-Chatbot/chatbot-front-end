import React from 'react'
import { makeStyles, Box, Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "fit-content",
    marginTop: theme.spacing(3),
  },
  row: {
    maxWidth: "70%",
    width: "fit-content",
    height: "fit-content",
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "0.5rem"
  },
  message: {

  },
  botAvatar: {
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginLeft: theme.spacing(1)
  },
  avatar: {
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    width: theme.spacing(5),
    height: theme.spacing(5),
  }
}))

const ChatMessage = ({ sender, message }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {sender === 'bot' ?
        <Grid container alignItems="center">
          <Grid item md={4} lg={3} xl={2}><Avatar alt="chatbot" src="/Logo-robot-only.svg" className={classes.botAvatar} /></Grid>
          <Grid item md={8} lg={9} xl={10} justifyContent="flex-start"><Box className={classes.row} style={{ marginRight: 'auto' }} py="10px" px="20px">{message}</Box></Grid>
        </Grid>
        :
        <Grid container alignItems="center">
          <Grid item md={8} lg={9} xl={10} justifyContent="flex-end"><Box className={classes.row} style={{ marginLeft: 'auto' }} py="10px" px="20px">{message}</Box></Grid>
          <Grid item md={4} lg={3} xl={2}><Avatar className={classes.avatar}>{sender.substr(0, 1)}</Avatar></Grid>
        </Grid>}
    </Box>
  )
}

export default ChatMessage
