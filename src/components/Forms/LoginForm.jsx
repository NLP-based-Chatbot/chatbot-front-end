import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup'

import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import CustomTextField from '../CustomTextField';
import { Link } from 'react-router-dom';


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
  
const LoginForm = ({onSubmit}) => {
    const classes = useStyles();
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
        onSubmit: onSubmit
      })
    
    return (
        <div>
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
                    {formik.touched.email && formik.errors.email && <div data-testid="err-email" className={classes.error}>{formik.errors.email}</div>}
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
                      inputProps={{ "data-testid":"password", className: classes.inputtext }}
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && <div data-testid="err-pwd" className={classes.error}>{formik.errors.password}</div>}
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
                <Grid container justifyContent="center" spacing="2">
                  <Grid item>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/forget_password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/register" variant="body2">
                      Not yet registered? Register from here
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
    );
};

export default LoginForm;