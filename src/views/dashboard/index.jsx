import React, { useState, useEffect } from 'react'
import { Button, Card, Dialog, DialogContent, Grid, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core';
import CountBox from './../../components/CountBox';
import Graph from '../../components/Graph';
import api from './../../api/index';
import { MonthDivider } from './../../helpers/GraphDivider';
import { useSelector } from 'react-redux';
import { getUser } from './../../store/slices/auth';
import { Redirect } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

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
  button: {
    width: "fit-content",
    fontSize: "1rem",
    marginLeft: "auto",
    marginTop: theme.spacing(5)
  },
  dialog_body: {
    height: "50vh",
    aspectRatio: "16 / 10"
  },
  row: {
    marginBottom: theme.spacing(3),
    width: "100%"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 600
  }
}))


const Dashboard = () => {
  const classes = useStyles()
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

  const [news, setNews] = useState({
    title: "",
    date: "",
    body: ""
  })

  const user = useSelector(getUser)

  useEffect(() => {
    async function loadData() {
      try {
        const sessions = await api.feedback.GET.sessions()
        const feedback = sessions.data.filter(s => s.feedback !== null)

        update_session_count(MonthDivider(sessions.data))
        update_feedback_count(MonthDivider(feedback))
      } catch (err) {
        console.log(err)
      }
    }

    loadData()
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

  const changeGraph = (title, format, data) => {
    updateData({
      title: title,
      format: format,
      data: data
    })
  }

  // if (!user.is_admin) return <Redirect to="/home" />

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid container sm={12} md={6} xl={4}>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox
              title="Active Users"
              subtitle="(last 24h)"
              count={20}
              disableGraph={true}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox
              title="Registered Users"
              subtitle="(last month)"
              count={10}
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
          <Button
            color="secondary"
            size="medium"
            variant="contained"
            className={classes.button}
            onClick={() => toggleOpen(true)}
          >
            Add Updates
          </Button>
        </Grid>
      </Grid>


      <Dialog
        open={openDialog}
        onClose={() => toggleOpen(false)}
      >
        <DialogContent className={classes.dialog_body}>
          <Grid container>
            <Grid item sm={6}>
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
                <MenuItem value="instruction">
                  <Typography variant="body2">Instructions</Typography>
                </MenuItem>
              </TextField>

              {infoType === "news" &&
                <div>
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

                  <TextField
                    name="title"
                    className={classes.row}
                    value={news.title}
                    label="Title"
                    onChange={e => setNews({ ...news, title: e.target.value })}
                  />

                  <MuiPickersUtilsProvider>

                  </MuiPickersUtilsProvider>

                  <TextField
                    name="body"
                    className={classes.row}
                    value={news.body}
                    label="Body"
                    onChange={e => setNews({ ...news, body: e.target.value })}
                  />
                </div>
              }
            </Grid>

            <Grid item sm={6} direction="column" alignItems="center">
              <Typography variant="h5" className={classes.title}>
                {infoType === "news" ? "Add to Newsfeed" : "Add Instruction"}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard
