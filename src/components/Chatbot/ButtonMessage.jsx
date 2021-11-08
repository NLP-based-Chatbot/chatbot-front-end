import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core';
import { IconButton, ButtonGroup, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      height: "fit-content",
      marginTop: theme.spacing(3),
    },
    container_bot: {
      maxWidth: "70%",
      borderRadius: "1.2rem 1.2rem 1.2rem 0",
      width: "fit-content",
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(2, 3),
      marginLeft: theme.spacing(2)
    },
    container_bot_button: {
      maxWidth: "70%",
      borderRadius: "1.0rem 1.0rem 1.0rem 1.0rem",
      width: "fit-content",
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(0, 0),
      marginLeft: theme.spacing(1)
    },
    container_user: {
      maxWidth: "70%",
      borderRadius: "1.2rem 1.2rem 0 1.2rem",
      width: "fit-content",
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(2, 3),
      marginRight: theme.spacing(2),
      marginLeft: "auto"
    },
    font: {
      fontWeight: "600"
    }
  }))
  

const ButtonMessage = ({ sendMessage , sender, message, payload}) => {
const classes = useStyles()

return (
    <Box className={classes.root}>
    {sender === 'bot' ?
        <Box data-testid = 'bot' className={classes.container_bot_button}>
        <Button onClick={() => {
            sendMessage(payload)
        }}>{message}</Button>
        </Box>
        :
        <Box data-testid = 'user' className={classes.container_bot_button}>
        <Button onClick={() => {
            sendMessage(payload)
        }}>{message}</Button>
        </Box>
    }
    </Box>
)
}

export default ButtonMessage
