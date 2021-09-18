import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";

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
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item sm={12} md={7}>
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
              <form className={classes.form} noValidate>
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
                    />
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
                    />
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
