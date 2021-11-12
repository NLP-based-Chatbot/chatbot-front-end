import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserSignedIn } from "./../../store/slices/auth";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../components/Forms/LoginForm";
import { useHistory } from "react-router";
import api from "../../api";
import { toast } from "react-toastify";
import {
  userReceived,
  userRequested,
  userRequestFailed,
  userTokenReceived,
  userTokenRequested,
  userTokenRequestFailed,
} from "../../store/slices/auth";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: theme.spacing(10),
  },
}));

const Login = () => {
  const classes = useStyles();
  const signedIn = useSelector(getUserSignedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async ({ email, password }) => {
    try {
      dispatch(userTokenRequested());
      const res = await api.user.POST.signIn(email, password);
      await dispatch(userTokenReceived(res.data));

      dispatch(userRequested());
      try {
        const user = await api.user.GET.getUser(res.data.access);
        dispatch(userReceived(user.data));
        toast.success("Successful login");
        if (user.is_admin) {
          setTimeout(() => {
            history.push("/admin/dashboard");
          }, 2000);
        } else {
          setTimeout(() => {
            history.push("/home");
          }, 2000);
        }
      } catch (err) {
        dispatch(userRequestFailed());
      }
    } catch (err) {
      dispatch(userTokenRequestFailed());
      toast.error("Login failed");
    }
  };

  if (signedIn) return <Redirect to="/home" />;

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
          <LoginForm onSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
