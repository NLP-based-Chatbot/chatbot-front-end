import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { ExpandMore, Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1, 0)
  }
}))

const Instruction = ({ label, body, deleteIns }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
          <Typography variant="body2">{label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption">{body}</Typography>
        </AccordionDetails>
      </Accordion>

      <IconButton
        onClick={() => deleteIns()}
      >
        <Delete />
      </IconButton>
    </div>
  )
}

export default Instruction
