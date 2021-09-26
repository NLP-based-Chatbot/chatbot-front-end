import React, { useState } from 'react'
import { ButtonGroup, Card, Container, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import clsx from 'clsx';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  card: {
    height: "fit-content",
    padding: theme.spacing(4)
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon_group: {
    marginTop: theme.spacing(2)
  },
  text: {
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(1, 2),
  },
  text_area: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },
  text_style: {
    textAlign: "center"
  },
  feedback: {
    width: "100%",
    marginTop: theme.spacing(2)
  }
}))

const Feedback = ({ submit }) => {
  const classes = useStyles()
  const [selected, updateSelected] = useState([0, 0, 0, 0, 0])
  const [feedbackDisplay, setFeedbackDisplay] = useState(false)
  const [feedback, updateFeedback] = useState("")

  const click = (index) => {
    let tempList = [0, 0, 0, 0, 0]
    for (let i = 0; i <= index; i++) {
      tempList[i] = 1
    }
    updateSelected(tempList)

    if (index < 3) {
      setTimeout(() => {
        setFeedbackDisplay(true)
      }, 1000)
    } else {
      setTimeout(() => {
        submit()
      }, 1000)
    }
  }

  return (
    <Container className={clsx(classes.root, classes.flex)}>
      <Card className={clsx(classes.card, classes.flex)} style={{ flexDirection: "column" }}>
        <Typography variant="h6" className={classes.text_style}>Please provide your valueble rating<br />to improve our chatbot</Typography>
        <ButtonGroup className={classes.icon_group}>
          {selected.map((select, index) => {
            return (
              <IconButton key={index} onClick={() => click(index)}>
                {select ? <StarIcon style={{ color: "#EAED15" }} /> : <StarBorderIcon />}
              </IconButton>
            )
          })}
        </ButtonGroup>
        {feedbackDisplay &&
          <div className={classes.feedback}>
            <Typography variant="h6" className={classes.text_style}>Please provide some feedback<br /> on what went wrong</Typography>
            <div className={classes.text_area}>
              <TextField
                className={classes.text}
                multiline={true}
                maxRows={1}
                value={feedback}
                onChange={e => updateFeedback(e.target.value)}
                InputProps={{ disableUnderline: true }}
              />
              <IconButton onClick={() => submit(feedback)}>
                <SendIcon />
              </IconButton>
            </div>
          </div>
        }
      </Card>
    </Container>
  )
}

export default Feedback
