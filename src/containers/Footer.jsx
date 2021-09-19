import {
  Container,
  makeStyles,
  Typography,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const classes = useStyles();
  const { description, title } = props;
  return (
    <ThemeProvider theme={theme}>
      <footer className={classes.footer}>
        <Container>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </ThemeProvider>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  footer: {
    background: `linear-gradient(45deg, ${theme.palette.secondary.light} , ${theme.palette.secondary.main} 90%)`,
    padding: theme.spacing(2, 2),
    marginTop: 'auto'
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://wingman.com/">
        Wingman Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
