import React from 'react'
import { Button, makeStyles, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)",
    display: "flex",
    alignItems: "center",
  },
  text: {
    margin: theme.spacing(5, 0),
    color: theme.palette.primary.contrastText
  },
  link: {
    textDecoration: 'none'
  }
}))

const Error404 = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.text}>404: Page Not Found</Typography>
        <Button variant="contained" color="secondary">
          <Link to='/home' className={classes.link}>Go Back To Home</Link>
        </Button>
      </Container>
    </div>
  )
}

export default Error404
