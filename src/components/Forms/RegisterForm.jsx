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
  

const RegisterForm = ({onSubmit}) => {
    const classes = useStyles();
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
        onSubmit: onSubmit
      })
    
    return (
        <div>
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
                    {formik.touched.first_name && formik.errors.first_name && <div data-testid="err-firstname" className={classes.error}>{formik.errors.first_name}</div>}
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
                    {formik.touched.last_name && formik.errors.last_name && <div data-testid="err-lastname" className={classes.error}>{formik.errors.last_name}</div>}
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
                    {formik.touched.password && formik.errors.password && <div data-testid="err-pwd"  className={classes.error}>{formik.errors.password}</div>}
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
                      inputProps={{ "data-testid":"re_password", className: classes.inputtext }}
                      {...formik.getFieldProps('re_password')}
                    />
                    {formik.touched.re_password && formik.errors.re_password && <div data-testid="err-repwd" className={classes.error}>{formik.errors.re_password}</div>}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  data-testid="register"
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
        </div>
    );
};

export default RegisterForm;