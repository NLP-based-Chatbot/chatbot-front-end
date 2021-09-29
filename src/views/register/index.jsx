import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import * as Yup from 'yup'
import api from './../../api/index';
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
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
    marginTop: theme.spacing(2),
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

const Register = () => {
  const classes = useStyles();
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: ""
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string()
        .min(1, 'Enter a longer first name')
        .required('Required Field'),
      last_name: Yup.string()
        .min(1, 'Enter a longer last name')
        .required('Required Field'),
      email: Yup.string()
        .email('Invalid Type')
        .required('Required Field'),
      password: Yup.string()
        .min(6, 'Minimum of 6 Characters Needed')
        .required('Required Field'),
      re_password: Yup.string()
        .min(6, 'Minimum of 6 Characters Needed')
        .required('Required Field'),
    }),
    onSubmit: async ({ first_name, last_name, email, password, re_password }) => {
      try {
        await api.user.POST.signUp(first_name, last_name, email, password, re_password)
        toast.success("Registration success, Check your email for activation")
        setTimeout(() => {
          history.push('/')
        }, 1000)
      } catch (err) {
        toast.error("Registration failed")
        Object.values(err.response.data)[0].map((error) => toast.error(error))
        console.log(err.response.data)
      }
    }
  })

  // const submit = async (username, email, password, repassword) => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   const body = JSON.stringify({ username, email, password, repassword })

  //   try {
  //     const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}auth/users/`, body, config)
  //     console.log("data added")
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }

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
                Registration
              </Typography>
              <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CustomTextField
                      autoComplete="name"
                      name="first_name"
                      variant="outlined"
                      required
                      fullWidth
                      id="first_name"
                      label="First Name"
                      inputProps={{ className: classes.inputtext }}
                      {...formik.getFieldProps('first_name')}
                    />
                    {formik.touched.first_name && formik.errors.first_name && <div className={classes.error}>{formik.errors.first_name}</div>}
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      autoComplete="name"
                      name="last_name"
                      variant="outlined"
                      required
                      fullWidth
                      id="last_name"
                      label="Last Name"
                      inputProps={{ className: classes.inputtext }}
                      {...formik.getFieldProps('last_name')}
                    />
                    {formik.touched.last_name && formik.errors.last_name && <div className={classes.error}>{formik.errors.last_name}</div>}
                  </Grid>
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
                  Register
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/" variant="body2">
                      Already have an account? Sign in from here
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

export default Register;
