import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "../containers/Footer";
import NavPanel from "../containers/NavPanel";

const HomeLayout = (props) => {
  const classes = useStyles();
  return (
    <Container
      {...props}
      maxWidth="false"
      disableGutters
      className={classes.body}
    >
      <NavPanel />
      <Box pb="50px">
        {props.children}
      </Box>
      <Footer />
    </Container>
  );
};
const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));
export default HomeLayout;
