import {
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router-dom";
import api from '../../api';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserSignedIn } from './../../store/slices/auth';
import RegisterForm from "../../components/Forms/RegisterForm";
import { ToastContainer } from "react-toastify";

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
  const signedIn = useSelector(getUserSignedIn)
  const history = useHistory()

  const handleSubmit = async ({ first_name, last_name, email, password, re_password }) => {
    let user_type = "user"
    try {
      await api.user.POST.signUp(first_name, last_name, email, user_type, password, re_password)
      toast.success("Registration success, Check your email for activation")
      setTimeout(() => {
        history.push('/')
      }, 5000)
    } catch (err) {
      toast.error("Registration failed")
      Object.values(err.response.data)[0].map((error) => toast.error(error))
      console.log(err.response.data)
    }
  }

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

  if (signedIn) return <Redirect to="/home" />

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
          <RegisterForm onSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
