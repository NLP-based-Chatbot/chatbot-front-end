import { Card } from '@material-ui/core';
import React from 'react'
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line } from 'recharts';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}))

const Graph = ({ data }) => {
  const classes = useStyle()
  return (
    <Card className={classes.root}>
      <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="4 4" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line name="Active Users" type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </Card>
  )
}

export default Graph
