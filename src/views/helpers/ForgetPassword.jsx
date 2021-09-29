import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import CustomTextField from './../../components/CustomTextField';
import { Link } from 'react-router-dom';
import api from './../../api/index';

const useStyles = makeStyles(theme => ({
  root: {
    height: "70vh",
    display: "flex",
    alignItems: "center"
  },
  paper: {
    display: "flex",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    background: `linear-gradient(45deg, ${theme.palette.primary.light} , ${theme.palette.primary.main} 90%)`,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    width: "fit-content"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  inputtext: {
    color: 'white'
  },
  error: {
    color: "#EDC3C0"
  }
}))

const ForgetPassword = () => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid Type')
        .required('Required Field')
    }),
    onSubmit: async ({ email }) => {
      try {
        console.log(email)
        await api.user.POST.forgotPassword(email)
        toast.success('Check your email')
      } catch (err) {
        console.log(err)
        toast.error('Reset password failed')
      }
    }
  })

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <ToastContainer />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Forgot Password? Enter your email
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CustomTextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputProps={{ className: classes.inputtext }}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link style={{ color: "white", textDecoration: "none" }} to="/" variant="body2">
                Go to login page from here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default ForgetPassword
