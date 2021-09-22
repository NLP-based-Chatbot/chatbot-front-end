import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import CountBox from './../../components/CountBox';
import moment from 'moment';
import Graph from '../../components/Graph';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    height: "calc(100vh - 110px)",
    display: "flex",
    alignItems: "center"
  },
  box: {
    display: "flex",
    justifyContent: "center"
  }
}))

// Dummy Data
const active_user_data = [
  {
    "name": `${moment().format("L")}`,
    "users": 20
  },
  {
    "name": `${moment().add(-1, 'day').format("L")}`,
    "users": 25
  }, {
    "name": `${moment().add(-2, 'day').format("L")}`,
    "users": 30
  }, {
    "name": `${moment().add(-3, 'day').format("L")}`,
    "users": 10
  }, {
    "name": `${moment().add(-4, 'day').format("L")}`,
    "users": 15
  },
]

const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-around">
        <Grid container sm={12} md={6} xl={4}>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox title="Active Users" subtitle="(last 24h)" count={20} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox title="Registered Users" subtitle="(last month)" count={10} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox title="Chat Sessions" subtitle="(last month)" count={60} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.box}>
            <CountBox title="Feedbacks" subtitle="(last month)" count={40} />
          </Grid>
        </Grid>
        <Grid container sm={12} md={8} xl={6}>
          <Graph data={active_user_data} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
