import {
  Button,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'
import { fonts } from './../../utils/theme';
import { useParams, useHistory } from 'react-router-dom';
import api from './../../api/index';
import { toast, ToastContainer } from 'react-toastify';

const useStyles = makeStyles(theme => ({
  root: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
  text: {
    color: theme.palette.primary.contrastText
  },
  button: {
    marginTop: theme.spacing(4),
    fontFamily: fonts.Poppins,
    fontWeight: 600,
    color: theme.palette.primary.main,
    height: "fit-content"
  }
}))

const AccountActivation = () => {
  const classes = useStyles()
  const { uid, token } = useParams()
  const history = useHistory()

  const activate = async () => {
    try {
      await api.user.POST.activateUser(uid, token)
      toast.success('User activated')
      setTimeout(() => {
        history.push('/')
      }, 500)
    } catch (err) {
      console.log(err)
      toast.error('Activation failed')
    }
  }

  return (
    <Container className={classes.root}>
      <ToastContainer />
      <Typography variant="h5" className={classes.text}>Click here to activate your account</Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => activate()}
      >
        Activate
      </Button>
    </Container>
  )
}

export default AccountActivation
