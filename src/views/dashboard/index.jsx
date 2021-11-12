import React, { useState, useEffect } from 'react'
import { Box, Button, ButtonGroup, Dialog, DialogContent, Grid, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core';
import CountBox from './../../components/CountBox';
import Graph from '../../components/Graph';
import api from './../../api/index';
import { MonthDivider } from './../../helpers/GraphDivider';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getToken, refreshToken, getUserSignedIn } from './../../store/slices/auth';
import { Redirect } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from "yup"
import moment from "moment"
import clsx from 'clsx';
import Instruction from './../../components/Chatbot/Instruction';
import TokenGenerator from './../../helpers/TokenRefresh';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)",
    display: "flex",
    alignItems: "center"
  },
  box: {
    display: "flex",
    justifyContent: "center"
  },
  graph: {
    height: "100%"
  },
  button_group: {
    width: "fit-content",
    fontSize: "1rem",
    margin: theme.spacing(3, 0),
    marginLeft: "auto"
  },
  button: {
    margin: theme.spacing(0, 2)
  },
  dialog_body: {
    height: "50vh",
    aspectRatio: "16 / 10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3, 0)
  },
  row: {
    marginBottom: theme.spacing(3),
    width: "100%"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 600
  },
  submit: {
    marginTop: "auto"
  },
  instruction_container: {
    padding: theme.spacing(2, 1),
    borderRadius: "10px",
    backgroundColor: "#ededed",
    maxHeight: "55%",
    overflowY: "auto"
  }
}))

const Dashboard = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const signedIn = useSelector(getUserSignedIn)
  const history = useHistory()

  const [data, updateData] = useState({
    title: "",
    format: "month",
    data: [0, 0, 0, 0, 0]
  })
  const [session_count, update_session_count] = useState([0, 0, 0, 0, 0])
  const [feedback_count, update_feedback_count] = useState([0, 0, 0, 0, 0])

  const [openDialog, toggleOpen] = useState(false)
  const [infoType, changeInfoType] = useState("news")
  const [domain, setDomain] = useState("healthcare")

  const [users, setUsers] = useState([])
  const [activeUsers, setActiveUsers] = useState(0)
  const [registeredUsers, setRegisteredUsers] = useState(0)

  const [news, setNews] = useState({
    title: "",
    date: moment().format("YYYY-MM-DD"),
    body: "",
    imageUrl: "/healthcare_launch.jpg"
  })

  const [instruction, setInstruction] = useState({
    label: "",
    body: ""
  })

  const [instructions, updateInstructions] = useState([
    {
      label: "Feature 1",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quidem possimus, modi fugit ex, enim hic iusto quasi facilis cupiditate voluptas tempora placeat nostrum, beatae obcaecati est illum at perspiciatis."
    },
    {
      label: "Feature 2",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quidem possimus, modi fugit ex, enim hic iusto quasi facilis cupiditate voluptas tempora placeat nostrum, beatae obcaecati est illum at perspiciatis."
    }
  ])

  const user = useSelector(getUser)
  const token = useSelector(getToken)

  useEffect(() => {
    async function loadData() {
      try {
        const access = await TokenGenerator(token)
        if (access) dispatch(refreshToken(access))

        const sessions = await api.feedback.GET.sessions(token.access)
        const feedback = sessions.data.filter(s => s.feedback !== null)

        update_session_count(MonthDivider(sessions.data))
        update_feedback_count(MonthDivider(feedback))
      } catch (err) {
        console.log(err.message)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    async function loadUsers() {
      try {
        const access = await TokenGenerator(token)
        if (access) dispatch(refreshToken(access))

        setActiveUsers(0)
        setRegisteredUsers(0)

        const user_data = await api.user.GET.getUsers(token.access)
        setUsers(user_data.data)

        for (let u of user_data.data) {
          const last_login = moment(u.last_login)
          const registered = moment(u.user_created)
          if (moment().diff(last_login, 'hours') < 24) {
            setActiveUsers(activeUsers => activeUsers + 1)
          }
          if (moment().diff(registered, 'days') < 30) {
            setRegisteredUsers(registeredUsers => registeredUsers + 1)
          }
        }

      } catch (err) {
        console.log(err.message)
      }
    }

    loadUsers()
  }, [])

  const formik_news = useFormik({
    initialValues: {
      title: "",
      body: ""
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("This field is required"),
      body: Yup.string().required("This field is required")
    })
  })

  const deleteIns = (index) => {
    let new_instructions = [...instructions.slice(0, index), ...instructions.slice(index + 1, instructions.length)]
    updateInstructions(new_instructions)
  }

  const addInstruction = () => {
    updateInstructions([...instructions, instruction])
  }

  const changeGraph = (title, format, data) => {
    updateData({
      title: title,
      format: format,
      data: data
    })
  }

  if (!signedIn || !user.is_superuser) return <Redirect to="/home" />

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid container sm={12} md={6} xl={4}>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox
              title="Active Users"
              subtitle="(last 24h)"
              count={activeUsers}
              disableGraph={true}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox
              title="Registered Users"
              subtitle="(last month)"
              count={registeredUsers}
              disableGraph={true}
            />
          </Grid>

          {/* <Grid item xs={12} md={12} className={classes.box}>
            <CountBox
              title="Registered users"
              count={20}
              disableGraph={true}
            />
          </Grid> */}

          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox
              title="Chat Sessions"
              subtitle="(last month)"
              count={session_count[4]}
              changeGraph={() => changeGraph(
                "Chat Sessions",
                "months",
                session_count
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox
              title="Feedbacks"
              subtitle="(last month)"
              count={feedback_count[4]}
              changeGraph={() => changeGraph(
                "Feedbacks",
                "months",
                feedback_count
              )}
            />
          </Grid>
        </Grid>
        <Grid container direction="column" sm={12} md={8} xl={6} className={classes.graph}>
          <Graph title={data.title} format={data.format} data={data.data} />

          <ButtonGroup
            color="secondary"
            size="medium"
            variant="contained"
            className={classes.button_group}
          >
            <Button
              className={classes.button}
              onClick={() => history.push('/admin/dashboard/feedback')}
            >
              View Feedback
            </Button>
            <Button
              className={classes.button}
              onClick={() => toggleOpen(true)}
            >
              Add Updates
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={() => {
          toggleOpen(false)
          setNews({
            title: "",
            date: moment().format("YYYY-MM-DD"),
            body: ""
          })
          setInstruction({
            label: "",
            body: ""
          })
        }}
      >
        <DialogContent className={classes.dialog_body}>
          <Grid container justifyContent="space-evenly" style={{ minHeight: "90%" }}>
            <Grid item sm={6} style={{ minHeight: "100%" }}>
              <TextField
                className={classes.row}
                select
                label="Information type"
                value={infoType}
                onChange={e => changeInfoType(e.target.value)}
              >
                <MenuItem value="news">
                  <Typography variant="body2">News</Typography>
                </MenuItem>
                <MenuItem value="instructions">
                  <Typography variant="body2">Instructions</Typography>
                </MenuItem>
              </TextField>

              <TextField
                className={classes.row}
                select
                label="Domain"
                value={domain}
                onChange={e => setDomain(e.target.value)}
              >
                <MenuItem value="healthcare">
                  <Typography variant="body2">Health Care</Typography>
                </MenuItem>
                <MenuItem value="telecom">
                  <Typography variant="body2">Telecommunication</Typography>
                </MenuItem>
                <MenuItem value="transport">
                  <Typography variant="body2">Public Transportation</Typography>
                </MenuItem>
              </TextField>

              {infoType === "news" &&
                <div>
                  <TextField
                    name="title"
                    className={classes.row}
                    value={news.title}
                    label="Title"
                    onChange={e => setNews({ ...news, title: e.target.value })}
                    InputLabelProps={{
                      shrink: true
                    }}
                    multiline
                  />

                  <TextField
                    name="date"
                    type="date"
                    value={news.date}
                    label="Date"
                    className={classes.row}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={e => {
                      setNews({ ...news, date: e.target.value })
                      console.log(e.target.value)
                    }}
                  />

                  <TextField
                    name="body"
                    className={classes.row}
                    value={news.body}
                    label="Body"
                    onChange={e => setNews({ ...news, body: e.target.value })}
                    InputLabelProps={{
                      shrink: true
                    }}
                    multiline
                  />
                </div>
              }

              {infoType === "instructions" && instructions &&
                <Box
                  className={classes.instruction_container}
                >
                  {instructions.map((instruction, index) => <Instruction key={index} deleteIns={() => deleteIns(index)} {...instruction} />)}
                </Box>
              }
            </Grid>

            <Grid item sm={5} direction="column" alignItems="center" style={{ minHeight: "100%" }}>
              <Typography variant="h5" className={clsx(classes.title, classes.row)}>
                {infoType === "news" ? "Add to Newsfeed" : "Add Instruction"}
              </Typography>

              {infoType === "news" &&
                <div>
                  <TextField
                    className={classes.row}
                    select
                    label="Select Image"
                    value={news.imageUrl}
                    onChange={e => setNews({ ...news, imageUrl: e.target.value })}
                  >
                    <MenuItem value={`/${domain}_launch.jpg`}>
                      <Typography variant="body2">Launch</Typography>
                    </MenuItem>
                  </TextField>
                  <img
                    src={news.imageUrl}
                    height="auto"
                    width="100%"
                    alt="image"
                  />
                </div>
              }

              {infoType === "instructions" &&
                <div>
                  <TextField
                    name="label"
                    className={classes.row}
                    label="Label"
                    value={instruction.label}
                    onChange={e => setInstruction({ ...instruction, label: e.target.value })}
                    multiline
                    InputLabelProps={{
                      shrink: true
                    }}
                  />

                  <TextField
                    name="body"
                    className={classes.row}
                    label="Body"
                    value={instruction.body}
                    onChange={e => setInstruction({ ...instruction, body: e.target.value })}
                    multiline
                    InputLabelProps={{
                      shrink: true
                    }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {
                      addInstruction()
                      setInstruction({
                        label: "",
                        body: ""
                      })
                    }}
                  >
                    Add
                  </Button>
                </div>
              }
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard
