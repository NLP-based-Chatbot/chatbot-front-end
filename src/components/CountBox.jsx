import { Box, Card, Typography, makeStyles, Button } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(3),
    height: "250px",
    width: "250px",
    paddingTop: theme.spacing(3)
  },
  weighted: {
    fontWeight: "600"
  },
  row: {
    paddingTop: theme.spacing(2),
  }
}))

const CountBox = ({ title, subtitle, count, changeGraph }) => {
  const classes = useStyles()
  return (
    <Card className={classes.box}>
      <Typography variant="subtitle1" className={clsx(classes.weighted, classes.row)}>
        {title}
      </Typography>
      <Typography variant="subtitle2" className={classes.weighted}>
        {subtitle}
      </Typography>
      <Typography variant="h3" className={clsx(classes.weighted, classes.row)}>
        {count}
      </Typography>
      <Box className={classes.row}>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.weighted}
          onClick={() => changeGraph()}
        >
          View Graph
        </Button>
      </Box>
    </Card>
  )
}

export default CountBox