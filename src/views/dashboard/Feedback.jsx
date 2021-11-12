import React, { useState, useEffect } from 'react'
import { Box, Button, Card, CardContent, Container, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core';
import api from './../../api/index';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from './../../store/slices/auth';
import TokenGenerator from './../../helpers/TokenRefresh';
import { refreshToken } from '../../store/slices/auth';
import FeedbackItem from '../../components/FeedbackItem';
import { sessionsReceived, sessionsRequested, sessionsRequestFailed } from '../../store/slices/sessions';
import { getSessions } from '../../store/slices/sessions';
import ChatDisplay from '../../components/Chatbot/ChatDisplay';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)",
    display: "flex",
    alignItems: "center"
  },
  container: {
    height: "80vh"
  },
  breadcrumb: {
    marginBottom: 'auto'
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  grid_container: {
    height: '100%',
  },
  grid_item1: {
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid_item2: {
    height: "100%"
  },
  feedback_card: {
    height: "90%",
    width: "100%"
  },
  feedbacks: {
    backgroundColor: '#d2d5d9',
    height: "80%",
    width: "90%",
    borderRadius: "10px",
    overflowY: 'auto'
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontWeight: 600
  },
  subHeading: {
    marginBottom: theme.spacing(2)
  },
  button: {
    marginTop: 'auto',
    marginLeft: 'auto'
  }
}))

const Feedback = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [filter, changeFilter] = useState("all")
  const sessions = useSelector(getSessions)

  const [selected, updateSelected] = useState(null)
  const [selected_feedback, selectFeedback] = useState(null)

  const token = useSelector(getToken)

  useEffect(() => {
    async function loadFeedback() {
      try {
        const access = await TokenGenerator(token)
        if (access) dispatch(refreshToken(access))

        dispatch(sessionsRequested())
        const feedback_data = await api.feedback.GET.sessions(token.access)
        dispatch(sessionsReceived(feedback_data.data))
      } catch (err) {
        console.log(err.message)
        dispatch(sessionsRequestFailed())
      }
    }

    loadFeedback()
  }, [])

  const resolveFeedback = async () => {
    try {
      const result = await api.feedback.PUT.updateFeedback(
        selected_feedback.id,
        selected_feedback.domain,
        selected_feedback.rating,
        selected_feedback.chatsession,
        selected_feedback.feedback,
        selected_feedback.user_id,
        token.access
      )
      window.location.reload(false)
    } catch (err) {
      console.log(err.response)
    }
  }

  useEffect(() => {
    const feedback = sessions.filter(session => session.id === selected)
    selectFeedback(feedback[0])
  }, [selected, updateSelected])

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth='xl'>
        {/* <Breadcrumbs className={classes.breadcrumb}>
          <Link style={{ color: '#d2d5d9' }} href='/admin/dashboard'>
            <Typography variant="h6">Dashboard</Typography>
          </Link>
          <Link style={{ color: 'white' }} href='/admin/dashboard/feedback'>
            <Typography variant="h6">Feedback</Typography>
          </Link>
        </Breadcrumbs> */}
        <Grid container className={classes.grid_container}>
          <Grid item lg={5} className={classes.grid_item1}>
            <Typography variant="h2" className={classes.title}>
              Chat session feedbacks
            </Typography>
          </Grid>
          <Grid item lg={7} className={classes.grid_item1}>
            <Card className={classes.feedback_card}>
              <CardContent style={{ height: '100%' }}>
                <Grid container className={classes.grid_container} justifyContent="space-evenly">
                  <Grid item md={5} className={classes.grid_item1} direction="column">
                    {/* <FormControl component="fieldset">
                      <FormLabel component="legend">Filter Feedback</FormLabel>
                      <RadioGroup name="filter" value={filter} onChange={e => changeFilter(e.target.value)}>
                        <FormControlLabel control={<Radio />} label="All" value="all" />
                        <FormControlLabel control={<Radio />} label="Negative Feedback" value="negative" />
                        <FormControlLabel control={<Radio />} label="Positive Feedback" value="positive" />
                        <FormControlLabel control={<Radio />} label="Resolved" value="resolved" />
                        <FormControlLabel control={<Radio />} label="Unresolved" value="unresolved" />
                      </RadioGroup>
                    </FormControl> */}

                    <Box className={classes.feedbacks}>
                      {sessions && sessions.map((session, index) => <FeedbackItem key={index} index={index + 1} selectFeedback={(id) => updateSelected(id)} {...session} />)}
                    </Box>
                  </Grid>
                  <div style={{ border: '1px solid #d2d5d9', height: '100%' }} />
                  <Grid item md={6} direction='column' className={classes.grid_item2}>
                    <Typography variant="h5" className={classes.heading}>Feedback Details</Typography>
                    <Grid container>
                      <Grid item md={3}>
                        <Typography variant="h6" style={{ fontWeight: 600 }}>Domain</Typography>
                        {selected && selected_feedback && <Typography variant="h6">{selected_feedback.domain.toUpperCase()}</Typography>}
                      </Grid>
                      <Grid item md={6}>
                        <Typography variant="h6" style={{ fontWeight: 600 }}>Resolve Status</Typography>
                        {selected && selected_feedback && <Typography variant="h6">{selected_feedback.resolved ? 'Resolved' : 'Unresolved'}</Typography>}
                      </Grid>
                      <Grid item md={3}>
                        <Typography variant="h6" style={{ fontWeight: 600 }}>Rating</Typography>
                        {selected && selected_feedback && <Typography variant="h6">{selected_feedback.rating}</Typography>}
                      </Grid>
                    </Grid>
                    <ChatDisplay />
                    {selected && selected_feedback && !selected_feedback.resolved &&
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => resolveFeedback()}
                        className={classes.button}
                      >
                        Mark As Resovled
                      </Button>}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Feedback
