import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import CountBox from './../../components/CountBox';
import Graph from '../../components/Graph';
import api from './../../api/index';
import { MonthDivider } from './../../helpers/GraphDivider';

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

  // useEffect(() => {
  //   async function loadData() {
  //     try{

  //     } catch(err) {

  //     }
  //   }

  //   loadData()
  // }, [])

  const changeGraph = (title, format, data) => {
    updateData({
      title: title,
      format: format,
      data: data
    })
  }

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
        <Grid container sm={12} md={8} xl={6} className={classes.graph}>
          <Graph title={data.title} format={data.format} data={data.data} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
