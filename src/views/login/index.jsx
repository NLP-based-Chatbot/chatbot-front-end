import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import { useFormik } from "formik";
import * as Yup from 'yup'
import api from './../../api/index';
import { useDispatch } from 'react-redux';
import { userReceived, userRequested, userRequestFailed, userTokenReceived, userTokenRequested, userTokenRequestFailed } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { getToken } from './../../store/slices/auth';
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: `linear-gradient(45deg, ${theme.palette.primary.light} , ${theme.palette.primary.main} 90%)`,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  logo: {
    marginTop: theme.spacing(10),
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
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const token = useSelector(getToken)
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid Type')
        .required('Required Field'),
      password: Yup.string()
        .min(6, 'Minimum of 6 Characters Needed')
        .required('Required Field')
    }),
    onSubmit: async ({ email, password }) => {
      try {
        dispatch(userTokenRequested())
        const res = await api.user.POST.signIn(email, password)
        dispatch(userTokenReceived(res.data))

        try {
          dispatch(userRequested())
          const user = await api.user.GET.getUser(token.access)
          dispatch(userReceived(user.data))
          toast.success("Successful login")
          setTimeout(() => {
            history.push("/home")
          }, 500)
        } catch (err) {
          dispatch(userRequestFailed())
          toast.error("Login failed")
        }

      } catch (err) {
        dispatch(userTokenRequestFailed())
        toast.error("Login failed")
      }
    }
  })

  return (
    <div>
      <ToastContainer />
      <Grid container alignItems="center" justifyContent="space-around">
        <Grid item sm={12} md={5}>
          <div className={classes.logo}>
            <img src="./logo.svg" width="400px" alt="logo" />
          </div>
        </Grid>

        <Grid item sm={12} md={5}>
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                User Login
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
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Login
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/register" variant="body2">
                      Not yet registered? Register from here
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
