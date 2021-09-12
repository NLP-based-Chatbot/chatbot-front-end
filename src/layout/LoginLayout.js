import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "../containers/Footer";

const LoginLayout = (props) => {
  const classes = useStyles()
  return (
    <Container {...props} maxWidth='false' disableGutters className={classes.body}>
      <Box pt="50px" pb='50px'>{props.children}</Box>
      <Footer />
    </Container>
  );
};

const useStyles = makeStyles((theme)=>({
  body: {
    minHeight:'100vh',
    paddingTop:'5vh',
    display: 'flex',
    flexDirection: 'column',
    background:`linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
  }
}))

export default LoginLayout;
