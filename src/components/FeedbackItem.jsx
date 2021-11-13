import React, { useState, useEffect } from 'react'
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.contrastText,
    margin: theme.spacing(2),
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  tag: {
    padding: theme.spacing(1),
    borderRadius: '10px'
  }
}))

const FeedbackItem = ({ index, id, domain, timestamp, resolved, selectFeedback }) => {
  const classes = useStyles()
  const [tagColor, changeColor] = useState(resolved ? 'green' : 'red')

  useEffect(() => {
    changeColor(resolved ? 'green' : 'red')
  }, [resolved])

  return (
    <Box className={classes.root}>
      <Typography variant="body2">{`${index}.`}</Typography>
      <Typography variant="body2">{domain.toUpperCase()}</Typography>
      <Typography variant="body2">{`${moment(timestamp).format("YYYY-DD-MM")}`}</Typography>
      <Box className={classes.tag} style={{ backgroundColor: tagColor }}>
        {resolved ? <Typography variant="body2" style={{ color: 'white' }}>Resolved</Typography> : <Typography variant="body2" style={{ color: 'white' }}>Unresolved</Typography>}
      </Box>
      <IconButton
        onClick={() => {
          selectFeedback(id)
        }}
      >
        <OpenInNewIcon />
      </IconButton>
    </Box>
  )
}

export default FeedbackItem
