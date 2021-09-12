import { Box, Container } from "@material-ui/core";
import React from "react";
import Footer from "../containers/Footer";

const LoginLayout = (props) => {
  return (
    <Container {...props} maxWidth='false' disableGutters>
      <Box pt="50px" pb='50px'>{props.children}</Box>
      <Footer />
    </Container>
  );
};

export default LoginLayout;
