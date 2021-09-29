import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
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

const ResetPassword = () => {
  const classes = useStyles()
  const { uid, token } = useParams()

  const formik = useFormik({
    initialValues: {
      password: "",
      re_password: ""
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, 'Minimum of 6 Characters Needed')
        .required('Required Field'),
      re_password: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords need to be the same"
        )
      })
    }),
    onSubmit: async ({ password, re_password }) => {
      try {
        await api.user.POST.resetPassword(uid, token, password, re_password)
        toast.success('Password reset successful')
      } catch (err) {
        console.log(err)
        toast.error('Password reset failed')
      }
    }
  })

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <ToastContainer />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Enter your new password
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CustomTextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{ className: classes.inputtext }}
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                variant="outlined"
                required
                fullWidth
                name="re_password"
                label="Confirm Password"
                type="password"
                id="re_password"
                autoComplete="current-password"
                inputProps={{ className: classes.inputtext }}
                {...formik.getFieldProps('re_password')}
              />
              {formik.touched.re_password && formik.errors.re_password && <div className={classes.error}>{formik.errors.re_password}</div>}
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
        </form>
      </div>
    </Container>
  )
}

export default ResetPassword
