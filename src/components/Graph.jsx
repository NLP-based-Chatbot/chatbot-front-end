import { Card } from '@material-ui/core';
import React, { useEffect } from 'react'
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line } from 'recharts';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}))

const Graph = ({ title, format, data }) => {
  const classes = useStyle()
  let x_format = "MMM MMMM"

  useEffect(() => {
    if (format === "date") x_format = "Do"
  }, [format])

  const graph_data = [
    {
      "name": `${moment().add(-4, format).format(x_format)}`.substr(0, 3),
      "users": data[0]
    },
    {
      "name": `${moment().add(-3, format).format(x_format)}`.substr(0, 3),
      "users": data[1]
    },
    {
      "name": `${moment().add(-2, format).format(x_format)}`.substr(0, 3),
      "users": data[2]
    },
    {
      "name": `${moment().add(-1, format).format(x_format)}`.substr(0, 3),
      "users": data[3]
    },
    {
      "name": `${moment().format(x_format)}`.substr(0, 3),
      "users": data[4]
    },
  ]

  return (
    <Card className={classes.root}>
      <LineChart width={700} height={400} data={graph_data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="4 4" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line name={title} type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </Card>
  )
}

export default Graph
