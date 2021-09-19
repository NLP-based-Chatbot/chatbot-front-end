import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import * as Yup from 'yup'
// import axios from "axios";

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
  error: {
    color: "#EDC3C0"
  }
}));

const Register = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repassword: ""
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(4, 'Enter a longer username')
        .required('Required Field'),
      email: Yup.string()
        .email('Invalid Type')
        .required('Required Field'),
      password: Yup.string()
        .min(6, 'Minimum of 6 Characters Needed')
        .required('Required Field'),
      repassword: Yup.string()
        .min(6, 'Minimum of 6 Characters Needed')
        .required('Required Field'),
    }),
    onSubmit: async (username, email, password, repassword) => console.log(username, email, password, repassword)
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
                      name="username"
                      variant="outlined"
                      required
                      fullWidth
                      id="userName"
                      label="Full Name"
                      autoFocus
                      {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && <div className={classes.error}>{formik.errors.username}</div>}
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
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && <div className={classes.error}>{formik.errors.password}</div>}
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Confirm Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      {...formik.getFieldProps('repassword')}
                    />
                    {formik.touched.repassword && formik.errors.repassword && <div className={classes.error}>{formik.errors.repassword}</div>}
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
